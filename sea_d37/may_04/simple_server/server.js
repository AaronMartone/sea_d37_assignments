'use strict';

var http = require('http');

var server = http.createServer(function(req, res) {
    if (req.url === '/hello') {
            res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.write(JSON.stringify({msg: 'hello world'}));
        return res.end();
    }

    res.writeHead(404, {
        'Content-Type': 'application/json'
    });

    res.write(JSON.stringify({msg: 'file not found'}));
    res.end();
});

server.listen(3000, function() {
    console.log('Server started...');
});