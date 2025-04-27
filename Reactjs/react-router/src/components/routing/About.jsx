import { useNavigate } from "react-router-dom";
import React from "react";

export default function About() {
  let navigate = useNavigate();
  return (
    <div>
      <h3>About Us</h3>
      <button onClick={() => navigate("/")}>Goto home</button>
    </div>
  );
}
