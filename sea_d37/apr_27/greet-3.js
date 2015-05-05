'use strict';

// This pattern makes it so that the 'Greet' variable points to 'module.exports' and 'exports' so that 'Greet' can be
// used to reference what is being exported.
var Greet = module.exports = exports = function() {};

Greet.prototype.greet = function(name) {
    return 'hello ' +  name;
}