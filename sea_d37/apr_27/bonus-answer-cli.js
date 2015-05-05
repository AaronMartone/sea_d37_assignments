'use strict';

var greet = require('./bonus-answer');

var greetCLI = module.exports = function(args) {
    return greet(args[2]);
};

console.log(greetCLI(process.argv));