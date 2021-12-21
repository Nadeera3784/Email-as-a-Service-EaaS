const mongoose   = require('mongoose');

const databaseInitializer = async function (uri) {

    mongoose.connect(uri, {useNewUrlParser: true, ssl: true, sslValidate: false, sslCA: `rds-combined-ca-bundle.pem`}).then(function(client){
        console.log('Mongoose connected:',  client);
    }).catch(function(error){
        console.log('Mongoose connection URI error:',  error);
    });

    // mongoose.connect(uri, {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //     useFindAndModify: false
    // });
}


module.exports = {
    databaseInitializer
};