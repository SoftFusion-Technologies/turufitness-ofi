import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Imágenes de actividades
import crossfitImg from '../Images/crossfit.jpg';
import kickboxingImg from '../Images/kickboxing.jpg';
import musculacionImg from '../Images/musculacion.jpg';
import funcionalImg from '../Images/funcional.jpg';

// Imágenes de entrenadores
import coachHombre from '../Images/Entrenadores/coachHombres.jpg';
import coachMujer from '../Images/Entrenadores/coachMujer.png';

const Features = () => {
  useEffect(() => {
    AOS.init({ easing: 'ease-in-out', once: true });
  }, []);

  const classes = [
    {
      title: 'CrossFit',
      image: crossfitImg,
      description:
        'Entrenamiento funcional de alta intensidad para desafiar tus límites.'
    },
    {
      title: 'Kick Boxing',
      image: kickboxingImg,
      description:
        'Mejora tu resistencia y técnica con clases intensas de kick boxing.'
    },
    {
      title: 'Musculación',
      image: musculacionImg,
      description:
        'Fortalece y desarrolla tu cuerpo con rutinas de musculación personalizadas.'
    },
    {
      title: 'Funcional',
      image: funcionalImg,
      description: 'Entrenamientos dinámicos que trabajan todo tu cuerpo.'
    }
  ];

  const trainers = [
    {
      name: 'Andrea Robles',
      disciplines: 'Funcional',
      schedule: '09:00 a 10:00',
      gender: 'f'
    },
    { name: 'Toni Ruiz', disciplines: 'Funcional', schedule: '20:00 a 21:00' },
    {
      name: 'Joaquín Saltos',
      disciplines: 'Funcional, Musculación',
      schedule: '15:00 a 17:00'
    },
    {
      name: 'Luciano Roldán',
      disciplines: 'CrossFit, Musculación',
      schedule: '17:00 a 19:00'
    },
    {
      name: 'Noelia Albornoz',
      disciplines: 'Musculación',
      schedule: '19:00 a 21:00',
      gender: 'f'
    },
    {
      name: 'Jony Herrera',
      disciplines: 'Musculación',
      schedule: '21:00 a 23:00'
    },
    {
      name: 'Nubia Saltos',
      disciplines: 'Turno Mañana',
      schedule: '',
      gender: 'f'
    },
    { name: 'Turu Lescano', disciplines: 'Turno Tarde', schedule: '' }
  ];

  return (
    <div className="px-4 py-10">
      <h2 className="uppercase font-bignoodle text-4xl sm:text-6xl text-center text-gray-800 mb-12">
        ¡Conocé lo que ofrecemos!
      </h2>

      {/* Actividades */}
      <div className="flex flex-wrap justify-center gap-8 mb-20">
        {classes.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 h-64 rounded-xl relative group transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            data-aos="fade-up"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 p-4 rounded-lg text-white">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Entrenadores */}
      <div className="mb-20" id="entrenadores">
        <h2 className="uppercase font-bignoodle text-4xl sm:text-6xl text-center text-gray-800 mb-12">
          Nuestros Entrenadores
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {trainers.map((trainer, idx) => (
            <div
              key={idx}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-white p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105"
              data-aos="fade-up"
            >
              <img
                src={trainer.gender === 'f' ? coachMujer : coachHombre}
                alt={trainer.name}
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{trainer.name}</h3>
              <p className="text-gray-600">{trainer.disciplines}</p>
              {trainer.schedule && (
                <p className="text-gray-500 text-sm">
                  Horario: {trainer.schedule}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
