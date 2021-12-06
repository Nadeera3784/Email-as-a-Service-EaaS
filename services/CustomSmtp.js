const {CustomSmtp_Model}    = require('../models');

var CustomSmtp = {};

CustomSmtp.list = async function(){
    return await CustomSmtp_Model.find({});
}

CustomSmtp.create = async function(query){
   return await CustomSmtp_Model.create(query);
}

CustomSmtp.view = async function(query){
    return await CustomSmtp_Model.findOne(query);
}

CustomSmtp.update = async function(id, query){
   return await CustomSmtp_Model.findOneAndUpdate(id, query, { new: true });
}

CustomSmtp.delete = async function(id){
    return await CustomSmtp_Model.findOneAndRemove({_id: id});
}



exports.service = CustomSmtp;