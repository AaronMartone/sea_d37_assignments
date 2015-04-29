(function() {
    'use strict';

    // Include libraries and modules.
    var expect = require('chai').expect;
    var greet = require('../greet');

    // describe() is a MOCHA global. It determines who can run the code and how to run it.
    describe('greet.js', function() { 

        it('should greet someone', function() {
            expect(greet('Aaron')).to.eql('hello Aaron, Ambassador to the Pizza Bagel.');
        });

    });

})();