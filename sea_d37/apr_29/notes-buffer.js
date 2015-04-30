// Buffers are, by default, UTF-8 encoded.
var buf = new Buffer('Hello World');
bug.toString('hex'); // => Outputs string in hexadecimal encoding
buf.toString('base64'); // => Outputs string in base64 encoding
buf[0]; // => Ouputs the buffer's data at the first index (character code for 'H')

Array.prototype.join.call(buf); // => Outputs an array of character codes (Buffer object needs to .call() the Array)

