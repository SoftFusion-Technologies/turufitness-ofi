import React from 'react';

const ChallengesSection = () => {
  const challenges = [
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
    }
  ];

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

        {/* Cards de Desafíos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 font-bignoodle">
          {challenges.map((challenge, index) => (
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

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-blue-800 opacity-0 group-hover:opacity-40 transition-all duration-300 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
