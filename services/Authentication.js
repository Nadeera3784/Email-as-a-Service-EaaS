const jwt          = require("jsonwebtoken");
const crypto       = require('crypto');

const config_app   = require('../config/app');
const AppConstants = require('../constants/AppConstants');
const Account      = require('../services/Account');

const AuthenticationGuard = async (request, response, next) => {
    const authHeader = request.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null){ 
        response.status(401).json({
            type: AppConstants.RESPONSE_ERROR,
            message : "The security token missing from your request",
            data : ""
        });  
        return;
    }
    const jwt_secret = config_app.app.jwt_secret || process.env.JWT_SECRET;
    jwt.verify(token, jwt_secret, async function(err, user) {    
        if(err){
            response.status(401).json({
                type: AppConstants.RESPONSE_ERROR,
                message : "The security token has been expired",
                data : err
            });  
            return;
        }
        const found_user =  await Account.service.view({_id : user.id});
        if(found_user != undefined){
            if(found_user.status == 0){
                response.status(400).json({
                   type   : AppConstants.RESPONSE_ERROR,
                   message:  'The security token is invalid',
                   data   : ""
                });
                return; 
            }
        }else{
            response.status(401).json({
                type: AppConstants.RESPONSE_ERROR,
                message : "The security token has been expired",
                data : {}
            });  
            return;
        }
        request.user = user;
        next();
    });
};

const AuthenticationTokenGenerate = async (user, response, next) => {
    const payload = {
        id: user._id
    };
    const jwt_secret    = config_app.app.jwt_secret || process.env.JWT_SECRET;
    const refreshToken  = crypto.randomBytes(64).toString('hex');
    jwt.sign(
        payload,
        jwt_secret,
        {expiresIn: '30d' },
        (async function (err, token){
          if (err){
            response.status(400).json({
              type : AppConstants.RESPONSE_ERROR,
              message:  'Something went wrong, please try again later',
              data : err
            });
            return;
          }
          let Query_builder             = {};
          Query_builder.refresh_token   = refreshToken;
          await Account.service.update(user.id, Query_builder);
          return response.status(200).json({
            type : AppConstants.RESPONSE_SUCCESS,
            message:  'You have been logged in successfully',
            data:  {
              accessToken  : token,
              refreshToken : refreshToken
            }
          });

        })
    );
}

const AuthenticationParseUser = async (user) => {
   return await Account.service.view({_id: user.id});
}

module.exports = {
    AuthenticationGuard,
    AuthenticationTokenGenerate,
    AuthenticationParseUser
};
