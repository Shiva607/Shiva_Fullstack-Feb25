const fs = require('fs');
const zlib = require('zlib');
const { pipeline } = require('stream');

var readFile = fs.createReadStream('input.txt');
var gzip = zlib.createGzip();
var createFile = fs.createWriteStream('output.txt.gz');

//! Method One:
// readFile.pipe(gzip).pipe(createFile);

//! Method two:
pipeline(readFile, gzip, createFile, (err) => {
	if (err) {
		console.log(err.message);
	} else {
		console.log('Success');
	}
});

//! output.txt.gz VS output.gz
/*
1. fs.createWriteStream('output.txt.gz')

		* The output file is named output.txt.gz
		* This implies that the file being compressed was a .txt file, and now it is GZipped.
		* This naming convention helps someone understand that the original file was likely a plain text file (e.g., input.txt) and it was compressed.

2. fs.createWriteStream('output.gz')

		* The output file is named output.gz
		* It doesn’t indicate the original file type (e.g., .txt, .json, etc.)
		* Still a valid GZIP file, but the name is more generic.
*/
