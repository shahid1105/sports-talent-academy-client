import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/" className="text-white text-lg font-semibold">
              Logo
            </Link>
            <button
              className="ml-4 md:hidden text-gray-400 hover:text-white focus:outline-none"
              onClick={toggleNavbar}>
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className={`md:flex ${isOpen ? "block" : "hidden"}`}>
            <ul className="md:flex items-center">
              <li>
                <Link
                  to="/"
                  className={`block text-gray-400 hover:text-white px-2 py-1 md:p-2 ${
                    location.pathname === "/" ? "text-white font-bold" : ""
                  }`}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`block text-gray-400 hover:text-white px-2 py-1 md:p-2 ${
                    location.pathname === "/about" ? "text-white font-bold" : ""
                  }`}>
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className={`block text-gray-400 hover:text-white px-2 py-1 md:p-2 ${
                    location.pathname === "/services"
                      ? "text-white font-bold"
                      : ""
                  }`}>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`block text-gray-400 hover:text-white px-2 py-1 md:p-2 ${
                    location.pathname === "/contact"
                      ? "text-white font-bold"
                      : ""
                  }`}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
