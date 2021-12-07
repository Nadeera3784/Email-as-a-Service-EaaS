var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient

const db_uri = "mongodb://nadeeradocumentdb:na998743deer837483jlkrsd@o2o-caas-db.cluster-capzd9fgxyee.ap-southeast-1.docdb.amazonaws.com:27017/o2o-caas?tls=true&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false";
const TestController = {

    async index(request, response, next) {

 /*        if (!mongoose.connection.readyState) {
            await mongoose.connect(db_uri,{tlsCAFile: `rds-combined-ca-bundle.pem`}, function (err, client) {
                if (err) {
                    console.log(err);
                    response.status(400).json({
                        type: 'error',
                        message: 'Something went wrong, please try again later',
                        data: error
                    });
                }

                return response.status(200).json({
                    type: 'success',
                    message: 'connected',
                    data: client
                });
            });
        } */


        MongoClient.connect(db_uri,{tlsCAFile: `rds-combined-ca-bundle.pem`},function(err, client) {
            if(err){
                //client.close();
                return response.status(400).json({
                    type: 'error',
                    message: 'Something went wrong, please try again later',
                    data: err
                });
            }
            let db = client.db('activity');
            /*
            db.collection("activity-collection").drop(function(err, delOK) {
                if (err) throw err;
                if (delOK) console.log("Collection deleted");
                client.close();
             });
            */ 
            
            let activityCollection = db.collection('activity-collection');
            const date  = Date.now();
            const defaultDate  = new Date().toISOString().slice(0, 10);
            const newActivity = {
                  app_name:"o2o meet",
                  actor_id:"384734",
                  action:"action 03",
                  action_id:182,
                  county: "sri lanka",
                  ip:'127.2.2.',
                  created_at:date,
                  default_date:defaultDate
            };
            activityCollection.insertOne(newActivity).then(result => {
                    //client.close()
                return response.status(200).json({
                    type: 'success',
                    message: 'connected',
                    data: result
                });
            }).catch(err => {
                //client.close()

                return response.status(400).json({
                    type: 'error',
                    message: 'Something went wrong, please try again later',
                    data: err
                });
     
            });
        });
    },
}

module.exports = TestController;