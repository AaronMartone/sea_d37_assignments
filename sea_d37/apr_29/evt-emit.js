(function() {

    'use strict';

    // include 'inherits' function, filesystem module and 'EventEmitter' constructor.
    var inherits = require('util').inherits;
    var EventEmitter = require('events').EventEmitter;
    var fs = require('fs');

    var Hello = function() {

    };

    // make 'Hello' "inherit" from the EventEmitter constructor.
    inherits(Hello, EventEmitter);

    // create an instance, which now has access to EventEmitter methods and properties.
    var hello = new Hello();

    // create an event listener for the 'rainbows' event.
    hello.on('rainbows', function(filename) {
        fs.readFile(filename, function(err, data) {
            console.log(data.toString('utf-8'));
        });
    });

    // read the unicorns.txt file and emit 'unicorns' when completee.
    fs.readFile('./unicorns.txt', function(err, data) {
        console.log(data.toString('utf-8'));
        hello.emit('unicorns', './hello.txt');
    });

    hello.emit('rainbows', './rainbows.txt');

    // uv_loop is processed in the following way:
    // > readFile() on L28 added
    // > L33 causes listener on L21 to execute, adding readFile() on L22
    // > 

})();