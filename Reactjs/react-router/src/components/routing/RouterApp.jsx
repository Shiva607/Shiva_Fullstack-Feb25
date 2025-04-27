import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
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

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
