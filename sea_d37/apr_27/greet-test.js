//Try to use strict on all files
'use strict';

/*
    CHAI does not have to be required into a test. It is an ASSERTION library. You should attempt to write your tests in
    a manner where they look human readable.
*/

var expect = require('chai').expect;
var greet = require('./greet');

/*
    Mocha will look for test.js by default if one is not passed to the command when entered into the terminal to 
    execute the test.
*/

// describe() is a MOCHA global. It determines who can run the code and how to run it.
describe('greet.js', function() { 

    it('should greet someone', function() {
        expect(greet('zaphod')).to.eql('hello zaphod');
    });

});