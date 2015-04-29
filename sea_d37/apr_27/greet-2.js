'use strict';

/*
    When you add properties onto the 'exports' object (which is an alias for module.exports), this returns an object
    that has those properties attached to it, whose values are that which are assigned.
*/

exports.greet = function(name) {
    return 'hello ' + name;
}