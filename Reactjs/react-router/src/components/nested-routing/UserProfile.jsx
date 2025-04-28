//! To understand <Outlet />, refer to the file ReactJs/Outlet.md.
// <Outlet /> is a crucial component in React Router v6 that serves as a placeholder for rendering nested route components. It's the modern replacement for how {children} was used in previous versions of React Router.

import { Link, useParams, Outlet } from "react-router-dom";
import React from "react";

export default function UserProfile() {
  const { id } = useParams();
  const userData = {
    1: { name: "Rama", age: 28 },
    2: { name: "Krishna", age: 34 },
  };

  const user = userData[id] || { name: "Unknown", age: "N/A" };
  const userExists = !!userData[id];

  return (
    <div>
      <h2>User Profile: {user.name}</h2>
      <p>Age: {user.age}</p>
      <hr />
      {userExists && (
        <div>
          <Link to="details">Details</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link to="posts">Posts</Link>
        </div>
      )}
      <Outlet />
    </div>
  );
}
