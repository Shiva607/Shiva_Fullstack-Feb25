const http = require('http');

//! STEP_1: Client:
const options = {
	hostname: 'jsonplaceholder.typicode.com',
	path: '/posts',
	method: 'GET',
};

const client = http.request(options, (res) => {
	let data = '';
	res.on('data', (chunk) => {
		// console.log(chunk.toString());
		console.log(chunk);
		data += chunk;
	});

	res.on('end', () => {
		try {
			console.log(data);
		} catch (error) {
			console.log('Error : ' + error);
		}
	});

	client.on('error', (error) => {
		console.log('Error in client: ' + error.message);
	});
});

client.end();
