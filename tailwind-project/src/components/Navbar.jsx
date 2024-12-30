import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full p-4 bg-blue-600 shadow-md">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        {/* Brand Logo */}
        <div className="flex items-center space-x-4">
          <span className="text-2xl font-semibold text-white">SchoolApp</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden space-x-4 md:flex">
          <a href="/" className="text-white hover:text-gray-200">Home</a>
          <a href="/about" className="text-white hover:text-gray-200">About</a>
          <a href="/contact" className="text-white hover:text-gray-200">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mt-4 space-y-2 md:hidden">
          <a href="/" className="block text-white hover:text-gray-200">Home</a>
          <a href="/about" className="block text-white hover:text-gray-200">About</a>
          <a href="/contact" className="block text-white hover:text-gray-200">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
