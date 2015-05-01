(function() {

    'use strict';

    // Use a dictionary to check for arrays
    function hasDupes(array_data) {
        for(var i = 0; i < array_data.length; i++) {
            for(var j = i+1; j < array_data.length; j++) {
                if (array_data[i] == array_data[j]) { return true; }
            }
        }
        return false;
    }

    console.log(hasDupes([1, 2, 3, 3, 5]));

})();