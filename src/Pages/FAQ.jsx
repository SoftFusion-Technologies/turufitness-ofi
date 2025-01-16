import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: '¿Cómo me inscribo en Turu Fitness?',
      answer:
        'Para inscribirte, selecciona el plan que más se ajuste a tus necesidades. Luego, completa el formulario en nuestro sitio web o acércate a nuestras instalaciones para que nuestro equipo te ayude con el proceso.'
    },
    {
      question: '¿Cuál es el costo de la membresía?',
      answer:
        'Los precios varían dependiendo del plan que elijas. Todos los precios están disponibles en nuestra web y en la recepción del gimnasio.'
    },
    {
      question: '¿Cuáles son los horarios de apertura?',
      answer:
        'Estamos abiertos todos los días de la semana, desde las 6:00 AM hasta las 10:00 PM.'
    },
    {
      question: '¿Puedo cambiar de plan después de inscribirme?',
      answer:
        'Sí, puedes cambiar tu plan en cualquier momento. Solo necesitas contactar a nuestro equipo de atención al cliente para hacer el cambio.'
    },
    {
      question: '¿El gimnasio cuenta con entrenadores personales?',
      answer:
        'Sí, ofrecemos entrenadores personales especializados para ayudarte a alcanzar tus objetivos de forma más efectiva. Puedes contratar uno directamente desde la web o en la recepción.'
    },
    {
      question: '¿Tienen clases grupales?',
      answer:
        'Sí, ofrecemos una variedad de clases grupales como yoga, pilates, spinning, HIIT, y más. Consulta nuestra programación semanal en la página web.'
    },
    {
      question: '¿Puedo acceder al gimnasio en cualquier momento?',
      answer:
        'Sí, si eres miembro, podrás acceder al gimnasio durante el horario de apertura. Para planes exclusivos de 24 horas, también tenemos acceso en horarios extendidos.'
    },
    {
      question: '¿El gimnasio está equipado con máquinas modernas?',
      answer:
        'Sí, contamos con equipos de última tecnología en cardio, pesas, y máquinas funcionales.'
    },
    {
      question: '¿Puedo realizar una prueba gratuita?',
      answer:
        'Sí, ofrecemos una clase de prueba gratuita para que puedas conocer nuestras instalaciones y servicios antes de tomar una decisión.'
    },
    {
      question: '¿El gimnasio tiene servicios de nutrición?',
      answer:
        'Sí, disponemos de consultas nutricionales personalizadas para ayudarte a mejorar tu rendimiento y salud general.'
    },
    {
      question: '¿Tienen servicio de estacionamiento?',
      answer:
        'Sí, contamos con un estacionamiento exclusivo para miembros en nuestras instalaciones.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto my-8 px-4">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-6 text-center font-bignoodle">
        Preguntas Frecuentes
      </h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            <button
              className="w-full text-left px-6 py-4 text-lg font-semibold text-gray-800 bg-gradient-to-r from-blue-400 to-blue-500 hover:bg-gradient-to-l focus:outline-none transition-colors duration-200"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-center justify-between">
                <span>{faq.question}</span>
                <span>
                  {activeIndex === index ? (
                    <AiOutlineMinus className="text-white text-xl" />
                  ) : (
                    <AiOutlinePlus className="text-white text-xl" />
                  )}
                </span>
              </div>
            </button>
            {activeIndex === index && (
              <div className="px-6 py-4 text-gray-600 bg-gray-50">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
