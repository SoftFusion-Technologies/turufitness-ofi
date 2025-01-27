import React, { useState, useEffect, useContext } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import LogoTF from "../Images/logoTuruFitness.jpg";
import "../Styles/animacionlinks.css";
import { menuItems } from "../Config/menu";
import Contact from "../Pages/Contact";
import { ContactContext } from "../context/ContactContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isContactOpen, setIsContactOpen } = useContext(ContactContext);
  const navigate = useNavigate(); //Esto sirve para menar la navegación

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Función para manejar el scroll después de redirigir
  const handleScroll = (to) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(to);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const section = document.getElementById(to);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="bg-white shadow-md relative z-10 overflow-visible">
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
            item.href === "contacto" ? (
              <button
                key={item.id}
                onClick={() => setIsContactOpen(true)}
                className="link font-bignoodle text-base md:text-md lg:text-lg xl:text-2xl font-medium text-black hover:text-blue-400 transition"
              >
                {item.label}
              </button>
            ) : item.href.startsWith("#") ? (
              <RouterLink
                key={item.id}
                to="/"
                onClick={() => handleScroll(item.href.replace("#", ""))}
                className="link font-bignoodle text-base md:text-md lg:text-lg xl:text-2xl font-medium text-black hover:text-blue-400 transition cursor-pointer"
              >
                {item.label}
              </RouterLink>
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
          <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col space-y-4 py-4 px-6 z-50">
            {menuItems.map((item) =>
              item.href === "contacto" ? (
                <button
                  key={item.id}
                  onClick={() => {
                    setIsContactOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="link font-bignoodle text-base font-medium text-black hover:text-blue-400 transition text-left"
                >
                  {item.label}
                </button>
              ) : item.href.startsWith("#") ? (
                <RouterLink
                  key={item.id}
                  to="/"
                  onClick={() => {
                    handleScroll(item.href.replace("#", ""));
                    setIsMenuOpen(false);
                  }}
                  className="link font-bignoodle text-base font-medium text-black hover:text-blue-400 transition cursor-pointer"
                >
                  {item.label}
                </RouterLink>
              ) : (
                <RouterLink
                  key={item.id}
                  to={item.href}
                  className="link font-bignoodle text-base font-medium text-black hover:text-blue-400 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </RouterLink>
              )
            )}
          </div>
        )}
      </div>

      <Contact open={isContactOpen} setIsOpen={setIsContactOpen} />
    </nav>
  );
};

export default Navbar;
