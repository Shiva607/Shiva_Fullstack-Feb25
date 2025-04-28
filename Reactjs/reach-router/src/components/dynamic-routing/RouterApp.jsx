import { Link, Router } from "@reach/router";
import React from "react";
import Home from "./Home";
import UserProfile from "./UserProfile";

export default function RouterApp() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | &nbsp;
        <Link to="/user/1">User 1</Link> | &nbsp;
        <Link to="/user/2">User 2</Link> | &nbsp;
        <Link to="/user/3">User 3</Link>
      </nav>

      <Router>
        <Home path="/" />
        <UserProfile path="/user/:id" />
      </Router>
    </div>
  );
}
