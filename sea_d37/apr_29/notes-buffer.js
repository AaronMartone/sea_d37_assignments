// buffers are, by default, UTF-8 encoded.
var buf = new Buffer('Hello World');
buf.toString('hex'); // => outputs string in hexadecimal encoding
buf.toString('base64'); // => outputs string in base64 encoding
buf[0]; // => ouputs the buffer's data at the first index (character code for 'H')

Array.prototype.join.call(buf); // => outputs an array of character codes (Buffer object needs to .call() the Array)

// to determine if the object is a buffer...
Buffer.isBuffer(buf);

// it is assumed that 1 character can be stored in 1 byte of space, however, there are some characters which require
// more than 1 byte to store their value. As such, the length of a string isn't always the size of the buffer needed
// to hold it. We can use a Buffer.byteLength function to determine the size needed.
Buffer.byteLength(buf);

var snowman = '☃';

Buffer.byteLength(snowman) + ' vs ' + snowman.length;

// create a new 16-byte buffer.
buf = new Buffer(16);

// write the snowman character to the buffer.
buf.write(snowman);

// even though the buffer is 3 bytes in size, the length is still 16
Buffer.byteLength(buf) + ' vs ' + buf.length;

var frosty = new Buffer(24);
var snowman = new Buffer('☃', 'utf-8');
frosty.write('Happy Birthday!', 'utf-8'); // => 16
snowman.copy(frosty, 16); // => 3
frosty.toString('utf-8', 0, 19); // => 'Happy Birthday! ☃'