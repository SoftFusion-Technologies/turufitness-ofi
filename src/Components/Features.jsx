import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import yogaImage from '../Images/yogaImg.jpg';
import spinningImage from '../Images/running.webp';
import gymImage from '../Images/programa-de-entrenamiento-de-fuerza.webp';

import trainer1 from '../Images/Entrenadores/entrenador1.jpg';
import trainer2 from '../Images/Entrenadores/entrenador2.jpg';
import trainer3 from '../Images/Entrenadores/entrenador3.jpg';

const Features = () => {
  useEffect(() => {
    AOS.init({
      // duration: 1000, // Duración de la animación en milisegundos
      easing: 'ease-in-out', // Tipo de animación
      once: true // Si la animación se repite al hacer scroll
    });
  }, []);

  const classes = [
    {
      title: 'Yoga',
      image: yogaImage,
      description: 'Relájate y estira tu cuerpo con nuestras clases de yoga.'
    },
    {
      title: 'Spinning',
      image: spinningImage,
      description: 'Acelera tu ritmo cardíaco con intensas clases de spinning.'
    },
    {
      title: 'Entrenamiento de fuerza',
      image: gymImage,
      description: 'Fortalece tu cuerpo con entrenamientos de musculación.'
    }
  ];

  return (
    <div className="px-4 py-10 bg-gray-100">
      <h2 className="uppercase font-bignoodle text-4xl sm:text-6xl text-center text-gray-800 mb-12">
        ¡Conoce lo que ofrecemos!
      </h2>

      {/* Clases */}
      <div className="flex flex-wrap justify-center gap-8 mb-20">
        {classes.map((gymClass, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 h-auto bg-cover bg-center rounded-xl relative group transition-transform duration-300 ease-in-out transform hover:scale-105"
            data-aos="fade-up"
            style={{
              backgroundImage: `url(${gymClass.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              minHeight: '250px'
            }}
          >
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 p-4 rounded-lg text-white">
              <h3 className="text-2xl font-semibold">{gymClass.title}</h3>
              <p className="text-sm">{gymClass.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Entrenadores */}
      <div className="mb-20">
        <h2 className="uppercase font-bignoodle text-4xl sm:text-6xl text-center text-gray-800 mb-12">
          Nuestros Entrenadores
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="trainer-card group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-white p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105">
            <img
              src={trainer1}
              alt="Entrenador 1"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">Juan Pérez</h3>
            <p className="text-gray-600">Especialista en musculación</p>
          </div>
          <div className="trainer-card group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-white p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105">
            <img
              src={trainer2}
              alt="Entrenador 2"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">María García</h3>
            <p className="text-gray-600">Yoga y bienestar</p>
          </div>
          <div className="trainer-card group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-white p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105">
            <img
              src={trainer3}
              alt="Entrenador 3"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">Carlos Díaz</h3>
            <p className="text-gray-600">Entrenamiento funcional</p>
          </div>
        </div>
      </div>

      {/* Testimonios */}
      <div>
        <h2 className="uppercase font-bignoodle text-4xl sm:text-6xl text-center text-gray-800 mb-12">
          Lo que dicen nuestros clientes
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white p-6 rounded-lg shadow-md text-center">
            <p className="text-xl italic text-gray-700 mb-4">
              "Excelente gimnasio, me ayudaron a mejorar mi rendimiento físico
              de manera increíble."
            </p>
            <span className="text-lg font-semibold text-gray-800">
              - Laura González
            </span>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white p-6 rounded-lg shadow-md text-center">
            <p className="text-xl italic text-gray-700 mb-4">
              "Entrenadores muy capacitados y un ambiente perfecto para
              entrenar."
            </p>
            <span className="text-lg font-semibold text-gray-800">
              - Roberto Martínez
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
