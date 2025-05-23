// src/components/Testimonials.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Importá tus videos acá
import testimonialGabriela from '../Videos/compressed_testimonialGabriela.mp4';

const testimonialsData = [
  {
    name: 'Gabriela',
    description:
      'Conocé la historia de superación de Gabriela y cómo nuestras clases transformaron su vida.',
    video: testimonialGabriela
  }
  // Agregá más testimonios aquí en el futuro
  // {
  //   name: 'Carlos',
  //   description: 'Carlos logró cambiar su vida en 3 meses de entrenamiento.',
  //   video: testimonialCarlos,
  // },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ easing: 'ease-in-out', once: true });
  }, []);

  return (
    <section className="bg-white py-20 px-4" id="testimonios">
      <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
        <h2 className="uppercase font-bignoodle text-4xl sm:text-6xl text-gray-900 mb-6">
          Testimonios
        </h2>
        <p className="text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
          Historias reales de personas que transformaron su vida con nosotros.
        </p>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 justify-center">
          {testimonialsData.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl p-4 shadow-lg flex flex-col items-center transition-transform hover:scale-[1.02] duration-300"
              data-aos="zoom-in"
            >
              <div className="w-[270px] h-[480px] rounded-xl overflow-hidden mb-4">
                <video
                  controls
                  className="w-full h-full object-cover rounded-xl"
                  poster="" // opcional: miniatura
                >
                  <source src={testimonial.video} type="video/mp4" />
                  Tu navegador no soporta el video.
                </video>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-gray-600 text-sm mt-2 px-4">
                {testimonial.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
