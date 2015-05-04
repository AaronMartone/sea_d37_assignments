/*
    For this assignment you will be building a Bitmap reader and transformer. It will read a Bitmap in from disk, run 
    one or more color transforms on the bitmap and then write it out to a new file. This project will require the use of
    node buffers in order to manipulate binary data. Your project should include tests, as well as a Gruntfile and 
    package.json file. Make sure to run all your code through jshint and jscs. The process will look something like 
    this:

    1. open file using fs and read it into a buffer.
    2. convert buffer into a Javascript Object.
    3. Run a transform on that Javascript Object.
    4. Turn the transformed object back into a buffer.
    5. Write that buffer to a new file.     

    The wikipedia article found here (Links to an external site.) describes the byte specification of a "windows bitmap 
    file." We'll be working the simplest version, meaning no compression. Your project should be able to take a 
    transform as a callback that will be run once the bitmap file has been read into a buffer. Your project should 
    include at least one transform. This is a difficult assignment so make sure to come to me with questions early. 
    Ideas for easy transformations:

    * invert the colors (essentially subtract every color value from the max color value which is 255),
    * Grayscale the colors, multiply each color value by a constant, just make sure your values don't go over 255.
    * (red|green|blue)scale the colors, same as above but only multiply one of the colors.
*/

(function() {

    // Thanks to Clint Nelson & Andrew Jacobson for assistance with this project.

    'use strict';

    // import modules.
    var fs = require('fs');

    function loadColorTable(data, bpp) {
        var results = [];

        // if the bits per pixel are 8, populate the color table by sequentially running through the specified number
        // of colors, offset by the value specified, in the data buffer.
        if (bpp === 8) {
            for (var i = 0; i < 256; i++) {
                results[i] = [
                    data.readUInt8(54 + (i * 4) + 0),
                    data.readUInt8(54 + (i * 4) + 1),
                    data.readUInt8(54 + (i * 4) + 2),
                    data.readUInt8(54 + (i * 4) + 3),
                ];
            }
        }

        return results;        
    }

    function writeColorTable(data, bpp, newTable) {
        if (bpp === 8) {
            for (var i = 0; i < 256; i++) {
                data.writeUInt8(newTable[i][0], 54 + (i * 4) + 0);
                data.writeUInt8(newTable[i][1], 54 + (i * 4) + 1);
                data.writeUInt8(newTable[i][2], 54 + (i * 4) + 2);
                data.writeUInt8(newTable[i][3], 54 + (i * 4) + 3);
            }
        }
    }

    // this object is used to perform the transformations on color tables or other color data.
    var transformTo = {
        grayscale: function(oldData) {
            return oldData.map(function(rgba) {
                var r = rgba[0];
                var g = rgba[1];
                var b = rgba[2];
                var a = rgba[3];
                var gray = parseInt((r + g + b) / 3);
                return [gray, gray, gray, a]; 
            });
        },
        inverted: function(oldData) {
            return oldData.map(function(rgba) {
                var r = rgba[0];
                var g = rgba[1];
                var b = rgba[2];
                var a = rgba[3];
                r = (r >= 128) ? (r - 128) : (r + 128);
                g = (g >= 128) ? (g - 128) : (g + 128);
                b = (b >= 128) ? (b - 128) : (b + 128);
                return [r, g, b, a];
            });
        },
        posterize: function(oldData) {
            return oldData.map(function(rgba) {
                var r = rgba[0];
                var g = rgba[1];
                var b = rgba[2];
                var a = rgba[3];
                var gray = parseInt((r + g + b) / 3);
                return (gray >= 128) ? [255, 255, 255, a] : [0, 0, 0, a];
            });
        }
    };

    var bitmapTransformer = function(options) {

        // set the default options.
        var srcFile = options.sourceFile || null;
        var dstFile = options.destinationFile || null;
        var srcFileEnc = options.sourceFileEncoding || 'utf8';
        var tformMode = options.transformMode || 'grayscale';
        var tformedColorTable;

        // ensure a source and destination were specified.
        if (!srcFile) { throw new Error('Please provide a source file to be transformed.'); }
        if (!dstFile) { throw new Error('Please provide a destination file for the transformation.'); }

        // ensure a valid encoding was specified.
        if (!Buffer.isEncoding(srcFileEnc)) { throw new Error('Please specify a valid encoding for the transofmration.'); }

        // ensure a valid transformation mode was specified.
        if (!(tformMode in transformTo)) { throw new Error('Please specify a supported transformation mode.'); }

        // read in source file as a raw buffer (no encoding specified).
        fs.readFile(srcFile, function(err, data) {

            var colorTable = [];

            // populate common header information.
            var headerType = data.slice(0, 2).toString().toUpperCase();
            var imgWidth = data.readUInt32LE(18);
            var imgHeight = data.readUInt32LE(22);            
            var imgBPP = data.readUInt16LE(28);
            var imgColors = (imgBPP === 8) ? data.readUInt32LE(46) : 0;
            var imgColorTableOffset = data.readUInt32LE(10);
            var hasPalette = (imgColorTableOffset === 54) ? false: true;

            // ensure that bitmap is a supported type.
            if (headerType !== 'BM') { throw new Error('Processing this type of bitmap is currently unsupported.'); }

            // populate the color table.
            colorTable = loadColorTable(data, imgBPP);

            // perform the transformation.
            tformedColorTable = transformTo[tformMode](colorTable);

            // update color table.
            writeColorTable(data, imgBPP, tformedColorTable);

            fs.writeFile(dstFile, data, function(err) {
                if (err) { throw new Error('An error occurred while writing the transformed data to its destination file.'); }
                else { console.log('Success!'); }
                return 'Success!';
            });















            // perform the transformation.

            // write the modified color table to a new buffer.

            // write the buffer to the destination file.

            // !!! dump info to console.


        });

    };

    // export bitmap transformer.
    module.exports = bitmapTransformer;

})();

