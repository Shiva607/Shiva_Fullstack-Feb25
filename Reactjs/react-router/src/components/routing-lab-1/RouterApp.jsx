import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './Home';
import Products from './Products';
import Cart from './Cart';

export default function RouterApp() {
	const navigate = useNavigate();
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
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products addToCart={addToCart} />} />
				<Route path="/cart" element={<Cart cartItems={cart} />} />
			</Routes>
		</div>
	);
}
