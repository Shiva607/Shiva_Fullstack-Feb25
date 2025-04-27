import { navigate } from "@reach/router";
import React from "react";

export default function About() {
  return (
    <div>
      <h3>About Us</h3>
      <button onClick={() => navigate("/")}>Goto home</button>
    </div>
  );
}
