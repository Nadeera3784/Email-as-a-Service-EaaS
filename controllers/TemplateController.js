const {validationResult}  = require('express-validator');

const Template            = require('../services/Template.js');
const Account             = require('../services/Account.js');
const AccountTemplate     = require('../services/AccountTemplate.js');
const AppConstants        = require('../constants/AppConstants.js');

const TemplateController = {

    async list(request, response, next){
        const template_name = request.query.name;
        let Query_builder = {};
        if (template_name != undefined && template_name != null) {
          Query_builder.template = template_name;
        }
        Template.service.list(Query_builder).then(function(documents){
          response.status(200).json({
            type : AppConstants.RESPONSE_SUCCESS,
            message:  'Templates has been fetched successfully',
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
            const {template, type, subject, content, variables} = request.body;
            let Query_builder            = {};
            Query_builder.template       = template;
            Query_builder.type           = type;
            Query_builder.subject        = subject;
            Query_builder.content        = content;
            Query_builder.variables      = variables;
            Template.service.create(Query_builder).then(async function(document){
              const accounts = await Account.service.list();
              if(accounts){
                for (let index = 0; index < accounts.length; index++) {
                  const foundTemplate = await AccountTemplate.service.view({account_id : accounts[index]._id, template : template});
                  if(!foundTemplate){
                    let Query_builder             = {};
                    Query_builder.template        = template;
                    Query_builder.account_id      = accounts[index]._id;
                    Query_builder.type            = type;
                    Query_builder.subject         = subject;
                    Query_builder.content         = content;
                    Query_builder.variables       = variables;
                    await AccountTemplate.service.create(Query_builder);
                  }
                }
              }
              response.status(200).json({
                type : AppConstants.RESPONSE_SUCCESS,
                message:  'Template has been added successfully',
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
          const {template, type, subject, content, variables} = request.body;
          let Query_builder            = {};
          Query_builder.template       = template;
          Query_builder.type           = type;
          Query_builder.subject        = subject;
          Query_builder.content        = content;
          Query_builder.variables      = variables;
          Template.service.update(id, Query_builder).then(function(document){
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

    async delete(request, response, next){
        const id = request.params.id;
        Template.service.delete(id).then(function(document){
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

    async search(request, response, next){    
      let Query_builder = {
        recurring : {
          status : true
        }
      }
      Template.service.list(Query_builder).then(function(documents){
        response.status(200).json({
          type : AppConstants.RESPONSE_SUCCESS,
          message:  'Templates has been fetched successfully',
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
    }

}

module.exports = TemplateController;