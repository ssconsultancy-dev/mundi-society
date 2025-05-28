import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="backdrop-blur-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <h1 className="text-sm md:text-base font-bold text-white">
              THE MUNDI (S) SELF SUPPORTING CO-OPERATIVE House Building Society Ltd., Mohali
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-blue-300">Home</a>
            <a href="#about" className="text-white hover:text-blue-300">About</a>
            <a href="#notices" className="text-white hover:text-blue-300">Notices</a>
            <a href="#board" className="text-white hover:text-blue-300">Board</a>
            <a href="#contact" className="text-white hover:text-blue-300">Contact</a>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-300 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-black/80 px-2 pt-2 pb-3 space-y-1 sm:px-3 rounded-b-lg">
            <a href="#home" className="block px-3 py-2 text-white hover:text-blue-300">Home</a>
            <a href="#about" className="block px-3 py-2 text-white hover:text-blue-300">About</a>
            <a href="#notices" className="block px-3 py-2 text-white hover:text-blue-300">Notices</a>
            <a href="#board" className="block px-3 py-2 text-white hover:text-blue-300">Board</a>
            <a href="#contact" className="block px-3 py-2 text-white hover:text-blue-300">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
