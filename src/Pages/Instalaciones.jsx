/*
 * Programador: Benjamin Orellana
 * Fecha Cración: 06 / 04 / 2024
 * Versión: 1.0
 *
 * Descripción: Subpágina que se abre luego de hacer click en el botón principal Instalaciones.
 *
 *
 *  Tema: Instalacion
 *  Capa: Frontend
 */

import imgGim1 from '../Images/Instalaciones/imgGimnasio1.webp';
import imgGim2 from '../Images/Instalaciones/imgGImnasio2.webp';
import Slider from 'react-slick';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Instalaciones = () => {
  useEffect(() => {
    document.title = 'Instalaciones Turu Fitness';
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 via-blue-500 to-blue-800 bg-opacity-90 animate-gradient">
      <div className="pl-10 pt-5 max-sm:pl-2 relative">
        <Link to="/">
          <button className="relative flex items-center justify-center group overflow-hidden rounded-full px-6 py-3 bg-primary text-white text-lg font-semibold shadow-md transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50 z-0">
            <div className="absolute inset-0 transform -translate-x-full bg-blue-600 transition-transform duration-300 group-hover:translate-x-0"></div>
            <span className="relative flex items-center space-x-2 z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 46 40"
                className="w-6 h-6 fill-current"
              >
                <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
              </svg>
              <span>Volver</span>
            </span>
          </button>
        </Link>
      </div>


      <div className="container mx-auto px-8 py-8">
        {/* Slider para móvil */}
        <div className="lg:hidden w-full mb-8">
          <div className="slider-container">
            <Slider {...settings}>
              <div className="px-1">
                <img 
                  src={imgGim1} 
                  alt="Gimnasio imagen 1" 
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
              <div className="px-1">
                <img 
                  src={imgGim2} 
                  alt="Gimnasio imagen 2" 
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
            </Slider>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            {/* Información de Horarios*/}
            <div className="text-white mb-8">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-clock-hour-4"
                  width="52"
                  height="52"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ffffff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M12 12l3 2" />
                  <path d="M12 7v5" />
                </svg>
                <h1 className="font-bignoodle text-3xl pl-2">Horarios</h1>
              </div>
              <p className="font-messina mt-2">
                <span className="font-bold">Lunes a Viernes</span> - 8:30hs a 23:00hs
              </p>
            </div>

            {/* Información de Ubicación*/}
            <div className="text-white mb-8">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-map-pin"
                  width="52"
                  height="52"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ffffff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                  <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                </svg>
                <h1 className="font-bignoodle text-3xl pl-2">Ubicación</h1>
              </div>
              <p className="font-messina mt-2">
                <a
                  href="https://www.google.com/maps/place/Espa%C3%B1a+1732,+T4146+Concepci%C3%B3n,+Tucum%C3%A1n/@-27.3458572,-65.5989922,17z/data=!3m1!4b1!4m6!3m5!1s0x9423cfd9beacde8f:0xcd929e71cf7bd11!8m2!3d-27.345862!4d-65.5964173!16s%2Fg%2F11jk25nd8b?entry=ttu"
                  title="Abrir ubicación en Google Maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  25 de Mayo, Simoca, Tucumán
                </a>
              </p>
            </div>

            {/* Información de Contacto*/}
            <div className="text-white mb-8">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-phone-incoming"
                  width="52"
                  height="52"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ffffff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                  <path d="M15 9l5 -5" />
                  <path d="M15 5l0 4l4 0" />
                </svg>
                <h1 className="font-bignoodle text-3xl pl-2">Contacto</h1>
              </div>
              <div className="flex items-center mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-whatsapp"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ffffff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                  <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                </svg>
                <a
                  href="https://api.whatsapp.com/send/?phone=543863564651&text=Hola%21+vengo+desde+el+sitio+oficial%21%21&type=phone_number&app_absent=0"
                  title="Ir a WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-messina pl-2 hover:underline"
                >
                  3863564651
                </a>
              </div>
              <div className="flex items-center mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-instagram"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ffffff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path d="M16.5 7.5l0 .01" />
                </svg>
                <a
                  href="https://www.instagram.com/turufitnees/"
                  title="Ir a Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-messina pl-2 hover:underline"
                >
                  turufitnees
                </a>
              </div>
            </div>

            {/* Información de Equipamientos y Servicios*/}
            <div className="text-white">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-barbell"
                  width="52"
                  height="52"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ffffff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M2 12h1" />
                  <path d="M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2" />
                  <path d="M6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z" />
                  <path d="M9 12h6" />
                  <path d="M15 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z" />
                  <path d="M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2" />
                  <path d="M22 12h-1" />
                </svg>
                <h1 className="font-bignoodle text-3xl pl-2">
                  Equipamientos y servicios
                </h1>
              </div>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>1150 mt2.</li>
                <li>2 Salones de musculación, salón de cardio</li>
                <li>+50 Maquinas de musculación.</li>
                <li>+50 Maquinas de musculación.</li>
                <li>+20 Maquinas de cardio.</li>
                <li>+1000 Kg en discos.</li>
                <li>+40 Pares de mancuernas.</li>
              </ul>
            </div>
          </div>

          {/* Slider para desktop */}
          <div className="hidden lg:block lg:w-3/4">
            <div className="slider-container">
              <Slider {...settings}>
                <div className="px-1">
                  <img 
                    src={imgGim1} 
                    alt="Gimnasio imagen 1" 
                    className="w-full h-[600px] object-cover rounded-md"
                  />
                </div>
                <div className="px-1">
                  <img 
                    src={imgGim2} 
                    alt="Gimnasio imagen 2" 
                    className="w-full h-[600px] object-cover rounded-md"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instalaciones;