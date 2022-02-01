const mongoose = require('mongoose');

const _document_name = "Template";

let DocumentSchema = mongoose.Schema({
    template : {
		type : String,
		required : true,
    },
    type : {
		type : String,
		required : true
    },

	subject : {
		type : Array,
    },

    content : {
		type : Array
    },

	recurring : {
		status : {
			type : Boolean,
			default  : false
		},
		period : {
			type : String
		}
	},

    variables : {
		subject : {
			type : Array,
			default  : []
		},
		content : {
			type : Array,
			default  : []
		}
    },
    
	created_at: {
		type: Date,
		default: Date.now,
	}
});

DocumentSchema.static('findTemplateByName', function(template) {
	return new Promise((resolve, reject) => {
		mongoose.model(_document_name, DocumentSchema).findOne({template : template}).exec(function (err, user){
		    if (err) reject(err)
		    resolve(user);
		});
    });
});

module.exports = mongoose.model(_document_name, DocumentSchema);


