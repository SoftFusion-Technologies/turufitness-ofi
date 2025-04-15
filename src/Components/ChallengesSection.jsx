import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChallengesSection = () => {
  const allChallenges = [
    // Desafíos base
    {
      name: 'Reto 30 días de abdominales',
      description: 'Realiza 100 abdominales por día durante 30 días.',
      reward: 'Descuento en tu próxima suscripción'
    },
    {
      name: 'Maratón de cardio',
      description: 'Corre 50 km en 30 días.',
      reward: 'Una camiseta exclusiva del gimnasio'
    },
    {
      name: 'Reto de flexiones',
      description: 'Haz 100 flexiones diarias durante 30 días.',
      reward: 'Acceso a una clase gratuita de HIIT'
    },
    // Funcional
    {
      name: 'Circuito Funcional Intensivo',
      description: 'Completa un circuito funcional diario durante una semana.',
      reward: 'Botella deportiva gratis'
    },
    {
      name: '30 días Funcional Power',
      description: 'Entrena 5 días por semana con clases funcionales.',
      reward: 'Descuento en membresía funcional'
    },
    {
      name: 'Reto Funcional Core',
      description: 'Enfócate en core 3 veces por semana por un mes.',
      reward: 'Acceso a una clase especial de movilidad'
    },
    // Crossfit
    {
      name: 'CrossFit Endurance',
      description: 'Realiza 3 sesiones semanales de WODs durante 4 semanas.',
      reward: 'Mancuernas personalizadas'
    },
    {
      name: 'CrossFit Hero Week',
      description: 'Supera 5 Hero WODs en una semana.',
      reward: 'Remera edición especial'
    },
    {
      name: 'CrossFit Total',
      description: 'Mejora tus RM en squat, press y deadlift en 30 días.',
      reward: 'Acceso gratuito a un taller de técnica'
    }
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [fadeKey, setFadeKey] = useState(0); // Para forzar re-render con AnimatePresence

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 3) % allChallenges.length);
      setFadeKey((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [allChallenges.length]);

  const visibleChallenges = allChallenges.slice(startIndex, startIndex + 3);
  const challengesToShow =
    visibleChallenges.length < 3
      ? [
          ...visibleChallenges,
          ...allChallenges.slice(0, 3 - visibleChallenges.length)
        ]
      : visibleChallenges;

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="font-bignoodle text-4xl font-bold mb-8 text-white">
          Desafíos Mensuales
        </h2>
        <p className="text-lg mb-12 font-messina">
          ¡Motívate y únete a nuestros desafíos mensuales! Mejora tu rendimiento
          y gana premios exclusivos.
        </p>

        {/* Animación fade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={fadeKey}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 font-bignoodle"
          >
            {challengesToShow.map((challenge, index) => (
              <div
                key={index}
                className="relative bg-white p-6 rounded-lg shadow-xl transition-all hover:scale-105 transform hover:shadow-2xl group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:h-2 transition-all duration-300"></div>
                <div className="text-center mb-6">
                  <h3 className="text-4xl font-semibold text-blue-800 group-hover:text-blue-600 transition-colors duration-300">
                    {challenge.name}
                  </h3>
                  <p className="text-gray-600 mt-2">{challenge.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-blue-700 to-blue-500 text-white py-3 text-center rounded-b-lg">
                  <p className="font-semibold">{challenge.reward}</p>
                </div>
                <div className="absolute inset-0 bg-blue-800 opacity-0 group-hover:opacity-40 transition-all duration-300 rounded-lg"></div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ChallengesSection;
