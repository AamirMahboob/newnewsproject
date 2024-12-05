import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#183b78] px-20">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-white">NewsSite</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white">
          <Link to={"/"}>
            <li className="text-white hover:text-yellow-500 cursor-pointer">
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="text-white hover:text-yellow-500 cursor-pointer">
              About
            </li>
          </Link>
          <Link to={"/contact"}>
            <li className="text-white hover:text-yellow-500 cursor-pointer">
              Contact
            </li>
          </Link>
          <Link to={"/admin/dashboard"}>
            <li className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Admin
            </li>
          </Link>
        </ul>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-yellow-50 border-t">
          <ul className="flex flex-col space-y-2 px-6 py-4">
            <li className="text-gray-700 hover:text-yellow-500 cursor-pointer">
              Home
            </li>
            <li className="text-gray-700 hover:text-yellow-500 cursor-pointer">
              About
            </li>
            <li className="text-gray-700 hover:text-yellow-500 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
