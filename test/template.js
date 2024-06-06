const chai     = require('chai');
const chaiHttp = require('chai-http');
const server   = require('../app');
const Template = require('../services/Template');
const should   = chai.should();

chai.use(chaiHttp);

describe('Templates', () => {
    beforeEach((done) => {
        Template.service.deleteAll().then(function (document) {
            done();
        }).catch(function(error){
            done(error);
        });
    });

    /*
    * Test the /GET route
    */
    describe('/GET template', () => {
        it('it should GET all the email templates', (done) => {
            chai.request(server)
                .get('/api/v1/email-templates')
                .end((error, res) => {
                    res.should.have.status(200);
                    res.body.data.should.be.a('array');
                    res.body.data.length.should.be.eql(0);
                    done();
                });
        });
    });

    /*
    * Test the /POST route
    */
    describe('/POST template', () => {
        it('it should not POST a template without template field', (done) => {
            let template = {
                "type": "my-event",
                "subject": {
                    "en": "Invitation for food festival.",
                    "fr": "Invitation au festival gastronomique."
                },
                "content": {
                    "en": "<!DOCTYPE html><html> <head> <title>Reset Password By Admin</title> </head> <body> firstname :{{firstname}}  event_name : {{event_name}}  event_description:  {{event_description}} action_link : {{action_link}} </body></html>",
                    "fr": "<!DOCTYPE html><html> <head> <title>Reset Password By Admin</title> </head> <body> firstname :{{firstname}}  event_name : {{event_name}}  event_description:  {{event_description}} action_link : {{action_link}} </body></html>"
                },
                "variables": [
                    "firstname",
                    "event_name",
                    "event_description",
                    "action_link"
                ]
            };
            chai.request(server)
                .post('/api/v1/email-templates')
                .send(template)
                .end((err, res) => {
                    res.should.have.status(422);
                    res.body.should.be.a('object');
                    res.body.data[0].should.have.property('param');
                    res.body.data[0].should.have.property('location');
                    res.body.data[0].should.have.property('msg').eql('template is required');
                    done();
                });
        });

        it('it should POST a template ', (done) => {
            let template = {
                "template": "event-invitation",
                "type": "my-event",
                "subject": {
                    "en": "Invitation for food festival.",
                    "fr": "Invitation au festival gastronomique."
                },
                "content": {
                    "en": "<!DOCTYPE html><html> <head> <title>Reset Password By Admin</title> </head> <body> firstname :{{firstname}}  event_name : {{event_name}}  event_description:  {{event_description}} action_link : {{action_link}} </body></html>",
                    "fr": "<!DOCTYPE html><html> <head> <title>Reset Password By Admin</title> </head> <body> firstname :{{firstname}}  event_name : {{event_name}}  event_description:  {{event_description}} action_link : {{action_link}} </body></html>"
                },
                "variables": [
                    "firstname",
                    "event_name",
                    "event_description",
                    "action_link"
                ]
            };
            chai.request(server)
                .post('/api/v1/email-templates')
                .send(template)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Template has been added successfully');
                    res.body.data.should.have.property('template');
                    res.body.data.should.have.property('type');
                    res.body.data.should.have.property('subject');
                    res.body.data.should.have.property('content');
                    res.body.data.should.have.property('variables');
                    done();
                });
        });


    });

    /*
    * Test the /GET/:template route
    */
    describe('/GET/:template template name', () => {
        it('it should GET a template by the given template name', (done) => {
            let template = {
                "template": "event-invitation",
                "type": "my-event",
                "subject": {
                    "en": "Invitation for food festival.",
                    "fr": "Invitation au festival gastronomique."
                },
                "content": {
                    "en": "<!DOCTYPE html><html> <head> <title>Reset Password By Admin</title> </head> <body> firstname :{{firstname}}  event_name : {{event_name}}  event_description:  {{event_description}} action_link : {{action_link}} </body></html>",
                    "fr": "<!DOCTYPE html><html> <head> <title>Reset Password By Admin</title> </head> <body> firstname :{{firstname}}  event_name : {{event_name}}  event_description:  {{event_description}} action_link : {{action_link}} </body></html>"
                },
                "variables": [
                    "firstname",
                    "event_name",
                    "event_description",
                    "action_link"
                ]
            };
            Template.service.create(template).then(function (document) {
                chai.request(server)
                    .get('/api/v1/email-templates?name=' + document.template)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.data[0].should.have.property('template');
                        res.body.data[0].should.have.property('type');
                        res.body.data[0].should.have.property('subject');
                        res.body.data[0].should.have.property('content');
                        res.body.data[0].should.have.property('variables');
                        res.body.data[0].should.have.property('_id').eql(document.id);
                        done();
                    });
            }).catch(function(error){
                done(error);
            });

        });
    });


    /*
    * Test the /DELETE/:id route
    */
    describe('/DELETE/:id template', () => {
        it('it should DELETE a template by the given template id', (done) => {
            let template = {
                "template": "event-invitation 2",
                "type": "my-event",
                "subject": {
                    "en": "Invitation for food festival.",
                    "fr": "Invitation au festival gastronomique."
                },
                "content": {
                    "en": "<!DOCTYPE html><html> <head> <title>Reset Password By Admin</title> </head> <body> firstname :{{firstname}}  event_name : {{event_name}}  event_description:  {{event_description}} action_link : {{action_link}} </body></html>",
                    "fr": "<!DOCTYPE html><html> <head> <title>Reset Password By Admin</title> </head> <body> firstname :{{firstname}}  event_name : {{event_name}}  event_description:  {{event_description}} action_link : {{action_link}} </body></html>"
                },
                "variables": [
                    "firstname",
                    "event_name",
                    "event_description",
                    "action_link"
                ]
            };
            Template.service.create(template).then(function (document) {
                chai.request(server)
                    .delete('/api/v1/email-templates/' + document._id)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('message').eql('Template has been deleted successfully');
                        res.body.should.have.property('type').eql('success');
                        done();
                    });
            }).catch(function(error){
                done(error);
            });

        });
    });

    /*
    * Test the /PUT/:id route
   */
    describe('/PUT/:id template', () => {
        it('it should UPDATE a template given the id', (done) => {
            let template = {
                "template": "event-invitation 2",
                "type": "my-event",
                "subject": {
                    "en": "Invitation for food festival.",
                    "fr": "Invitation au festival gastronomique."
                },
                "content": {
                    "en": "<!DOCTYPE html><html> <head> <title>Reset Password By Admin</title> </head> <body> firstname :{{firstname}}  event_name : {{event_name}}  event_description:  {{event_description}} action_link : {{action_link}} </body></html>",
                    "fr": "<!DOCTYPE html><html> <head> <title>Reset Password By Admin</title> </head> <body> firstname :{{firstname}}  event_name : {{event_name}}  event_description:  {{event_description}} action_link : {{action_link}} </body></html>"
                },
                "variables": [
                    "firstname",
                    "event_name",
                    "event_description",
                    "action_link"
                ]
            };

            let template2 = {
                "template": "event-invitation",
                "type": "my-event-x",
                "subject": {
                    "en": "Invitation for food festival.",
                    "fr": "Invitation au festival gastronomique."
                },
                "content": {
                    "en": "<!DOCTYPE html><html> <head> <title>Reset Password By Admin</title> </head> <body> firstname :{{firstname}}  event_name : {{event_name}}  event_description:  {{event_description}} action_link : {{action_link}} </body></html>",
                    "fr": "<!DOCTYPE html><html> <head> <title>Reset Password By Admin</title> </head> <body> firstname :{{firstname}}  event_name : {{event_name}}  event_description:  {{event_description}} action_link : {{action_link}} </body></html>"
                },
                "variables": [
                    "firstname",
                    "event_name",
                    "event_description",
                    "action_link"
                ]
            };

            Template.service.create(template).then(function (document) {
                chai.request(server)
                    .put('/api/v1/email-templates/' + document._id)
                    .send(template2)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('message').eql('Template has been updated successfully');
                        res.body.should.have.property('type').eql('success');
                        res.body.data.should.have.property('type').eql('o2o-event-x');
                        done();
                    });
            }).catch(function(error){
                done(error);
            });
        });
    });
});
