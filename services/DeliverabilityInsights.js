const {DeliverabilityInsights_Model}    = require('../models');

var DeliverabilityInsights = {};

DeliverabilityInsights.list = async function(){
    return await DeliverabilityInsights_Model.find({});
}

DeliverabilityInsights.create = async function(query){
   return await DeliverabilityInsights_Model.create(query);
}

DeliverabilityInsights.view = async function(query){
    return await DeliverabilityInsights_Model.findOne(query);
}

DeliverabilityInsights.update = async function(id, query){
   return await DeliverabilityInsights_Model.findOneAndUpdate(id, query, { new: true });
}

DeliverabilityInsights.delete = async function(id){
    return await DeliverabilityInsights_Model.findOneAndRemove({_id: id});
}

DeliverabilityInsights.deleteAll = async function(id){
    return await DeliverabilityInsights_Model.deleteMany({});
}


DeliverabilityInsights.findAccountByEmail = async function(email){
    return await DeliverabilityInsights_Model.findAccountByEmail(email);
}

DeliverabilityInsights.listWithTemplates = async function(query){
    return await DeliverabilityInsights_Model.find(query);
}

exports.service = DeliverabilityInsights;