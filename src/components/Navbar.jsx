import { useState } from 'react';
import { FaBars, FaRegWindowClose } from 'react-icons/fa';
import logo from '../assets/images/logo.png.jpg'; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="p-5 bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center size-15">
          <img src={logo} alt="Agentic AI Logo" className="w-15 h-14 mr-2" />
        </a>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaRegWindowClose className="w-8 h-8" /> : <FaBars className="w-8 h-8" />}
        </div>

        {/* Navigation Links */}
        <ul
          className={`fixed inset-0 bg-gray-900 text-white flex flex-col items-center justify-center transform ${
            isOpen ? 'translate-y-0' : '-translate-y-full'
          } transition-transform duration-500 ease-in-out md:static md:flex md:flex-row md:space-x-6 md:bg-transparent md:translate-y-0`}
        >
          <li className="text-center py-4 md:py-0">
            <a href="#about" className="block hover:text-indigo-400 transition-colors duration-300 font-serif" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li className="text-center py-4 md:py-0">
            <a href="#features" className="block hover:text-indigo-400 transition-colors duration-300 font-serif" onClick={toggleMenu}>
              Features
            </a>
          </li>
          <li className="text-center py-4 md:py-0">
            <a href="#aisolutions" className="block hover:text-indigo-400 transition-colors duration-300 font-serif" onClick={toggleMenu}>
              AI Solutions
            </a>
          </li>
          <li className="text-center py-4 md:py-0">
            <a href="#team" className="block hover:text-indigo-400 transition-colors duration-300 font-serif" onClick={toggleMenu}>
              Our Team
            </a>
          </li>
          <li className="text-center py-4 md:py-0">
            <a href="#contact" className="block hover:text-indigo-400 transition-colors duration-300 font-serif" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
