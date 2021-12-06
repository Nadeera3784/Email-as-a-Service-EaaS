const mongoose = require('mongoose');

const _document_name = "Account";

let DocumentSchema = mongoose.Schema({
    email : {
		type : String,
		required : true,
		trim : true
    },
    type : {
		type : String,
		required : true,
		trim : true
    },
	refresh_token : {
		type : String
    },
	email_service : {
		type : String,
		default: 'sendgrid'
	},
	created_at: {
		type: Date,
		default: Date.now,
	}
});

DocumentSchema.static('findAccountByID', function(id) {
	return new Promise((resolve, reject) => {
		mongoose.model(_document_name, DocumentSchema).findOne({_id : id}).exec(function (err, user){
		    if (err) reject(err)
		    resolve(user);
		});
    });
});

DocumentSchema.static('findAccountByEmail', function(email) {
	return new Promise((resolve, reject) => {
		mongoose.model(_document_name, DocumentSchema).findOne({email : email}).exec(function (err, user){
		    if (err) reject(err)
		    resolve(user);
		});
    });
});

module.exports = mongoose.model(_document_name, DocumentSchema);


