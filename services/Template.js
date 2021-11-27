const {Template_Model}    = require('../models');

var Template = {};

Template.list = async function(query){
    return await Template_Model.find(query);
}

Template.create = async function(query){
    return await Template_Model.create(query);
}

Template.view = async function(query){
    return await Template_Model.findOne(query);
}

Template.update = async function(id, query){
    return await Template_Model.findOneAndUpdate(id, query, { new: true });
}

Template.delete = async function(id){
    return await Template_Model.findOneAndRemove({_id: id});
}

Template.deleteAll = async function(id){
    return await Template_Model.deleteMany({});
}

Template.findTemplateByName = async function(name){
  return await Template_Model.findTemplateByName(name);
}


exports.service = Template;