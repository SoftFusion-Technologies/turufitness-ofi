import React, { useState } from 'react';
import LogoTF from '../Images/logoTuruFitness.jpg';
import { Link } from 'react-router-dom';
import '../Styles/animacionlinks.css';
import { menuItems } from '../Config/menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-md relative z-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo y Nombre */}
        <div className="flex items-center space-x-3">
          <a to="/">
            {' '}
            {/* Redirige al inicio cuando se hace clic */}
            <img src={LogoTF} alt="Turu Fitness Logo" className="h-14 w-auto" />
          </a>
          <a to="/" className="a">
            <span className="font-bignoodle text-2xl font-bold text-black tracking-wide uppercase">
              Turu Fitness
            </span>
          </a>
        </div>

        {/* Menú Desktop */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.id}
              to={item.href}
              className="a font-bignoodle text-lg font-medium text-black hover:text-gray-500 transition"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Botón Hamburguesa */}
        <button
          className="block md:hidden text-black focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </button>
      </div>

      {/* Menú Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          {menuItems.map((item) => (
            <a
              key={item.id}
              to={item.href}
              className="font-bignoodle block px-4 py-2 text-black hover:bg-gray-100 transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
