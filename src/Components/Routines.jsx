import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import rutina1 from '../Videos/rutinaGabriela.mp4'; // Reemplazá o sumá más videos si tenés

const routines = [
  {
    title: 'Rutina Full Body con Gabriela',
    description:
      'Entrenamiento completo para activar todo el cuerpo. Ideal para comenzar el día con energía.',
    video: rutina1
  }
  // Podés agregar más rutinas aquí
  // {
  //   title: 'Rutina Cardio Explosiva',
  //   description: '15 minutos intensos para quemar calorías.',
  //   video: rutina2,
  // },
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

        <div className="flex flex-wrap justify-center gap-12">
          {routines.map((routine, idx) => (
            <div
              key={idx}
              className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 aspect-[9/16] mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
              data-aos="zoom-in"
            >
              <video
                controls
                className="w-full h-full object-cover"
                poster="/path/to/preview.jpg" // opcional si querés una miniatura
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
