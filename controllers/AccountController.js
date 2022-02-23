const {validationResult}  = require('express-validator');

const Account             = require('../services/Account.js');
const Template            = require('../services/Template.js');
const AccountTemplate     = require('../services/AccountTemplate.js');
const CustomSmtp          = require('../services/CustomSmtp.js');
const DeliverabilityInsights          = require('../services/DeliverabilityInsights.js');
const AppConstants        = require('../constants/AppConstants.js');
const {AuthenticationTokenGenerate}      = require('../services/Authentication');

const AccountController = {

    async list(request, response, next){
      const email = request.query.email;
      let Query_builder = {};
      if (email != undefined && email != null) {
        Query_builder.email = email;
      }
      Account.service.list(Query_builder).then(function(documents){
          response.status(200).json({
            type : AppConstants.RESPONSE_SUCCESS,
            message:  'Account has been fetched successfully',
            data:  documents
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

    async create(request, response, next){
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            response.status(422).json({
              type : AppConstants.RESPONSE_ERROR,
              message:  'Something went wrong, please try again later',
              data:  errors.array()
            });
            return;
        }else{
            const {email, type} = request.body;
            let Query_builder        = {};
            Query_builder.email      = email;
            Query_builder.type       = type;
            Account.service.create(Query_builder).then(async function(document){
              const templates = await Template.service.list();
              if(templates.length > 0){
                for (let index = 0; index < templates.length; index++) {
                  let Query_builder             = {};
                  Query_builder.template        = templates[index].template;
                  Query_builder.account_id      = document._id;
                  Query_builder.type            = templates[index].type;
                  Query_builder.subject         = templates[index].subject;
                  Query_builder.content         = templates[index].content;
                  Query_builder.variables       = templates[index].variables;
                  await AccountTemplate.service.create(Query_builder);
                }
              }
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
    },

    async update(request, response, next){
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            response.status(422).json({
              type : AppConstants.RESPONSE_ERROR,
              message:  'Something went wrong, please try again later',
              data:  errors.array()
            });
            return;
        }else{
          const {email} = request.body;
          const id = request.params.id;
          let Query_builder        = {};
          Query_builder.email      = email;
          Account.service.update(id, Query_builder).then(function(document){
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

    async delete(request, response, next){
        const id = request.params.id;
        Account.service.delete(id).then(async function(document){
          await CustomSmtp.service.deleteAll({'account_id' : id});
          await AccountTemplate.service.deleteAll({'account_id' : id});
          await DeliverabilityInsights.service.deleteAll({'account_id' : id});
          response.status(200).json({
            type : AppConstants.RESPONSE_SUCCESS,
            message:  'Account has been deleted successfully',
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
}

module.exports = AccountController;