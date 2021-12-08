var mongoose = require('mongoose');
const {Account_Model} = require('../models');

const db_uri = "mongodb://nadeeradocumentdb:na998743deer837483jlkrsd@o2o-caas-db-public.cluster-capzd9fgxyee.ap-southeast-1.docdb.amazonaws.com:27017/o2o-caas?tls=true&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false";

const TestController = {

    async index(request, response, next) {
        if (!mongoose.connection.readyState) {
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
        }

        const am = await Account_Model.create({email : 'john doe', type : 'type_01', email_service : 'ses'});
        
        response.status(200).json({
            type: 'success',
            message: 'connected',
            data : am
        });

    },
}

module.exports = TestController;