const {validationResult}                 = require('express-validator');
const bullQueue                          = require('bull');

const config_cache                       = require('../config/cache');
const AppConstants                       = require('../constants/AppConstants');
const Mailer                             = require('../services/Mailer');
const Account                            = require('../services/Account');
const DeliverabilityInsights             = require('../services/DeliverabilityInsights');
const AccountTemplate                    = require('../services/AccountTemplate');
const {AuthenticationTokenGenerate, AuthenticationParseUser}      = require('../services/Authentication');

const sendMailQueue = new bullQueue('sendMailQueue', { redis: { port: config_cache.cache.redis_port, host: config_cache.cache.redis_host}});


const AppController = {

    async index(request, response, next){
      return response.status(200).json({
        type : AppConstants.RESPONSE_SUCCESS,
        message:  {
            name    : "O2O Caas API",
            version : 'V.1.0.0'
        }
      });
    },

    async sendEmails(request, response, next){
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
          response.status(422).json({
            type : AppConstants.RESPONSE_ERROR,
            message:  'Something went wrong, please try again later',
            data:  errors.array()
          });
          return;
      }else{
        const {template, to, from, locale, data} = request.body;
        const account = await AuthenticationParseUser(request.user);
        AccountTemplate.service.view({template : template, account_id : account._id}).then(async function(document){
          let document_content_locale = (locale === 'en') ? document.content.en : document.content.fr;
          const subject_locale = (locale === 'en') ? document.subject.en : document.subject.fr;           
          for (const key in data) {
              if (Object.hasOwnProperty.call(data, key)) {
                document_content_locale = document_content_locale.replace('{{'+key+'}}', data[key]);
              }
          }
          const options = {
            delay: 6000, 
            attempts: 2
          };
          const mailData = {
            from: from,
            to : to,
            subject : subject_locale,
            html : document_content_locale
          };
          sendMailQueue.add(mailData);   
          sendMailQueue.process(async function (job) {
            let Query_builder            = {};
            Query_builder.account_id     = account._id;
            Query_builder.recipient      = job.data.to;
            Mailer.send(job.data).then(function(mailresponse){
              Query_builder.status   = 'sent';
            }).then(function(error){
              Query_builder.status   = 'failed';
            });
            await DeliverabilityInsights.service.create(Query_builder);
          });
          response.status(200).json({
            type : AppConstants.RESPONSE_SUCCESS,
            message:  'Email has been sent successfully',
            data:   {}
          }); 
          return;
        }).catch(function(error){
          response.status(400).json({
            type : AppConstants.RESPONSE_ERROR,
            message:  'Something went wrong, please try again later',
            data: error
          });
          return;
        });
      }
    },

    async accountTemplates(request, response, next){
      const {id} = request.user;
      //const account = await Account.service.view({_id: id});
      const templates = await AccountTemplate.service.listWithTemplates({account_id : id});
      response.status(200).json({
        type : AppConstants.RESPONSE_SUCCESS,
        message:  'Account templates has been fetched successfully',
        data:   templates
      });   
    },

    async updateAccountTemplates(request, response, next){
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
          response.status(422).json({
            type : AppConstants.RESPONSE_ERROR,
            message:  'Something went wrong, please try again later',
            data:  errors.array()
          });
          return;
      }else{
        const id = request.params.id;
        const {template, type, subject, content, variables} = request.body;
        let Query_builder            = {};
        Query_builder.template       = template;
        Query_builder.type           = type;
        Query_builder.subject        = subject;
        Query_builder.content        = content;
        Query_builder.variables      = variables;
        AccountTemplate.service.update(id, Query_builder).then(function(document){
          response.status(200).json({
            type : AppConstants.RESPONSE_SUCCESS,
            message:  'Template has been updated successfully',
            data:  document
          });
          return;
        }).catch(function(error){
          response.status(400).json({
            type : AppConstants.RESPONSE_ERROR,
            message:  'Something went wrong, please try again later',
            data: error
          });
          return;
        });
      }
    },

    async deliverabilityInsights(request, response, next){
      const {id} = request.user;
      const Insights = await DeliverabilityInsights.service.list({account_id : id});
      return response.status(200).json({
        type : AppConstants.RESPONSE_SUCCESS,
        message:  'deliverability insights has been fetched successfully',
        data:   Insights
      });   
    },

    async refreshToken(request, response, next){
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
          response.status(422).json({
            type   : 'error',
            message:  errors.array()
          });
          return;
      }else{
         const { token } = request.body;
          Account.service.view({refresh_token: token}).then(async function (document) {
            if(document){
               await AuthenticationTokenGenerate(document, response, next);
            }else{
               response.status(400).json({
                  type   : AppConstants.RESPONSE_ERROR,
                  message:  'Invalid token',
                  data   :  {}
               });
               return;
            }
         }).catch(function (err) {
            response.status(400).json({
               type   : AppConstants.RESPONSE_ERROR,
               message:  'Something went wrong, please try again later',
               data   :  err
            });
            return;
         });
      }
    },

    async token(request, response, next){
      const {email} = request.body;
      Account.service.view({email: email}).then(async function(document){
        await AuthenticationTokenGenerate(document, response, next);
      }).catch(function(error){
        response.status(400).json({
          type : AppConstants.RESPONSE_ERROR,
          message:  'Something went wrong, please try again later',
          data: error
        });
        return;
      });
    }
    

  };
  
  module.exports = AppController;