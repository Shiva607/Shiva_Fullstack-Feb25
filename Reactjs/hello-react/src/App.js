import React from 'react';
import Product from './components/Product.jsx';

function App() {
	const productInfo = {
		productName: 'Apple',
		ProductPrice: 300,
	};
	return (
		<div>
			<Product productDetails={productInfo}></Product>
		</div>
	);
}

export default App;
