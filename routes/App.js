const express     = require('express');
const router      = express.Router();
const {check}     = require('express-validator');

const { AppController , AccountController, TemplateController} = require('../controllers');
const Account       = require('../services/Account');
const Template      = require('../services/Template');
const {AuthenticationGuard}      = require('../services/Authentication');


router.get('/', AppController.index);

router.post('/accounts', 
[  
    check('email')
    .not().isEmpty()
    .withMessage("Email is required"),
    check('email').isEmail()
    .withMessage("Email address is invalid"),
    check('email').custom(function (value) {
        return Account.service.findAccountByEmail(value).then(function (email) {
          if (email) {
            return Promise.reject(value + 'already exists, please choose another');
          }
        });
    }),
    check('type')
    .not().isEmpty()
    .withMessage("Type is required"),
],
AccountController.create);

router.get('/accounts', AccountController.list);

router.put('/accounts/:id', 
[  
    check('email')
    .not().isEmpty()
    .withMessage("Email is required"),
    check('email').isEmail()
    .withMessage("Email address is invalid"),
    check('email').custom(function (value) {
        return Account.service.findAccountByEmail(value).then(function (email) {
          if (email) {
            return Promise.reject(value + ' already exists, please choose another');
          }
        });
    }),
],
AccountController.update);

router.delete('/accounts/:id', AccountController.delete);

router.post('/email-templates', 
[  
    check('template')
    .not().isEmpty()
    .withMessage("template is required"),
    check('template').custom(function (value) {
        return Template.service.findTemplateByName(value).then(function (template) {
          if (template) {
            return Promise.reject(value + ' already exists, please choose another');
          }
        });
    }),
    check('type')
    .not().isEmpty()
    .withMessage("type is required"),
    check('subject')
    .not().isEmpty()
    .withMessage("subject is required"),
    check('content')
    .not().isEmpty()
    .withMessage("content is required"),
    check('variables')
    .not().isEmpty()
    .withMessage("variables is required"),
],
TemplateController.create);

router.get('/email-templates', TemplateController.list);

router.put('/email-templates/:id', 
[  
    check('template')
    .not().isEmpty()
    .withMessage("template is required"),
    check('type')
    .not().isEmpty()
    .withMessage("type is required"),
    check('subject')
    .not().isEmpty()
    .withMessage("subject is required"),
    check('content')
    .not().isEmpty()
    .withMessage("content is required"),
    check('variables')
    .not().isEmpty()
    .withMessage("variables are required"),
],
TemplateController.update);

router.delete('/email-templates/:id', TemplateController.delete);

router.post('/send-emails', AuthenticationGuard,
[  
    check('template')
    .not().isEmpty()
    .withMessage("template is required"),
    check('template').custom(function (value) {
        return Template.service.findTemplateByName(value).then(function (template) {
          if (!template) {
            return Promise.reject(value + ' does not exists, please choose another');
          }
        });
    }),
    check('to')
    .not().isEmpty()
    .withMessage("to is required"),
    check('from')
    .not().isEmpty()
    .withMessage("from is required"),
    check('data')
    .not().isEmpty()
    .withMessage("data is required"),
],
AppController.sendEmails);

router.get('/me/templates', AuthenticationGuard, AppController.accountTemplates);

router.put('/me/templates/:id', AuthenticationGuard, 
[  
  check('template')
  .not().isEmpty()
  .withMessage("template is required"),
  check('type')
  .not().isEmpty()
  .withMessage("type is required"),
  check('subject')
  .not().isEmpty()
  .withMessage("subject is required"),
  check('content')
  .not().isEmpty()
  .withMessage("content is required"),
  check('variables')
  .not().isEmpty()
  .withMessage("variables are required"),
],
AppController.updateAccountTemplates);


router.get('/me/deliverability-insights', AuthenticationGuard, AppController.deliverabilityInsights);

router.post('/refresh-token',
[  
  check('token')
  .not().isEmpty()
  .withMessage("token is required")
], AppController.refreshToken);

router.post('/login', AppController.token);


module.exports = router;