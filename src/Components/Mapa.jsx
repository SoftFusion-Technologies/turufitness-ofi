import React from 'react';

export default function Mapa() {
  return (
    <div
      className="flex flex-col md:flex-row lg:flex-row justify-center items-center mx-auto w-full transition-opacity duration-500"
      data-aos="fade-up"
      id="ubicacion"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4248.555225115029!2d-65.3631369!3d-27.2624444!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9423b1d61b1ec69b%3A0x3fe2abcc6027fec4!2sTuru%20Fitness%20y%20musculaci%C3%B3n!5e1!3m2!1ses!2sar!4v1737509603533!5m2!1ses!2sar"
        width="100%"
        height="450"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
