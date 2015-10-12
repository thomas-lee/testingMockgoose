'use strict';

var expect = require('chai').expect;
var request = require('supertest');
var mongoose = require('mongoose');
var mockgoose = require('mockgoose');

mockgoose(mongoose);
var app = require('../../app');

// describe the test
describe('User routes', function() {
    describe('#signup', function() {
        it('should create a user', function(done) {
            request(app)
                .post('/users/signup')
                .send({email: 'test@test.com', password: 'password'});
                .expect(200)
                .end(function(err.res) {
                    if(err) return done(err);
                    expect(err).to.equal(null);
                    expect(res.body.success).to.equal(true);
                    expect(res.body.user).to.be.an('object');
                    expect(res.body.user.email).to.equal('test@test.com');
                    // we will filter the user object and not return the password hask back
                    expect(res.body.user.password).to.equal(undefined);
                    done();
                });
        });
    });
});