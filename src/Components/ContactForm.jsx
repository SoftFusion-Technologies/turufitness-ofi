import React, { useState } from 'react';
import '../Styles/Contact.css';
import backgroundImage from '../assets/img1bg.webp'; 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulario enviado');
    clearForm();
  };

  const clearForm = () => {
    setFormData({
      name: '',
      phone: ''
    });
  }

  return (
    <section className='contact section' id='contact' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='contact_container max-w-4xl mx-auto p-6'>
        <div className='contact-section-title text-center'>
          <h1 className='text-4xl font-bold text-gray-800 mb-2'>Contáctanos</h1>
          <p className='text-xl text-gray-600'>Estamos aquí para ayudarte. Completa el formulario y nos pondremos en contacto contigo.</p>
        </div>

        <form onSubmit={handleSubmit} className='mt-8 space-y-6'>
          <div>
            <label className='block text-gray-700 font-medium'>Nombre Completo</label>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>

          <div>
            <label className='block text-gray-700 font-medium'>Teléfono</label>
            <input
              type='tel'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              className='w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>

          <div className='flex justify-center'>
            <button
              type='submit'
              className='w-full lg:w-1/2 px-6 py-3 mt-4 text-lg text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
