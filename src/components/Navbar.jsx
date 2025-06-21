import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-green-700 text-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Ajara Farm Tools</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li><a href="#home" className="hover:text-yellow-300">Home</a></li>
          <li><a href="#products" className="hover:text-yellow-300">Products</a></li>
          <li><a href="#about" className="hover:text-yellow-300">About</a></li>
          <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
        </ul>

        {/* Order Button Desktop */}
        <div className="hidden md:flex">
          <a
            href="https://wa.me/234XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 text-green-900 font-semibold px-4 py-2 rounded hover:bg-yellow-300 transition"
          >
            Order on WhatsApp
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-green-800 px-4 pb-6 pt-2 space-y-3 text-white">
          <a href="#home" className="block hover:text-yellow-300">Home</a>
          <a href="#products" className="block hover:text-yellow-300">Products</a>
          <a href="#about" className="block hover:text-yellow-300">About</a>
          <a href="#contact" className="block hover:text-yellow-300">Contact</a>
          <a
            href="https://wa.me/234XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block w-full text-center bg-yellow-400 text-green-900 font-semibold px-4 py-2 rounded hover:bg-yellow-300 transition"
          >
            Order on WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
