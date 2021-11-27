const chai     = require('chai');
const chaiHttp = require('chai-http');
const server   = require('../app');
const Account  = require('../services/Account');
const should   = chai.should();


describe('Account template', () => {
    beforeEach((done) => {
        Account.service.deleteAll().then(function (document) {
            done();
        });
    });

    /*
    * Test the /GET route
    */
    describe('/GET accounts', () => {
        it('it should throw authentication error', (done) => {
            chai.request(server)
                .get('/api/v1/me/templates')
                .end((error, res) => {
                    res.should.have.status(401);
                    res.body.should.be.a('object');
                    res.body.should.have.property('type').eql('error');
                    done();
                });
        });
    });
});