const mongoose = require('mongoose');

const _document_name = "DeliverabilityInsights";

let DocumentSchema = mongoose.Schema({
  account_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
    required: true,
  },
  recipient: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now,
  }
});


module.exports = mongoose.model(_document_name, DocumentSchema);


