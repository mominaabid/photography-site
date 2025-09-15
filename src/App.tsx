import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; //  Import Home page
import Portfolio from "./pages/Portfolio"; //  Import Portfolio page
import About from "./pages/About"; //  Import About page
import Reviews from "./pages/Reviews"; //  Import Reviews page
import Contact from "./pages/Contact"; //  Import Contact page
import Services from "./pages/Services"; //  Import Services page
const App: React.FC = () => {
  return (
    <Routes>
      {/* Home Page */}
      <Route path="/" element={<Home />} />
      {/* Portfolio Page */}
      <Route path="/portfolio" element={<Portfolio />} /> 
      {/* About Page */}
      <Route path="/about" element={<About />} />
      {/* Reviews Page */}
      <Route path="/reviews" element={<Reviews />} />
      {/* Contact Page */}
      <Route path="/contact" element={<Contact />} />
      {/* Services Page */}
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};

export default App;
