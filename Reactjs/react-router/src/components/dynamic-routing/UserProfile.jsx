import React from "react";
import { useParams } from "react-router-dom"; // ✅ Import useParams

export default function UserProfile() {
  //! For more understand refer the file ReactJS/useParams.md
  const { id } = useParams(); // ✅ Get id from URL
  console.log(id);

  const userData = {
    1: { name: "Rama", age: 28 },
    2: { name: "Krishna", age: 34 },
  };

  // id comes as a string, so no issues in object lookup
  const user = userData[id] || { name: "Unknown", age: "N/A" };

  return (
    <div>
      <h2>User Profile: {user.name}</h2>
      <p>Age: {user.age}</p>
    </div>
  );
}
