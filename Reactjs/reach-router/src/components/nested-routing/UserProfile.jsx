import { Link } from "@reach/router";
import React from "react";

export default function UserProfile({ id, children }) {
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
      {children}
    </div>
  );
}
