(function() {
    'use strict';

    // Include libraries and modules.
    var expect = require('chai').expect;
    var tformer = require('../transformer-caller');

    // describe() is a MOCHA global. It determines who can run the code and how to run it.
    describe('transformer-caller.js', function() { 

        var options = {
            'sourceFile': './palette-bitmap.bmp',
            'destinationFile': './grayscale-palette-bitmap.bmp',
            'sourceFileEncoding': 'utf8',
            'transformMode': 'grayscale'
        };

        it('should create grayscale image', function() {
            expect(tformer(options)).to.eql('Success!');
        });

    });

})();