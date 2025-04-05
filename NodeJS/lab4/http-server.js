const http = require('http');

//! STEP_2: Server:

const server = http.createServer((req, res) => {
	if (req.url == '/home') {
		res.write('Welcome to the Home Page');
	} else if (req.url == '/about') {
		res.write('This is the About Page');
	} else {
		res.write('Hello, World!');
	}

	res.end();
});

server.listen('4000', () => {
	console.log('Port started in 4000');
});
