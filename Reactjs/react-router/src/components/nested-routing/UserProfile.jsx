//! To understand <Outlet />, refer to the file ReactJs/Outlet.md.
// <Outlet /> is a crucial component in React Router v6 that serves as a placeholder for rendering nested route components. It's the modern replacement for how {children} was used in previous versions of React Router.

import { Link, useParams, Outlet } from 'react-router-dom';
import React from 'react';

export default function UserProfile() {
	const { id } = useParams();

	const userData = {
		1: { name: 'Rama', age: 28 },
		2: { name: 'Krishna', age: 34 },
	};

	const user = userData[id] || { name: 'Unknown', age: 'N/A' };
	const userExists = !!userData[id];
	const { name, age } = user;

	/* 
	//! Get the child attribute value
	//1.  userName="shiva" => Access that value in the parent (UserProfile), you cannot — because data passed to UserDetails isn't available in UserProfile. React Router doesn’t propagate props from child elements back to parent routes.

	//2. No Direct Prop Access: In React Router v6, we can't directly access child route props like in Reach Router. Instead, use the context API via Outlet. */

	return (
		<div>
			<h2>User Profile: {name}</h2>
			<p>Age: {age}</p>
			<hr />
			{userExists && (
				<div>
					<Link to="details">Details</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
					<Link to="posts">Posts</Link>
				</div>
			)}
			{/*
			// In React Router v6, the context prop on <Outlet /> is used to pass data down to nested routes, which they can access using the useOutletContext() hook. Refer the UserDetails & UserPost Component.
			*/}
			<Outlet context={{ name, age }} />
		</div>
	);
}
