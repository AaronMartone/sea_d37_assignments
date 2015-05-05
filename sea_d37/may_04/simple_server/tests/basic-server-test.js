'use strict';

var chai = require('chai');
var chaiHTTP = require('chai-http');
var expect = chai.expect;

chai.use(chaiHTTP);

require('../server');

describe('our server', function() {
    it('should respond to an HTTP request', function(done) {
        chai.request('localhost:3000')
            .get('/hello')
            .end(function(err, res) {
                expect(err).to.eql(null);
                expect(res.body.msg).to.eql('hello world');
                done();
            });
    });

    it('should have a 404 page', function() {
        chai.request('localhost:3000')
            .get('/doesnotexist')
            .end(function(err, res) {
                expect(err).to.eql(null);
                expect(res.body.msg).to.eql('file not found');
                done();
            });
    })
});