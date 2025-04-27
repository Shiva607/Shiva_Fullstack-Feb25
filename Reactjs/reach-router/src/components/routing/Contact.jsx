import { navigate } from "@reach/router";
import React from "react";

export default function Contact() {
  return (
    <div>
      <h3>Contact Page</h3>
      <button onClick={() => navigate("/")}>Goto home</button>
    </div>
  );
}
