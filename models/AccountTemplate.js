const mongoose = require('mongoose');

const _document_name = "AccountTemplate";

let DocumentSchema = mongoose.Schema({
  template: {
    type: String,
    required: true,
  },
  account_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
    required: true,
  },
  type: {
    type: String,
    required: true
  },
  subject: {
    en: String,
    fr: String,
  },
  content: {
    en: String,
    fr: String,
  },
  variables: {
    type: Array,
    default: []
  },
  created_at: {
    type: Date,
    default: Date.now,
  }
});


module.exports = mongoose.model(_document_name, DocumentSchema);


