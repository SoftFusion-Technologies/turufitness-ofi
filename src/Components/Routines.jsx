import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import rutina1 from '../Videos/compressed_rutinaespalda1.mp4';
import rutina2 from '../Videos/compressed_rutinaFuncional.mp4';
import rutina3 from '../Videos/compressed_rutinaespalda2.mp4';

// Aquí podrías agregar thumbnails para cada video, si los tenés
const thumbnails = [
  '/thumbnails/rutina1.jpg',
  '/thumbnails/rutina2.jpg',
  '/thumbnails/rutina3.jpg'
];

const routines = [
  {
    title: 'Rutina Full Espalda',
    description:
      'Entrenamiento completo para activar todo el cuerpo. Ideal para comenzar el día con energía.',
    video: rutina1,
    thumbnail: thumbnails[0]
  },
  {
    title: 'Rutina Funcional',
    description:
      'Entrenamiento completo para activar todo el cuerpo. Ideal para comenzar el día con energía.',
    video: rutina2,
    thumbnail: thumbnails[1]
  },
  {
    title: 'Rutina Full Espalda 2',
    description:
      'Entrenamiento completo para activar todo el cuerpo. Ideal para comenzar el día con energía.',
    video: rutina3,
    thumbnail: thumbnails[2]
  }
];

const Routines = () => {
  useEffect(() => {
    AOS.init({ easing: 'ease-in-out', once: true });
  }, []);

  return (
    <section
      className="bg-gradient-to-b from-white to-gray-100 py-16 px-4"
      id="rutinas"
    >
      <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
        <h2 className="uppercase font-bignoodle text-4xl sm:text-6xl text-gray-800 mb-6">
          Rutinas de entrenamiento
        </h2>
        <p className="text-gray-600 mb-10 text-lg max-w-3xl mx-auto">
          Seguí estas rutinas guiadas por nuestros entrenadores y entrená donde
          quieras.
        </p>

        {/* Grid con 3 columnas en desktop, responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
          {routines.map((routine, idx) => (
            <div
              key={idx}
              className="w-full max-w-sm aspect-[9/16] bg-gradient-to-b from-gray-200 to-gray-400 rounded-xl shadow-lg overflow-hidden"
              data-aos="zoom-in"
            >
              <video
                controls
                className="w-full h-full object-cover bg-gray-300"
                preload="metadata"
              >
                <source src={routine.video} type="video/mp4" />
                Tu navegador no soporta el video.
              </video>
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {routine.title}
                </h3>
                <p className="text-sm text-gray-600">{routine.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Routines;
