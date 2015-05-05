'use strict';

var expect = require('chai').expect;
var Greet = require('./greet-3');

describe('Greet', function() {

    // A before() is what you need to run before you can setup (starting the server, making sure it has the right data)
    var greet;

    before(function() {
        greet = new Greet();
    });

    it('should be able to greet someone', function() {
        expect(greet.greet('zaphod')).to.eql('hello zaphod');
    });
});