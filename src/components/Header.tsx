import React, { useState } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#e0c057] text-black text-sm sm:text-base tracking-wide font-serif px-4 sm:px-6 py-2 flex justify-between items-center">
        <div className="italic text-xs sm:text-sm">
          Welcome to <span className="text-[#080703] font-bold not-italic">ELIAHA</span> photography
        </div>
        <div className="flex space-x-3 sm:space-x-4 text-[18px] sm:text-[20px]">
          <a href="#" className="hover:text-[#0a0a0a] transition-colors"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="hover:text-[#0a0a0a] transition-colors"><i className="fab fa-instagram"></i></a>
          <a href="#" className="hover:text-[#0a0a0a] transition-colors"><i className="fab fa-twitter"></i></a>
          <a href="#" className="hover:text-[#0a0a0a] transition-colors"><i className="fab fa-pinterest-p"></i></a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-black sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/img/logo1.jpg"
              alt="ELIAHA Photography Logo"
              className="h-14 sm:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 lg:space-x-8">
            <li><Link to="/" className="text-white text-sm sm:text-[17px] hover:text-[#c59d5f] transition">Home</Link></li>
            <li><Link to="/portfolio" className="text-white text-sm sm:text-[17px] hover:text-[#c59d5f] transition">Portfolio</Link></li>
            <li><Link to="/about" className="text-white text-sm sm:text-[17px] hover:text-[#c59d5f] transition">About</Link></li>
            <li><Link to="/reviews" className="text-white text-sm sm:text-[17px] hover:text-[#c59d5f] transition">Reviews</Link></li>
            <li><Link to="/contact" className="text-white text-sm sm:text-[17px] hover:text-[#c59d5f] transition">Contact</Link></li>
            <li><Link to="/services" className="text-white text-sm sm:text-[17px] hover:text-[#c59d5f] transition">Services</Link></li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-black w-full transition-all duration-300 ${menuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"}`}>
          <ul className="flex flex-col px-4 py-2 space-y-2">
            <li><Link to="/" className="block text-white px-2 py-2 rounded hover:bg-yellow-700 transition">Home</Link></li>
            <li><Link to="/portfolio" className="block text-white px-2 py-2 rounded hover:bg-yellow-700 transition">Portfolio</Link></li>
            <li><Link to="/about" className="block text-white px-2 py-2 rounded hover:bg-yellow-700 transition">About</Link></li>
            <li><Link to="/reviews" className="block text-white px-2 py-2 rounded hover:bg-yellow-700 transition">Reviews</Link></li>
            <li><Link to="/contact" className="block text-white px-2 py-2 rounded hover:bg-yellow-700 transition">Contact</Link></li>
            <li><Link to="/services" className="block text-white px-2 py-2 rounded hover:bg-yellow-700 transition">Services</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
