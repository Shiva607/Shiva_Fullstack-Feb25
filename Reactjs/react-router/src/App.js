import React from 'react';

// import RouterApp from './components/routing/RouterApp.jsx';
// import RouterApp from './components/dynamic-routing/RouterApp.jsx';
// import RouterApp from './components/nested-routing/RouterApp.jsx';
// import RouterApp from './components/routing-lab-1/RouterApp.jsx';
import RouterApp from './components/routing-lab-2/RouterApp.jsx';

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
