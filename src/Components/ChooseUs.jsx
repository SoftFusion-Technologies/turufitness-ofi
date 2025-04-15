import React, { useState, useEffect, useRef } from 'react';
import {
  FaUsers,
  FaDumbbell,
  FaRegLightbulb,
  FaHeartbeat
} from 'react-icons/fa';
import CountUp from 'react-countup';
import '../Styles/ChoseUs.css';
import ImgChoose from '../Images/choose-img.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ChooseUs = () => {
  useEffect(() => {
    AOS.init({
      // duration: 1000, // Duración de la animación en milisegundos
      easing: 'ease-in-out', // Tipo de animación
      once: true // Si la animación se repite al hacer scroll
    });
  }, []);

  const [startCount, setStartCount] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.5 } // Se activa cuando el 50% del elemento es visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <section
      className="py-20 bg-gradient-to-b from-white to-gray-100"
      id="choose"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={counterRef}>
        <div className="text-center mb-12">
          <h2 className="text-blue-500 text-lg font-semibold uppercase">
            La Mejor Elección
          </h2>
          <h1 className="uppercase text-4xl sm:text-5xl font-bold text-gray-800 mt-2">
            ¿Por qué elegirnos?
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            En <span className="font-bold text-blue-500">TURU FITNESS</span>{' '}
            encontrarás más que un gimnasio: un equipo que te acompaña en cada
            paso. Tecnología de punta, entrenadores certificados y una comunidad
            motivadora te esperan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <FaUsers className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-800">
              +{startCount && <CountUp end={200} duration={3} />}
            </h3>
            <p className="text-gray-600 mt-2">Miembros Activos</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <FaDumbbell className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-800">
              +{startCount && <CountUp end={7} duration={3} />}
            </h3>
            <p className="text-gray-600 mt-2">Entrenadores Certificados</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <FaRegLightbulb className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-800">+15</h3>
            <p className="text-gray-600 mt-2">Planes Personalizados</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <FaHeartbeat className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-800">
              +{startCount && <CountUp end={30} duration={3} />}
            </h3>
            <p className="text-gray-600 mt-2">Equipos de Última Generación</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
