const mongoose = require('mongoose');

const _document_name = "CustomSmtp";

let DocumentSchema = mongoose.Schema({
  account_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
    required: true,
  },
  host: {
    type: String,
    required: true
  },
  port: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now,
  }
});


module.exports = mongoose.model(_document_name, DocumentSchema);


