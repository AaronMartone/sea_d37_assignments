'use strict';

var greetCLI = require('./bonus-answer-cli');
var expect = require('chai').expect;

describe('greet cli', function() {
    describe('the easy way', function() {
        it('should greet with mocked args', function() {
            expect(greetCLI(['node', 'filename', 'Aaron Martone'])).to.eql('hello Aaron Martone');
        });
    });

    describe('the hard way', function() {
        var argvCache;

        before(function() {
            argvCache = process.argv;
            process.argv = ['node', 'file', 'Aaron Martone'];
        });

        after(function() {
            process.argv = argvCache;
        });

        it('should greet with modified process.argv', function() {
            expect(greetCLI(process.argv)).to.eql('hello Aaron Martone');
        });
    });
});