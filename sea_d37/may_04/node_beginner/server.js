

/* 
    old code
    ====================================================================================================================

    function route(handle, pathname, res, postData) {
        console.log('About to route a request for ' + pathname);
        if (typeof handle[pathname] === 'function') {
            handle[pathname](res, postData);
        } else {
            console.log('No request handler found for ' + pathname);
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('404 Not Found');
            res.end();
        }
    }

    exports.route = route;

    ====================================================================================================================

    var http = require('http');
    var url = require('url');

    function start(route, handle) {
        function onRequest(req, res) {
            var postData = '';
            var pathname = url.parse(req.url).pathname;
            console.log('Request for ' + pathname + ' received.');

            req.setEncoding('utf8');

            req.addListener('data', function(postDataChunk) {
                postData += postDataChunk;
                console.log('Received POST data chunk "' + postDataChunk + '".');                
            });

            req.addListener('end', function() {
                route(handle, pathname, res, postData);
            });
        }

        http.createServer(onRequest).listen(3000);
        console.log('Server started.');
    }

    exports.start = start;

    ====================================================================================================================

    req.addListener('data', function(chunk) {
        // called when new chunk of data is received.
    });

    req.addListener('end', function() {
        // called when all chunks of data have been reeived.
    });

    ====================================================================================================================

    function start(res) {
        console.log('Request handler "start" was called.');

        var body = '<html>' +
            '<head>' +
            '<meta http-equiv="Content-Type" content="text/html"; ' +
            'charset="UTF-8">' + 
            '</head>' +
            '<body>' +
            '<form action="/upload" method="post">' +
            '<textarea name="text" rows="20" cols="60"></textarea>' + 
            '<input type="submit" value="Submit text" />' +
            '</form>' +
            '</body>' +
            '</html>';

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Hello upload');
        res.end();
    }

    exports.start = start;
    exports.upload = upload;

    ====================================================================================================================

    var exec = require('child-process').exec;

    function start(res) {
        console.log('Request handler "start" was called.');

        exec('find /', {
            'timeout': 10000,
            'maxBuffer': 20000 * 1024
        }, function(error, stdout, stderr) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write(stdout);
            res.end();
        });
    }

    function upload(res) {
        console.log('Request handler "upload" was called.');
        res.writeHead(200, { 'Content-Type':, 'text/plain' });
        res.write('Hello upload');
        res.end();
    }

    exports.start = start;
    exports.upload = upload;

    ====================================================================================================================

    var exec = require('child-process').exec;

    function start(res) {
        console.log('Request handler for "start" was called.');

        exec('ls -lah', function(error, stdout, stderr) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write(stdout);
            res.end();
        });

    }

    function upload(res) {
        console.log('Request handler for "upload" was called.');
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Hello upload');
        res.end();
    }

    exports.start = start;
    exports.upload = upload;

    ====================================================================================================================

    function route(handle, pathname, res) {
        console.log('About to route a request for ' + pathname);
        if (typeof handle[pathname] === 'function') {
            handle[pathname](res);
        } else {
            console.log('No request handler found for ' + pathname);
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('404 Not Found');
            res.end();
        }
    }

    exports.route = route;

    ====================================================================================================================

    var http = require('http');
    var url = require('url');

    function start(route, handle) {
        function onRequest(req, res) {
            var pathname = url.parse(req.url).pathname;
            console.log('Request for ' + pathname + ' was received.');

            route(handle, pathname, res);
        }

        http.createServer(onRequest).listen(3000);
        console.log('Server started.');
    }

    exports.start = start;

    ====================================================================================================================

    var exec = require('child-process').exec;

    function start() {
        console.log('Request handler "start" was called.');
        var content = 'empty';

        exec('ls -lah', function(error stdout, stderr) {
            content = stdout;
        });

        return content;
    }

    function upload() {
        console.log('Request handler "upload" was called.');
        return 'Hello upload';
    }

    exports.start = start;
    exports.upload = upload;

    ====================================================================================================================

    function start() {
        console.log('Request handler "start" was called.');

        function sleep(milliseconds) {
            var startTime = new Date().getTime();
            while (new Date().getTime() < startTime + millisends)) {}
        }

        sleep(10000);
        return 'Hello start';
    }

    function upload() {
        console.log('Request handler "upload" was called.');
        return 'Hello upload';
    }

    exports.start = start;
    exports.upload = upload;

    ====================================================================================================================

    var http = require('http');
    var url = require('url');

    function start(route, handle) {
        function onRequest(req, res) {
            var pathname = url.parse(req.url).pathname;
            console.log('Request for ' + pathname + ' received.');

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            var content = route(handle, pathname);
            res.write('Hello World');
            res.end();
        }

        http.createServer(onRequest).listen(3000);
        console.log('Server started.');
    }

    exports.start = start;

    ====================================================================================================================

    function route(handle, pathname) {
        console.log('About to route a requst for ' + pathname);
        if (typeof handle[pathname] === 'function') {
            return handle[pathname]();
        } else {
            console.log('No requst handler found for ' + pathname);
            return '404 Not Found';
        }
    }

    exports.route = route;

    ====================================================================================================================

    function route(handle, pathname) {
        console.log('About to route a request for ' + pathname);
        if (typeof handle[pathname] === 'function') {
            handle[pathname]();
        } else {
            console.log('No request handler found for ' + pathname);
        }
    }

    exports.route = route;

    ====================================================================================================================

    var server = require('./server');
    var router = require('./router');
    var requestHandlers = require('./requestHandlers');

    var handle = {};
    handle['/'] = requestHandlers.start;
    handle['/start'] = requestHandlers.start;
    handle['/upload'] = requestHandlers.upload;

    server.start(router.route, handle);

    ====================================================================================================================

    function start() {
        console.log('Request handler "start" was called');
    }

    function upload() {
        ccnsole.log('Request handler "upload" was called');
    }

    exports.start = start;
    exports.upload = upload;

    ====================================================================================================================

    var http = require('http');
    var url = require('url');

    function start(route) {
        function onRequest(req, res) {
            var pathname = url.parse(req.url).pathname;
            console.log('Request for ' + pathname + ' received');

            route(pathname);

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write('Hello World');
            res.end();
        }

        http.createServer(onRequest).listen(3000);
        console.log('Server has started.');
    }

    exports.start = start;

    ====================================================================================================================

    function route(pathname) {
        console.log('About to route a request for ' + pathname);
    }

    exports.route = route;

    ====================================================================================================================

    var http = require('http');
    var url = require('url');

    function start() {
        function onRequest(req, res) {
            var pathname = url.parse(req.url).pathname;
            console.log('Request for ' + pathname + ' received.');
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write('Hello World');
            res.end();
        }

        http.createServer(onRequest).listen(3000);
        console.log('Server started.');
    }

    exports.start = start;

    ====================================================================================================================

    var server = require('./server');

    server.start();

    ====================================================================================================================

    var http = require('http');

    function start() {
        function onRequest(req, res) {
            console.log('Request received.');
            res.write(200, { 'Content-Type': 'text/plain' });
            res.write('Hello World');
            res.end();
        }

        http.createServer(onRequest).listen(3000);
        console.log('Server started.');
    }

    exports.start = start;

    ====================================================================================================================

    var http = require('http');

    function onRequest(req, res) {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.write('Hello World');
        res.end();
    }

    http.createServer(onRequest).listen(3000);

    ====================================================================================================================

    var http = require('http');

    http.createServer(function(req, res) {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.write('Hello World');
        res.end();
    }).listen(3000);    

    ====================================================================================================================

    function execute(someFunction, value) {
        someFunction(value);
    }

    execute(function(word) { console.log(word); }, 'Hello');

    ====================================================================================================================

    function say(word) {
        console.log(word);
    }

    function execute(someFunction, value) {
        someFunction(value);
    }

    execute(say, 'Hello');

    ====================================================================================================================
    
    var http = require('http');

    http.createServer(function(req, res) {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.write('Hello World');
        res.end();
    }).listen(3000);

    ====================================================================================================================

*/