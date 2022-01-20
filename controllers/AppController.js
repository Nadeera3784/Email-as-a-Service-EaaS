const {validationResult}                 = require('express-validator');
const bullQueue                          = require('bull');
const templateBuilder                    = require('ejs');
const config_cache                       = require('../config/cache');
const AppConstants                       = require('../constants/AppConstants');
const Mailer                             = require('../services/Mailer');
const Account                            = require('../services/Account');
const DeliverabilityInsights             = require('../services/DeliverabilityInsights');
const AccountTemplate                    = require('../services/AccountTemplate');
const CustomSmtp                         = require('../services/CustomSmtp');
const Templates                           = require('../services/Template')
const {AuthenticationTokenGenerate, AuthenticationParseUser}      = require('../services/Authentication');


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
          var subject_locale = "";
          var document_content_locale = "";
          for (let a = 0; a < document.subject.length; a++) {
            if(document.subject[a][locale]){
              subject_locale = document.subject[a][locale];
            }
          }
          for (let b = 0; b < document.content.length; b++) {
            if(document.content[b][locale]){
              document_content_locale = document.content[b][locale];
            }
          }
          for (const key in data.content) {
              if (Object.hasOwnProperty.call(data.content, key)) {
                document_content_locale = document_content_locale.replace('{{'+key+'}}', data.content[key]);
              }
          }
          for (const key in data.subject) {
            if (Object.hasOwnProperty.call(data.subject, key)) {
              subject_locale = subject_locale.replace('{{'+key+'}}', data.subject[key]);
            }
          }
          //document_content_locale = templateBuilder.render(document_content_locale, {data: data});
          const options = {
            delay: 6000, 
            attempts: 2
          };
          let mailData = {
            from: from,
            to : to,
            subject : subject_locale,
            html : document_content_locale,
            email_client : account.email_service,
            smtp : null
          };

          if(account.email_service === "custom"){
            const smtp = await CustomSmtp.service.view({account_id : account._id});
            mailData.smtp =  {
              host     : smtp.host,
              port     : smtp.port,
              username : smtp.username,
              password : smtp.password
            }
          }
          const sendMailQueue = new bullQueue('sendMailQueue', config_cache.cache.redis_host);
          sendMailQueue.add(mailData);   
          sendMailQueue.process(async function (job, done) {
            let Query_builder            = {};
            Query_builder.account_id     = account._id;
            Query_builder.recipient      = job.data.to;
            const is_send = await Mailer.send(job.data);
            if(is_send){
              Query_builder.status   = 'sent';
            }else{
              Query_builder.status   = 'failed';
            }
            await DeliverabilityInsights.service.create(Query_builder);
            done();
          }); 
          // var Query_builder            = {};
          // Query_builder.account_id     = account._id;
          // Query_builder.recipient      = to;
          // const is_send = await Mailer.send(mailData);
          // if(is_send){
          //   Query_builder.status   = 'sent';
          // }else{
          //   Query_builder.status   = 'failed';
          // }
          // await DeliverabilityInsights.service.create(Query_builder);
          response.status(200).json({
            type : AppConstants.RESPONSE_SUCCESS,
            message:  'Email has been sent successfully',
            data:   {}
          }); 
          return;
        }).catch(function(error){
          //TODO
          console.log('email send error', error);
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

    async showAccountTemplates(request, response, next){
      const id = request.params.id;
      AccountTemplate.service.view({_id : id}).then(function(document){
        return response.status(200).json({
          type : AppConstants.RESPONSE_SUCCESS,
          message:  'Template has been updated successfully',
          data:  document
        });

      }).catch(function(error){
        response.status(400).json({
          type : AppConstants.RESPONSE_ERROR,
          message:  'Something went wrong, please try again later',
          data: error
        });
        return;
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
        const {type, subject, content, variables} = request.body;
        let Query_builder            = {};
        //Query_builder.type           = type;
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

    async deleteAccountTemplates(request, response, next){
      const id = request.params.id;
      AccountTemplate.service.delete(id).then(function(document){
        response.status(200).json({
          type : AppConstants.RESPONSE_SUCCESS,
          message:  'Template has been deleted successfully',
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
    },

    async getAccountDetails(request, response, next){
      const {id} = request.user;
      const account = await Account.service.view({_id: id});
      const smtp = await CustomSmtp.service.view({account_id : id});
      return response.status(200).json({
        type : AppConstants.RESPONSE_SUCCESS,
        message:  'Account details has been fetched successfully',
        data:  { 
          account : account,
          smtp : smtp
        }
      }); 
    },

    async updateAccountDetails (request, response, next){
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
          response.status(422).json({
            type : AppConstants.RESPONSE_ERROR,
            message:  'Something went wrong, please try again later',
            data:  errors.array()
          });
          return;
      }else{
        const {email_service, host, port, username, password} = request.body;
        const {id} = request.user;
        let Query_builder        = {};
        Query_builder.email_service      = email_service;
        Account.service.update(id, Query_builder).then(async function(document){
          if(email_service === "custom"){
            let Query_builder            = {};
            Query_builder.host           = host;
            Query_builder.port           = port;
            Query_builder.username       = username;
            Query_builder.password       = password;
            const smtp = await CustomSmtp.service.view({account_id : id});
            if(smtp){
              await CustomSmtp.service.update(id, Query_builder);
            }else{
              Query_builder.account_id   = id;
              await CustomSmtp.service.create(Query_builder);
            }
          }
          response.status(200).json({
            type : AppConstants.RESPONSE_SUCCESS,
            message:  'Account has been updated successfully',
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

    async resetDatabase (request, response, next){
      await Account.service.deleteAll();
      await AccountTemplate.service.deleteAll();
      await CustomSmtp.service.deleteAll();
      await DeliverabilityInsights.service.deleteAll();
      await Templates.service.deleteAll();
      return response.status(200).json({
        type : AppConstants.RESPONSE_SUCCESS,
        message:  'Database has been reset successfully',
        data:  null
      }); 
    },
  };
  
  module.exports = AppController;