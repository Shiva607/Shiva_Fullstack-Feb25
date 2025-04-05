const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('start', (topic) => {
	console.log(topic);
});

eventEmitter.on('end', (message) => {
	console.log(message);
});

//! The "once" function ensures the 'login' event runs only one time
eventEmitter.once('login', () => {
	console.log('Login successful');
});

eventEmitter.emit('start', 'Start learning events');
eventEmitter.emit('start', 'Start learning events');

eventEmitter.emit('end', 'Successfully understand the events');

eventEmitter.emit('login');
eventEmitter.emit('login');
