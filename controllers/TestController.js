var mongoose  = require('mongoose');

const TestController = {

    async index(request, response, next){
        mongoose.connect("mongodb://nadeeradocumentdb:na998743deer837483Jlkrsd@o2o-caas-db.cluster-capzd9fgxyee.ap-southeast-1.docdb.amazonaws.com:27017/o2o-caas?tls=true&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false",
         {useNewUrlParser: true, ssl: true, sslValidate: false, sslCA: `rds-combined-ca-bundle.pem`}).then(function(res){
            response.status(200).json({
                type : 'success',
                message:  'Account has been updated successfully',
                data:  res
              });
              return;
        }).catch(function(error){
            response.status(400).json({
                type : 'error',
                message:  'Something went wrong, please try again later',
                data: error
            });
            return;
        });
    },
}

module.exports = TestController;