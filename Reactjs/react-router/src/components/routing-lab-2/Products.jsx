import React from 'react';
import { productList } from './data';
import { Link } from 'react-router-dom';

export default function Products({ addToCart }) {
	return (
		<div style={{ textAlign: 'left' }}>
			<h3>Products Page</h3>
			<ul>
				{productList.map((product) => (
					<li key={product.id}>
						<p>
							{product.name} - ${product.price} &nbsp;&nbsp;
							<Link to={`/products/${product.id}`}> Details </Link> &nbsp;&nbsp;
							<button onClick={() => addToCart(product)}>Add to Cart</button>
						</p>
					</li>
				))}
			</ul>
		</div>
	);
}
