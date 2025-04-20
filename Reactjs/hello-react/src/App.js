import React, { useState } from 'react';
import Product from './components/Product.jsx';
import InputField from './components/InputField.jsx';
import FetchData from './components/FetchData.jsx';
import ConditionalFetchData from './components/ConditionalFetchData.jsx';
import MountVsUnmount from './components/MountVsUnmount';

function App() {
	const [show, setShow] = useState(true);
	const [status, setStatus] = useState('Mounted');

	const productInfo = {
		productName: 'Apple',
		ProductPrice: 300,
	};
	return (
		<div style={{ textAlign: 'center' }}>
			<Product productDetails={productInfo}></Product>
			<br />
			<hr />
			<InputField />
			<br />
			<hr />
			<FetchData />
			<br />
			<hr />
			<ConditionalFetchData />
			<br />
			<hr />

			<h1>Mount Vs Unmount</h1>
			<button onClick={() => setShow(!show)}>Toggle Child</button>
			<h3>Status: {status}</h3>
			{/* 
			//! If show is true, 
				// 1. the second part (<MountVsUnmount ... />) will be executed/rendered.
				// 2. The MountVsUnmount component is mounted (added to DOM).
			
			//! If show is false, 
				// 1. Nothing will be rendered — the component is removed from the DOM.
				// 2. The MountVsUnmount component is unmounted (removed from DOM). 	
			*/}
			{show && <MountVsUnmount setStatus={setStatus} />}
			<br />
			<hr />
		</div>
	);
}

export default App;
