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

import imgGim1 from "../Images/Instalaciones/imgGimnasio1.webp";
import imgGim2 from "../Images/Instalaciones/imgGImnasio2.webp";
import clockSVG from "../Images/SVG/clock.svg";
import locationSVG from "../Images/SVG/location.svg";
import contactSVG from "../Images/SVG/contact.svg";
import dumbbellSVG from "../Images/SVG/dumbbell.svg";
import instagramSVG from "../Images/SVG/instagram.svg";
import whatsappSVG from "../Images/SVG/whatsapp.svg";
import returnSVG from "../Images/SVG/return.svg";
import Slider from "react-slick";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Instalaciones = () => {
  useEffect(() => {
    document.title = "Instalaciones Turu Fitness";
  }, []);

  // Configuración del carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    fade: true,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  // Datos del carrusel
  const carouselImages = [
    {
      src: imgGim1,
      alt: "Gimnasio imagen 1",
      title: "Gimnasio Moderno",
    },
    {
      src: imgGim2,
      alt: "Gimnasio imagen 2",
      title: "Equipamientos de calidad",
    },
  ];

  // Datos de las tarjetas de información (Horarios, Ubicación, Contacto)
  const infoCards = [
    {
      icon: clockSVG,
      title: "Horarios",
      content: (
        <p className="font-messina mt-4">
          <span className="font-bold">Lunes a Viernes</span> - 8:30hs a 23:00hs
        </p>
      ),
    },
    {
      icon: locationSVG,
      title: "Ubicación",
      content: (
        <p className="font-messina mt-4">
          <a
            href="https://maps.app.goo.gl/Tu1Wr5XMeXHQnP1GA"
            title="Abrir ubicación en Google Maps"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            25 de Mayo, Simoca, Tucumán
          </a>
        </p>
      ),
    },
    {
      icon: contactSVG,
      title: "Contacto",
      content: (
        <>
          <div className="flex items-center mt-4">
            <img src={whatsappSVG} alt="Icono" className="size-6" />
            <a
              href="https://api.whatsapp.com/send/?phone=543863564651&text=Hola%21+vengo+desde+el+sitio+oficial%21%21&type=phone_number&app_absent=0"
              title="Ir a WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              className="font-messina pl-4 hover:underline"
            >
              (3863)-564651
            </a>
          </div>
          <div className="flex items-center mt-2">
            <img src={instagramSVG} alt="Icono" className="size-6" />
            <a
              href="https://www.instagram.com/turufitnees/"
              title="Ir a Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="font-messina pl-4 hover:underline"
            >
              turufitnees
            </a>
          </div>
        </>
      ),
    },
  ];

  // Datos de la lista de equipamientos
  const equipmentItems = [
    "1150 mt2.",
    "2 Salones de musculación, salón de cardio.",
    "+50 Maquinas de musculación.",
    "+20 Maquinas de cardio.",
    "+1000 Kg en discos.",
    "+40 Pares de mancuernas.",
    "Zona de entrenamiento funcional.",
    "Estudio de yoga y pilates.",
    "Vestuarios con taquillas y duchas.",
    "Servicio de entrenadores personales.",
    "Clases grupales variadas.",
    "Área de descanso con bebidas saludables.",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 via-blue-500 to-blue-800 bg-opacity-90 animate-gradient">
      {/* Botón de volver */}
      <div className="pl-10 pt-5 max-sm:pl-2">
        <Link to="/">
          <button className="relative flex items-center justify-center group overflow-hidden rounded-full px-6 py-3 bg-primary text-white text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50 z-0">
            <div className="absolute inset-0 transform -translate-x-full bg-blue-600 transition-transform duration-300 group-hover:translate-x-0"></div>
            <span className="relative flex items-center space-x-2 z-10">
              <img src={returnSVG} alt="Volver" className="size-7" />
              <span>Volver</span>
            </span>
          </button>
        </Link>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-8">
        {/* Slider para móvil */}
        <div className="lg:hidden w-full mb-8">
          <div className="slider-container">
            <Slider {...settings}>
              {carouselImages.map((image, index) => (
                <div key={index} className="px-2">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 group">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                      <h3 className="text-white text-2xl font-bold font-bignoodle animate-fade-in">
                        {image.title}
                      </h3>
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="flex flex-col">
          {/* Carrusel de imágenes (ocupa todo el ancho) */}
          <div className="w-full hidden lg:block">
            <div className="slider-container">
              <Slider {...settings}>
                {carouselImages.map((image, index) => (
                  <div key={index} className="px-2">
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 group">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                        <h3 className="text-white text-4xl font-bold font-bignoodle animate-fade-in">
                          {image.title}
                        </h3>
                      </div>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 mt-12 items-center">
            {/* Columna izquierda (Horarios, Ubicación, Contacto) */}
            <div className="w-full lg:w-2/5" id="instalaciones">
              <div className="grid grid-cols-1 gap-6">
                {infoCards.map((card, index) => (
                  <div
                    key={index}
                    className="text-white p-6 bg-blue-700/30 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-center">
                      <img src={card.icon} alt="Icono" className="size-12" />
                      <h1 className="font-bignoodle text-2xl pl-2">
                        {card.title}
                      </h1>
                    </div>
                    {card.content}
                  </div>
                ))}
              </div>
            </div>

            {/* Columna central (Equipamientos y servicios) */}
            <div className="w-full lg:w-3/5">
              <div className="text-white p-6 bg-blue-700/30 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <div className="flex items-center mb-5">
                  <img src={dumbbellSVG} alt="Icono" className="size-12" />
                  <h1 className="font-bignoodle text-2xl pl-2">
                    Equipamientos y servicios
                  </h1>
                </div>
                <div className="grid grid-cols-2 xl:grid-cols-2 gap-4">
                  {equipmentItems.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 bg-blue-800/30 rounded-md shadow-md"
                    >
                      <p className="font-messina">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instalaciones;