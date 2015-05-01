(function() {
    'use strict';

    // implement .push without using it
    module.exports = function myPush(array, value) {
        array[array.length] = value;
    };
})();