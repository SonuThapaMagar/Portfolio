import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false); // state to track scroll position

  const handleClick = () => {
    setClick(!click);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full text-white shadow-lg z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-md" : "" // apply blur when scrolled
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-5 py-4">
        {/* Logo */}
        <div className="text-3xl font-bold">m.Sonu</div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 text-base">
          <li>
            <Link to="/" className="cursor-pointer hover:text-blue-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="cursor-pointer hover:text-blue-600 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="cursor-pointer hover:text-blue-600 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/achievement" className="cursor-pointer hover:text-blue-600 transition">
              Achievement
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="block lg:hidden text-2xl"
          onClick={handleClick}
          aria-label="Toggle menu"
        >
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>

      {/* Mobile Menu */}
      {click && (
        <div className="lg:hidden bg-slate-900">
          <ul className="flex flex-col text-center text-sm py-4 space-y-2">
            <li>
              <Link to="/" onClick={handleClick} className="hover:text-blue-600 transition cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleClick} className="hover:text-blue-600 transition cursor-pointer">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={handleClick} className="hover:text-blue-600 transition cursor-pointer">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/achievement" className="cursor-pointer hover:text-blue-600 transition">
                Achievement
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
