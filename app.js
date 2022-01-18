const http       = require("http");
const express    = require("express");
const bodyParser = require("body-parser");
const logger     = require('morgan');
const helmet     = require('helmet');
const cors       = require('cors');
const statusMonitor = require('express-status-monitor')({title: 'App Status'});
const rateLimit     = require("express-rate-limit");
require('dotenv').config();

const config_database        = require('./config/database.js');
const config_app             = require('./config/app.js');
const seeds                  = require('./seeds');
const  {databaseInitializer} = require('./services/Database.js');

const {app_route}    = require('./routes');


var App = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});


App.use(helmet());

if(config_app.app.environment == "development"){
  App.use(logger('dev'));
}

App.use(bodyParser.json());

App.use(bodyParser.urlencoded({
	extended: true
}));

App.use(cors());

databaseInitializer(config_database.database.hostname);

App.use((request, response, next) => {
    response.setHeader('Cache-Control', 'no-cache, no-store');
    next();
});

App.use(limiter);

App.get('/health', function (request, response) {
  return response.send(200);
});

App.get('/', (request, response, next) => {
  return response.status(200).json({
         type : 'success',
         message:  {
            name    : "O2O Caas API",
             version : 'V.1.0.0'
         }
  });
});

App.use('/api/v1/', app_route);

App.use(statusMonitor);

App.disable('x-powered-by');

App.set('port', process.env.APP_PORT || 8080);

http.createServer(App).listen(App.get('port'), function () {
	console.log("Server listening on port " + App.get('port'));
});

module.exports = App;


