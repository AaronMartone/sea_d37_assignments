(function() {
    'use strict';

    module.exports = function hasDuplicates(data) {
        var cache = {};
        for (var i = 0; i < data.length; i++) {
            if (data[i] in cache) { 
                return true; 
            } else {
                cache[data[i]] = data[i];
            }
        }
        return false;
    };
})();   