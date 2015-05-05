'use strict';

var net = require('net');

var server = net.createServer(function(connection) {
    connection.on('data', function(data) {
        console.log(data.toString('utf8'));
    });

    connection.on('end', function() {
        console.log('bye!');
    });
});

server.listen(3000, function() {
    console.log('Server started.');
})