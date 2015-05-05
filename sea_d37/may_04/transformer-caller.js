(function() {
    
    'use strict';

    var transform = require('./bitmap-transformer');
    var options = {
        'sourceFile': './palette-bitmap.bmp',
        'destinationFile': './grayscale-palette-bitmap.bmp',
        'sourceFileEncoding': 'utf8',
        'transformMode': 'grayscale'
    };

    // transform image.
    transform(options);

})();