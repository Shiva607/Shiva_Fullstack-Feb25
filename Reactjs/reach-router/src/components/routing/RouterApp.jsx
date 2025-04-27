import { Link, Router } from "@reach/router";
import React from "react";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";

export default function RouterApp() {
  return (
    <div>
      <div align="right">
        <Link to="/">Home</Link> | &nbsp;
        <Link to="/about">About</Link> | &nbsp;
        <Link to="/contact">Contact</Link>
      </div>

      <hr />

      <Router>
        <Home path="/" />
        <About path="/about" />
        <Contact path="/contact" />
      </Router>
    </div>
  );
}
