const AWS         = require('aws-sdk');
const nodemailer  = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');

const config_app = require('../config/app.js');

const ses = new AWS.SES({
    apiVersion      : '2010-12-01',
    accessKeyId     : config_app.app.aws_access_key_id,
    secretAccessKey : config_app.app.aws_secret_access_key,
    region          : config_app.app.aws_default_region 
});

const SgClient = nodemailer.createTransport(nodemailerSendgrid({apiKey: config_app.app.sendgrid_key}));
const SesClient = nodemailer.createTransport({SES: ses});
const Emailer = module.exports;

Emailer.send = async function(data){
    const {from, to, subject, html, email_client, smtp} = data;
    let client = null;
    switch (email_client) {
        case 'sendgrid':
            client = SgClient;
            break;
        case 'ses':
            client = SesClient;
            break;
        case 'custom':
            const {host, port, username, password} = smtp;
            let mailerConfig = {    
                host: host,  
                //secureConnection: true,
                tls: {
                    rejectUnauthorized: false
                },
                secure: true, 
                port: port,
                auth: {
                    user: username,
                    pass: password
                }
            };
            client = nodemailer.createTransport(mailerConfig);
            break;

    }

    client.verify(function(error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log("Server is ready to take our messages");
        }
    });

    const msg = {
        to: to, 
        from: from, 
        subject: subject,
        text: 'O2O',
        html: html,
    }
    return await client.sendMail(msg);
}