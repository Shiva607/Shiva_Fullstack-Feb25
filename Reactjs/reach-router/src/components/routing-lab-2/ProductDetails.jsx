import React from 'react';
import { productList } from './data';

export default function ProductDetails({ productId }) {
	const product = productList.find((p) => p.id === Number(productId));

	if (!product) {
		return <p>Product not found!</p>;
	}
	return (
		<div style={{ textAlign: 'left' }}>
			<h3>Product Details </h3>

			<ul>
				<li>
					<b>Product Name:</b> {product.name}
				</li>
				<li>
					<b>Product Cost:</b> ${product.price}
				</li>
				<li>
					<b>Date:</b> {product.DOM}
				</li>
			</ul>
		</div>
	);
}
