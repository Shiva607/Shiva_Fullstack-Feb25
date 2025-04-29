import { Link, navigate, Router } from '@reach/router';
import React, { useState } from 'react';
import Home from './Home';
import Products from './Products';
import Cart from './Cart';

export default function RouterApp() {
	const [cart, setCart] = useState([]);

	const addToCart = (product) => {
		/* 
		let a = [1, 2, 3];
		let b = [...a, 4, 5, 6];
		console.log(b); Output => [ 1, 2, 3, 4, 5, 6 ]
		*/

		setCart([...cart, product]);
		alert(`${product.name} added to cart...`);
		navigate('/cart');
	};

	return (
		<div>
			<Link to="/">Home</Link> |&nbsp;
			<Link to="/products">Products</Link> |&nbsp;
			<Link to="/cart">Cart</Link>
			<Router>
				<Home path="/" />
				<Products path="/products" addToCart={addToCart} />
				<Cart path="/cart" cartItems={cart} />
			</Router>
		</div>
	);
}
