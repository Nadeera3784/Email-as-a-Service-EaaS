const chai     = require('chai');
const chaiHttp = require('chai-http');
const server   = require('../app');
const Account  = require('../services/Account');
const should   = chai.should();

chai.use(chaiHttp);

describe('Account', () => {
    beforeEach((done) => {
        Account.service.deleteAll().then(function (document) {
            done();
        });
    });

    /*
    * Test the /GET route
    */
    describe('/GET accounts', () => {
        it('it should GET all the accounts', (done) => {
            chai.request(server)
                .get('/api/v1/accounts')
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
    describe('/POST accounts', () => {
        it('it should not POST a account without email field', (done) => {
            let account = {
                "type": "o2o-event",
            };
            chai.request(server)
                .post('/api/v1/accounts')
                .send(account)
                .end((err, res) => {
                    res.should.have.status(422);
                    res.body.should.be.a('object');
                    res.body.data[0].should.have.property('param');
                    res.body.data[0].should.have.property('location');
                    res.body.data[0].should.have.property('msg').eql('Email is required');
                    done();
                });
        });

        it('it should POST a account ', (done) => {
            let account = {
                "email": "johndoe@gmail.com",
                "type": "o2o-event"
            };
            chai.request(server)
                .post('/api/v1/accounts')
                .send(account)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('You have been logged in successfully');
                    res.body.data.should.have.property('accessToken');
                    res.body.data.should.have.property('refreshToken');
                    done();
                });
        });

        it('it should not POST a account with existing  email', (done) => {
            let account = {
                "email": "johndoe@gmail.com",
                "type": "o2o-event"
            };
            Account.service.create(account).then(function (document) {
                chai.request(server)
                    .post('/api/v1/accounts')
                    .send(document)
                    .end((err, res) => {
                        res.should.have.status(422);
                        res.body.should.be.a('object');
                        res.body.data[0].should.have.property('param');
                        res.body.data[0].should.have.property('location');
                        res.body.data[0].should.have.property('msg').eql('johndoe@gmail.comalready exists, please choose another');
                        res.body.should.have.property('message').eql('Something went wrong, please try again later');
                        done();
                    });
            }).catch(function(error){
                done(error);
            });
        });
    });  
    
    
    /*
    * Test the /GET/:email route
    */
    describe('/GET/:email email', () => {
        it('it should GET a account by the given email', (done) => {
            let account = {
                "email": "johndoe@gmail.com",
                "type": "o2o-event"
            };
            Account.service.create(account).then(function (document) {
                chai.request(server)
                    .get('/api/v1/accounts?email=' + document.email)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.data[0].should.have.property('email');
                        res.body.data[0].should.have.property('type');
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
    describe('/DELETE/:id accounts', () => {
        it('it should DELETE a account by the given account id', (done) => {
            let account = {
                "email": "johndoe@gmail.com",
                "type": "o2o-event"
            };
            Account.service.create(account).then(function (document) {
                chai.request(server)
                    .delete('/api/v1/accounts/' + document._id)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('message').eql('Account has been deleted successfully');
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
    describe('/PUT/:id accounts', () => {
        it('it should UPDATE a account given the id', (done) => {
            let account = {
                "email": "johndoe@gmail.com",
                "type": "o2o-event"
            };

            let account2 = {
                "email": "johndoexx@gmail.com",
                "type": "o2o-event"
            };

            Account.service.create(account).then(function (document) {
                chai.request(server)
                    .put('/api/v1/accounts/' + document._id)
                    .send(account2)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('message').eql('Account has been updated successfully');
                        res.body.should.have.property('type').eql('success');
                        res.body.data.should.have.property('email').eql('johndoexx@gmail.com');
                        done();
                    });
            }).catch(function(error){
               done(error);
            });
        });
    });
});