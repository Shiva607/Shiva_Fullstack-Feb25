import React from "react";

export default function UserProfile({ id }) {
  const userData = {
    1: { name: "Rama", age: 28 },
    2: { name: "Krishna", age: 34 },
  };

  // id will come as string, so better to safely access
  const user = userData[id] || { name: "Unknown", age: "N/A" };

  return (
    <div>
      <h2>User Profile: {user.name}</h2>
      <p>Age: {user.age}</p>
    </div>
  );
}
