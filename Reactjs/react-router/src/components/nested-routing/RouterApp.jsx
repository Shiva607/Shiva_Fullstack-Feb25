import { Link, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import UserProfile from './UserProfile';
import UserDetails from './UserDetails';
import UserPosts from './UserPosts';

export default function RouterApp() {
	return (
		<div>
			<nav>
				<Link to="/">Home</Link> |&nbsp;
				<Link to="/user/1">User 1 Profile</Link> |&nbsp;
				<Link to="/user/2">User 2 Profile</Link> |&nbsp;
				<Link to="/user/3">User 3 Profile</Link>
			</nav>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/user/:id" element={<UserProfile />}>
					{/* 
        //1.  userName="shiva" => Access that value in the parent (UserProfile), you cannot — because data passed to UserDetails isn't available in UserProfile. React Router doesn’t propagate props from child elements back to parent routes.

        //2. No Direct Prop Access: In React Router v6, we can't directly access child route props like in Reach Router. Instead, use the context API via Outlet.
        */}
					<Route path="details" element={<UserDetails userName="shiva" />} />
					<Route path="posts" element={<UserPosts />} />
				</Route>
			</Routes>
		</div>
	);
}
