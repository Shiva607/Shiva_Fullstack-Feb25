//! Transform stream without pipeline
const fs = require('fs');
const { Transform, pipeline } = require('stream');
const uppercaseTransform = new Transform({
	transform(chunk, encoding, callback) {
		this.push(chunk.toString().toUpperCase());
		callback();
	},
});
const readableStream = fs.createReadStream('output.txt');
const writableStream = fs.createWriteStream('uppercaseOutput.txt');

readableStream.on('data', (chunk) => {
	uppercaseTransform.write(chunk);
});

uppercaseTransform.on('data', (chunk1) => {
	writableStream.write(chunk1);
});

//! Below lines are optional
readableStream.on('end', () => {
	writableStream.end();
	console.log('File transformed and written to uppercaseOutput.txt.');
});
