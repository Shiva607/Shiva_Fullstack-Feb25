import { Link, Router } from "@reach/router";
import React from "react";
import Home from "./Home";
import UserProfile from "./UserProfile";
import UserDetails from "./UserDetails";
import UserPosts from "./UserPosts";

export default function RouterApp() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |&nbsp;
        <Link to="/user/1">User 1 Profile</Link> |&nbsp;
        <Link to="/user/2">User 2 Profile</Link> |&nbsp;
        <Link to="/user/3">User 3 Profile</Link>
      </nav>

      <Router>
        <Home path="/" />
        <UserProfile path="/user/:id">
          <UserDetails path="details" />
          <UserPosts path="posts" />
        </UserProfile>
      </Router>
    </div>
  );
}
