const {Account_Model}    = require('../models');

var Account = {};

Account.list = async function(){
    return await Account_Model.find({});
}

Account.create = async function(query){
   return await Account_Model.create(query);
}

Account.view = async function(query){
    return await Account_Model.findOne(query);
}

Account.update = async function(id, query){
   return await Account_Model.findOneAndUpdate(id, query, { new: true });
}

Account.delete = async function(id){
    return await Account_Model.findOneAndRemove({_id: id});
}

Account.findAccountByEmail = async function(email){
    return await Account_Model.findAccountByEmail(email);
}


exports.service = Account;