//! Transform stream with pipeline
const fs = require('fs');
const { Transform, pipeline } = require('stream');
const uppercaseTransform = new Transform({
	transform(chunk, encoding, callback) {
		this.push(chunk.toString().toUpperCase());
		callback();
	},
});
const readableStream = fs.createReadStream('output1.txt');
const writableStream = fs.createWriteStream('uppercaseOutput1.txt');

pipeline(readableStream, uppercaseTransform, writableStream, (err) => {
	if (err) console.log('error: ' + err);
	else {
		console.log('file written successfully');
	}
});

//! Below lines are optional
readableStream.on('end', () => {
	writableStream.end();
	console.log('File transformed and written to uppercaseOutput.txt.');
});
