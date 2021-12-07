const mongoose   = require('mongoose');
const fs = require('fs');

const config_app = require('../config/app.js');

const databaseInitializer = async function (uri) {
    
    if (!mongoose.connection.readyState) {
        await mongoose.connect(uri, {
            //tlsCAFile: `rds-combined-ca-bundle.pem`,
            sslCA: [fs.readFileSync("rds-combined-ca-bundle.pem")]
        });
     }

/*     if(config_app.app.environment == "development"){
        mongoose.connection.on('connected', function () {  
            console.log(`Database connection open to ${mongoose.connection.host} ${mongoose.connection.name}`);
        }); 
        
        mongoose.connection.on('error',function (err) {  
        console.log('Mongoose default connection error: ' + err);
        }); 
        
        mongoose.connection.on('disconnected', function () {  
        console.log('Mongoose default connection disconnected'); 
        });
    } */
}

module.exports = {
    databaseInitializer,
};