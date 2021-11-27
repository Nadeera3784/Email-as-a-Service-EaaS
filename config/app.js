module.exports = {
    app: {
        environment :  process.env.APP_ENV,
        base_url    :  process.env.APP_URL,
        jwt_secret  :  process.env.JWT_SECRET,
        sendgrid_key :  process.env.SENDGRID_KEY,
        aws_access_key_id     :   process.env.AWS_ACCESS_KEY_ID,
        aws_secret_access_key :   process.env.AWS_SECRET_ACCESS_KEY,
        aws_default_region    :   process.env.AWS_DEFAULT_REGION,
        default_email_client  :   process.env.DEFAULT_EMAIL_CLIENT,
    }
};  

  