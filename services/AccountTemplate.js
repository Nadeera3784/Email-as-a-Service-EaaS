const {AccountTemplate_Model}    = require('../models');

var AccountTemplate = {};

AccountTemplate.list = async function(){
    return await AccountTemplate_Model.find({});
}

AccountTemplate.create = async function(query){
   return await AccountTemplate_Model.create(query);
}

AccountTemplate.view = async function(query){
    return await AccountTemplate_Model.findOne(query);
}

AccountTemplate.update = async function(id, query){
   return await AccountTemplate_Model.findOneAndUpdate(id, query, { new: true });
}

AccountTemplate.delete = async function(id){
    return await AccountTemplate_Model.findOneAndRemove({_id: id});
}

AccountTemplate.deleteAll = async function(id){
    return await AccountTemplate_Model.deleteMany({});
}

AccountTemplate.findAccountByEmail = async function(email){
    return await AccountTemplate_Model.findAccountByEmail(email);
}

AccountTemplate.listWithTemplates = async function(query){
    return await AccountTemplate_Model.find(query);
}

exports.service = AccountTemplate;