const mongoose   = require('mongoose');

const config_app             = require('../config/app');

const databaseInitializer = async function (uri) {
    if(config_app.app.environment == "development"){
        mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
    }else{
        mongoose.connect(uri, {useNewUrlParser: true, ssl: true, sslValidate: false, sslCA: `rds-combined-ca-bundle.pem`}).then(function(client){
            console.log('Mongoose connected:',  client);
        }).catch(function(error){
            console.log('Mongoose connection URI error:',  error);
        });
    }
}


module.exports = {
    databaseInitializer
};