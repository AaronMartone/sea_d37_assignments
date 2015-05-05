(function() {
    'use strict';

    var fs = require('fs');

    // This initializes the reading of the file, but the callback is put into the loop only once the data is loaded.
    // As such, all of the code executing in this local file will run first (ie, the console.log() commands.) before
    // these even are placed into the event loop.
    fs.readFile('./data.txt', function(err, data) {
        console.log(data.toString('utf-8'));
    })

    fs.readFile('./data.json', function(err, data) {
        console.log(data.toString('utf-8'));
    });

    console.log('first');

    //
    process.nextTick(function() {
        console.log('second');
    });
})();