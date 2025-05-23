import React, { useState, useEffect, useContext } from 'react';
import { ContactContext } from '../context/ContactContext';
import Img1 from '../assets/img1bg.webp';
import Img2 from '../assets/img2bg.webp';
import Img3 from '../assets/img3.webp';
import HeroVideo from '../Videos/heroVideo.mp4';

const Hero = () => {
  const [texto, setTexto] = useState('');
  const [indice, setIndice] = useState(0);
  const fullText = 'TURU FITNESS';
  const typingSpeed = 90;

  // Array de imágenes para el fondo
  const backgroundImages = [Img1, Img2, Img3];

  // Estado para el índice de la imagen
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  // Cambiar fondo cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 2000); // Cambiar cada 2 segundos

    return () => clearInterval(interval); // Limpiar intervalos cuando se desmonte el componente
  }, []);

  useEffect(() => {
    if (indice < fullText.length) {
      const timeout = setTimeout(() => {
        setTexto(fullText.slice(0, indice + 1));
        setIndice(indice + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      // Reiniciar después de una pausa
      const resetTimeout = setTimeout(() => {
        setTexto('T');
        setIndice(0);
      }, 2500);

      return () => clearTimeout(resetTimeout);
    }
  }, [indice, fullText]);

  // Separar el texto en dos partes para aplicar diferentes estilos
  const part1Length = 'TURU'.length;
  const part2Length = fullText.length;

  // Usa el contexto para abrir el modal de contacto
  const { setIsContactOpen } = useContext(ContactContext);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={HeroVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay oscuro para mejorar contraste */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10" />

      {/* Contenido sobre el video */}
      <div className="relative z-20 pt-20 flex flex-col items-center justify-center lg:pt-0 lg:flex-row h-full">
        <div className="w-full text-center text-white pt-10 lg:pt-32">
          <h1 className="pt-4 text-3xl font-bold sm:text-8xl font-bignoodle">
            <span>{texto.slice(0, part1Length)}</span>
            <span
              className={
                texto.length > part1Length && texto.length <= part2Length
                  ? 'text-blue-400'
                  : 'text-white'
              }
            >
              {texto.slice(part1Length)}
            </span>
          </h1>

          <div className="flex justify-center items-center">
            <p className="pt-5 w-[290px] sm:w-[450px] sm:text-xl font-messina mt-5">
              ¡Transforma tu cuerpo en nuestro gimnasio! Vení a entrenar con
              nosotros.
            </p>
          </div>

          <div className="flex justify-center items-center flex-col gap-4 pt-5 text-white sm:flex-row">
            <div className="w-[200px]">
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-10 py-3 rounded-xl font-bignoodle sm:text-3xl mt-5 transition-transform transform hover:scale-105 hover:shadow-lg focus:outline-none"
              >
                Comenzar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
