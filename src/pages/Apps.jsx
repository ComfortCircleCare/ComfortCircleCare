import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";

export default function App() {
  return (
    <div>
      <header className="p-4 bg-brand text-white flex justify-between">
        <h1 className="text-xl font-bold">Comfort Circle Care</h1>
        <nav className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="p-6 bg-gray-100 text-center text-sm">
        <p>© 2025 Comfort Circle Care. All rights reserved.</p>
      </footer>
    </div>
  );
}
