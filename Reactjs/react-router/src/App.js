import React from 'react';

// import RouterApp from './components/routing/RouterApp.jsx';
import RouterApp from './components/dynamic-routing/RouterApp.jsx';

function App() {
	return (
		<div style={{ textAlign: 'center' }}>
			<h1>Hello React</h1>
			<RouterApp />
			<h3 style={{ marginTop: 250 }}>Footer Page</h3>
		</div>
	);
}

export default App;
