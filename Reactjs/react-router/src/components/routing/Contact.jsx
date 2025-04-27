import { useNavigate } from "react-router-dom";
import React from "react";

export default function Contact() {
  let navigate = useNavigate();
  return (
    <div>
      <h3>Contact Page</h3>
      <button onClick={() => navigate("/")}>Goto home</button>
    </div>
  );
}