/*
    module.exports = function bitmapTransformer(options) {
        


        // read in the file asynchronously. note: if no second options argument is provided to specify the encoding,
        // the data is returned as a raw buffer. this is a Buffer object, however, providing the encoding will return
        // a String object instead.
        fs.readFile(srcFile, function(err, data) {
            if (err) { throw err; }


            // console.log('headerType: ', headerType, 'dimensions: ', imgWidth + ' x ' + imgHeight, 'bpp: ', imgBPP, 'img data offset: ', imgColorTableOffset);

            // populate the color table starting from offset 66. this is because the header is 14 Bytes, the device-
            // independent bitmap header is 40 Bytes and the optional RGB alpha mask is 12 Bytes (66 Bytes total).
            // capture the color, but only pull the first 6 characters in uppercase. this is captured and parsed as
            // BGRA (with alpha truncated), though we store the data in familiar RGB format.
            for (var i = 0, color; i < 256; i++) {
                color = data.readUInt32LE(i + 66).toString(16).substring(0, 6).toUpperCase();
                colorTable[i] = [color.substring(4, 6), color.substring(2, 4), color.substring(0, 2)];
            }

            // determine the bytes used per row. this is the bits user per pixel times the amount of pixels used per
            // row (the width). a check should be made to ensure whether padding needs to be added to each row in order
            // to ensure that it is a multiple of 4 Bytes.
            var bytesPerRow = ((imgBPP / 8) * imgWidth);
            var thisOffset;

            // the 'yOff' indicates the image height, and the 'xOff' indicates the image width offsets. this step
            // populates the 'pixelArray' with the value found at the buffer's offset.
            // TODO: we are forcibly using the 'readUInt8()' method, however we could parse the header information to
            // determine if a higher bit depth is being used, and if so, parse the data with the appropriate Buffer
            // object method.
            for (var yOff = 0; yOff < imgHeight; yOff++) {
                for (var xOff = 0; xOff < imgWidth; xOff++) {                
                    thisOffset = imgColorTableOffset + ((yOff * bytesPerRow) + (xOff * (imgBPP / 8)));
                    pixelArray.push(data.readUInt8(thisOffset));
                }
            }

            // create the transformed color table by passing the current color table to the specified 'transformer' 
            // object's 'transMode' function.
            transformedColorTable = transformer[transMode](colorTable);

            // convert the transformed color table into a buffer.
            
        });

    };

})();
*/