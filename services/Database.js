const mongoose   = require('mongoose');

const config_app = require('../config/app.js');

const databaseInitializer = async function (uri) {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });

    if(config_app.app.environment == "development"){
        mongoose.connection.on('connected', function () {  
            console.log(`Database connection open to ${mongoose.connection.host} ${mongoose.connection.name}`);
        }); 
        
        mongoose.connection.on('error',function (err) {  
        console.log('Mongoose default connection error: ' + err);
        }); 
        
        mongoose.connection.on('disconnected', function () {  
        console.log('Mongoose default connection disconnected'); 
        });
    }
}


const mongodbInitializer = async (request, response, next) => {
    
    const db_uri = "mongodb://nadeeradocumentdb:na998743deer837483jlkrsd@o2o-caas-db.cluster-capzd9fgxyee.ap-southeast-1.docdb.amazonaws.com:27017/o2o-caas?tls=true&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false";

    //if (!mongoose.connection.readyState) {
        await mongoose.connect(db_uri,{tlsCAFile: `rds-combined-ca-bundle.pem`}, function (err, client) {
            if (err) {
                console.log('debug error', err);
                response.status(400).json({
                    type: 'error',
                    message: 'Something went wrong, please try again later',
                    data: err
                });
            }
        });
    //}

    next();
};

module.exports = {
    databaseInitializer,
    mongodbInitializer
};