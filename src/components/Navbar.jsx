import React from "react";
import DarkLogo from '../assets/dark-logo.png';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={DarkLogo} alt="Raja Sahib Ji" className="h-12" />
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <a href="#" className="text-orange-500">Home</a>
            <a href="#" className="hover:text-orange-500">About Raja Sahib</a>
            <a href="#" className="hover:text-orange-500">Noori Kirna</a>
            <a href="#" className="hover:text-orange-500">Events</a>
            <a href="#" className="hover:text-orange-500">Gurdwara Sahibs</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-orange-500 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
