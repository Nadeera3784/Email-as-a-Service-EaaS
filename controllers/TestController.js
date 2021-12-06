var mongoose  = require('mongoose');

const TestController = {

    async index(request, response, next){
        mongoose.connect(uri, {useNewUrlParser: true, ssl: true, sslValidate: false, sslCA: `rds-combined-ca-bundle.pem`}).then(function(res){
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