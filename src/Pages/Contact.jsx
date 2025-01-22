import React, { useState, useEffect, useRef } from "react";
import chatDobleSVG from "../Images/SVG/chatDouble.svg";
import instagramSVG from "../Images/SVG/instagram.svg";
import whatsappSVG from '../Images/SVG/whatsapp.svg';
import locationSVG from '../Images/SVG/location.svg';
import Modal from "../Components/Modal";

const Contact = ({ open, setIsOpen }) => {
  const [isModalContactOpen, setIsModalContactOpen] = useState(open);
  const inputName = useRef(null);
  useEffect(() => {
    setIsModalContactOpen(open);
    if (open){
      setTimeout(() => {
        inputName.current.focus();
      }, 100);
    }
  }, [open]);

  const handleCancel = () => {
    clearForm();
    setIsModalContactOpen(false);
    setIsOpen(false);
  };

  const handleConfirm = () => {
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.comments
    ) {
      alert("Por favor completa todos los campos");
      return;
    }
    alert("Formulario enviado");
    setTimeout(() => {
      clearForm();
      setIsModalContactOpen(false);
      setIsOpen(false);
    }, 200);
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const clearForm = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      comments: "",
    });
  };

  return (
    <div>
      <Modal
        isOpen={isModalContactOpen}
        title="Encuentra todas las formas de contactarnos aquí 💪😀"
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        svgIcon={chatDobleSVG}
      >
        <div className="flex flex-col md:flex-row gap-8">
          {/* Columna izquierda - Información de contacto */}
          <div className="w-full md:w-1/3 bg-black text-white p-6 rounded-lg">
            <div className="space-y-6">
              <div>
                <h2 className="font-bignoodle text-2xl mb-4">
                  Información de Contacto
                </h2>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-3">
                <img src={whatsappSVG} alt="Icono" className="size-6" />
                <a
                  href="https://api.whatsapp.com/send/?phone=543863564651&text=Hola%21+vengo+desde+el+sitio+oficial%21%21&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  (3863)-564651
                </a>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-3">
              <img src={instagramSVG} alt="Icono" className="size-6" />
                <a
                  href="https://www.instagram.com/turufitnees/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  @turufitnees
                </a>
              </div>

              {/* Información de Ubicación */}
              <div className="space-y-6">
                <div>
                  <h2 className="font-bignoodle text-2xl mb-4">Ubicación</h2>
                </div>

                {/* Dirección */}
                <div className="flex items-center gap-3">
                  <img src={locationSVG} alt="Icono" className="size-6" />
                  <a
                    href="https://maps.app.goo.gl/Tu1Wr5XMeXHQnP1GA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-colors"
                  >
                    25 de Mayo, Simoca, Tucumán
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha - Formulario */}
          <div className="w-full md:w-2/3">
            <p className="text-lg text-gray-600 mb-6">
              O bien completa el formulario y nos pondremos en contacto contigo.
            </p>
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Nombre completo:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ej: Juan Pérez"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ref={inputName}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Teléfono:
                </label>
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Ej: 3814567890"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ej: turufitness@gmail.com"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Comentarios:
                </label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  placeholder="Cuéntanos cómo podemos ayudarte"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Contact;
