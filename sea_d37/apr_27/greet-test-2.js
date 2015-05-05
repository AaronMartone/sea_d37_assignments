'use strict';

var expect = require('chai').expect;
var greet = require('./greet-2');
var greet_func = require('./greet-2').greet;

describe('greet-2', function() {
    it('should greet someone', function() {
        // Notice due to the way we export greet (as greet.greet())
        expect(greet.greet('zaphod')).to.eql('hello zaphod');
    });

    it('should have a greet function', function() {
        expect(greet_func('zaphod')).to.eql('hello zaphod');
    });

    it('should sit here, pending');
});