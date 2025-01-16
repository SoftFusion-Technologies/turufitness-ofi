import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Para smooth scrolling
import { Link as RouterLink } from 'react-router-dom'; // Para navegación normal
import LogoTF from '../Images/logoTuruFitness.jpg';
import '../Styles/animacionlinks.css';
import { menuItems } from '../Config/menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-md relative z-10">
      <div className="container container-navbar mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo y Nombre */}
        <div className="flex items-center space-x-3">
          <RouterLink to="/">
            <img src={LogoTF} alt="Turu Fitness Logo" className="h-14 w-auto" />
          </RouterLink>
          <RouterLink to="/" className="link">
            <span className="font-bignoodle text-2xl font-bold text-black tracking-wide uppercase">
              Turu Fitness
            </span>
          </RouterLink>
        </div>

        {/* Menú Desktop */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) =>
            item.href.startsWith('#') ? ( // Si el href comienza con '#', usar ScrollLink
              <ScrollLink
                key={item.id}
                to={item.href.replace('#', '')} // Eliminar '#' para coincidir con el id del elemento
                smooth={true}
                duration={500}
                className="link font-bignoodle text-base md:text-md lg:text-lg xl:text-2xl font-medium text-black hover:text-blue-400 transition cursor-pointer"
              >
                {item.label}
              </ScrollLink>
            ) : (
              <RouterLink
                key={item.id}
                to={item.href}
                className="link font-bignoodle text-base md:text-md lg:text-lg xl:text-2xl font-medium text-black hover:text-blue-400 transition"
              >
                {item.label}
              </RouterLink>
            )
          )}
        </div>

        {/* Menú Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            {/* Ícono de menú */}
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Dropdown Mobile */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col space-y-4 py-4 px-6">
            {menuItems.map((item) =>
              item.href.startsWith('#') ? (
                <ScrollLink
                  key={item.id}
                  to={item.href.replace('#', '')}
                  smooth={true}
                  duration={500}
                  className="link font-bignoodle text-base font-medium text-black hover:text-blue-400 transition cursor-pointer"
                  onClick={() => setIsMenuOpen(false)} // Cierra el menú al hacer clic
                >
                  {item.label}
                </ScrollLink>
              ) : (
                <RouterLink
                  key={item.id}
                  to={item.href}
                  className="link font-bignoodle text-base font-medium text-black hover:text-blue-400 transition"
                  onClick={() => setIsMenuOpen(false)} // Cierra el menú al hacer clic
                >
                  {item.label}
                </RouterLink>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
