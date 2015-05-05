'use strict';

// Use this pattern
var unicorn = module.exports = exports = {};
var unicorn = module.exports = exports = function() {

};
var unicorn = module.exports = exports = {
    horn: function magical() { /* ... */ }
};

unicorn.otherHorn = 10; // points to the exported object, creates a property called 'otherHorn' and sets value.

