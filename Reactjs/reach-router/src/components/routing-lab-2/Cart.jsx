import React from 'react';

export default function Cart({ cartItems }) {
	return (
		<div style={{ textAlign: 'left' }}>
			<h3>Your Cart Items </h3>
			{cartItems.length === 0 ? (
				<p>Your cart is empty.</p>
			) : (
				<ul>
					{cartItems.map((item, index) => (
						<li key={index}>
							{item.name} - ${item.price}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
