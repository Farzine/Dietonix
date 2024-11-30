import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md w-full">
      <div className="px-4 flex justify-between items-center h-16">

        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900">
          Dietonix
        </div>

        
        <div className="flex-grow"></div>

       
        <div className="flex space-x-6 mr-5">
          <a href="#home" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
          <a href="#about" className="text-gray-600 hover:text-gray-900">
            About
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">
            Contact Us
          </a>
        </div>

        
        <div className="flex space-x-4">
          <a
            href="#login"
            className="text-gray-600 hover:text-gray-900 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
          >
            Login
          </a>
          <a
            href="#signup"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Sign Up
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
