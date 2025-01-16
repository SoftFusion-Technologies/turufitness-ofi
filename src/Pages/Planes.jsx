import React from 'react';

const Planes = () => {
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
    <section className="py-12 bg-lightGray">
      <div className="container mx-auto px-6">
        <h2 className="font-bignoodle text-6xl font-bold text-center text-dark mb-10">
          Nuestros Planes
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between w-full md:w-1/3 ${plan.bgColor} ${plan.textColor} p-8 rounded-lg shadow-lg hover:scale-105 transition-transform`}
            >
              <div>
                <h3 className="text-2xl font-semibold text-center mb-4">
                  {plan.title}
                </h3>
                <p className="text-lg text-center mb-6">{plan.description}</p>
                <h4 className="text-3xl font-bold text-center mb-6">
                  {plan.price}
                </h4>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="text-white bg-dark rounded-full w-6 h-6 flex items-center justify-center">
                        ✔
                      </span>
                      <p>{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <button className="bg-white text-dark py-3 px-8 rounded-full hover:bg-lightGray hover:text-dark transition-colors">
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
