import React, {useContext} from 'react';
import { ContactContext } from '../context/ContactContext'; 

const Planes = () => {
    const { setIsContactOpen } = useContext(ContactContext);
    
  const plans = [
    {
      title: 'Básico',
      price: '$20/mes',
      description:
        'Acceso al gimnasio y máquinas básicas en horarios limitados.',
      features: ['Acceso básico', 'Horarios limitados', '1 invitación al mes'],
      bgColor: 'bg-primary',
      textColor: 'text-white'
    },
    {
      title: 'Mediano',
      price: '$40/mes',
      description:
        'Ideal para entrenamientos regulares. Incluye acceso completo y clases grupales.',
      features: ['Acceso completo', 'Clases grupales', '2 invitaciones al mes'],
      bgColor: 'bg-purple',
      textColor: 'text-white'
    },
    {
      title: 'Premium',
      price: '$60/mes',
      description: 'Acceso total, entrenador personal y beneficios exclusivos.',
      features: [
        'Acceso total',
        'Entrenador personal',
        '5 invitaciones al mes',
        'Acceso a áreas exclusivas'
      ],
      bgColor: 'bg-secondary',
      textColor: 'text-white'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-800 bg-opacity-90 animate-gradient">
      <div className="container mx-auto px-6">
        <h2 className="font-bignoodle text-7xl font-bold text-center text-white mb-12 transform hover:scale-105 transition-transform duration-300">
          Nuestros Planes
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between w-full md:w-1/3 ${plan.bgColor} ${plan.textColor} p-10 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 hover:shadow-3xl`}
            >
              <div>
                <h3 className="text-3xl font-bold text-center mb-6 transform hover:scale-110 transition-transform duration-300">
                  {plan.title}
                </h3>
                <p className="text-xl text-center mb-8 text-opacity-80">
                  {plan.description}
                </p>
                <h4 className="text-4xl font-extrabold text-center mb-8">
                  {plan.price}
                </h4>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <span className="text-white bg-dark rounded-full w-8 h-8 flex items-center justify-center shadow-md">
                        ✔
                      </span>
                      <p className="text-lg">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <button className="bg-white text-dark font-semibold py-3 px-10 rounded-full hover:bg-blue-50 hover:text-blue-700 transition-colors duration-300 transform hover:scale-110 shadow-lg"
                  onClick={() => setIsContactOpen(true)}>
                  ¡Unirme Ahora!
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Planes;
