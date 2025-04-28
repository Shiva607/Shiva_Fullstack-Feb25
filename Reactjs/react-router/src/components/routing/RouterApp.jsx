import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";

export default function RouterApp() {
  return (
    <div>
      <div align="right">
        <nav style={{ textAlign: "right", marginBottom: "20px" }}>
          <Link to="/">Home</Link> | &nbsp;
          <Link to="/about">About</Link> | &nbsp;
          <Link to="/contact">Contact</Link>
        </nav>
      </div>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
