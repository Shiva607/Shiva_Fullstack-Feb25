import React from 'react';

const productList = [
	{ id: 1, name: 'Laptop', price: 1200 },
	{ id: 2, name: 'Smartphone', price: 800 },
	{ id: 3, name: 'Headphones', price: 150 },
];

export default function Products({ addToCart }) {
	return (
		<div style={{ textAlign: 'left' }}>
			<h3>Products Page</h3>
			<ul>
				{productList.map((product) => (
					<li key={product.id}>
						<p>
							{product.name} - ${product.price} &nbsp;&nbsp;
							<button onClick={() => addToCart(product)}>Add to Cart</button>
						</p>
					</li>
				))}
			</ul>
		</div>
	);
}
