import React, { useState, useEffect, useRef } from "react";
import chatDobleSVG from "../Images/SVG/chatDouble.svg";
import instagramSVG from "../Images/SVG/instagram.svg";
import whatsappSVG from "../Images/SVG/whatsapp.svg";
import locationSVG from "../Images/SVG/location.svg";
import Modal from "../Components/Modal";

const Contact = ({ open, setIsOpen }) => {
  const [isModalContactOpen, setIsModalContactOpen] = useState(open);
  const inputName = useRef(null);

  useEffect(() => {
    setIsModalContactOpen(open);
    if (open) {
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

  const contactInfo = [
    {
      icon: whatsappSVG,
      text: "(3863)-564651",
      link: "https://api.whatsapp.com/send/?phone=543863564651&text=Hola%21+vengo+desde+el+sitio+oficial%21%21&type=phone_number&app_absent=0",
    },
    {
      icon: instagramSVG,
      text: "@turufitnees",
      link: "https://www.instagram.com/turufitnees/",
    }
  ];

  const formFields = [
    {
      label: "Nombre completo:",
      type: "text",
      name: "name",
      placeholder: "Ej: Juan Pérez",
    },
    {
      label: "Teléfono:",
      type: "number",
      name: "phone",
      placeholder: "Ej: 3814567890",
    },
    {
      label: "Email:",
      type: "email",
      name: "email",
      placeholder: "Ej: turufitness@gmail.com",
    },
    {
      label: "Comentarios:",
      type: "textarea",
      name: "comments",
      placeholder: "Cuéntanos cómo podemos ayudarte",
    },
  ];

  return (
    <div>
      <Modal
        isOpen={isModalContactOpen}
        title="Encuentra todas las formas de contactarnos aquí 💪😀"
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        svgIcon={chatDobleSVG}
        colorIcon="blue"
      >
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 p-4 md:p-0">
          {/* Columna izquierda - Información de contacto */}
          <div className="w-full md:w-1/3 bg-black text-white p-6 md:p-8 rounded-2xl shadow-2xl border-2 border-dark hover:border-blue-400 transition-all duration-300">
            <div className="space-y-6 md:space-y-8">
              <div>
                <h2 className="font-bignoodle text-2xl md:text-3xl mb-4 md:mb-6 transform hover:scale-105 transition-transform duration-300">
                  Información de Contacto
                </h2>
              </div>

              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-3 md:gap-4">
                  <img
                    src={info.icon}
                    alt="Icono"
                    className="size-6 md:size-8"
                  />
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors duration-300 text-base md:text-lg"
                  >
                    {info.text}
                  </a>
                </div>
              ))}

              <div className="space-y-6 md:space-y-8">
                <div>
                  <h2 className="font-bignoodle text-2xl md:text-3xl mb-4 md:mb-6 transform hover:scale-105 transition-transform duration-300">
                    Ubicación
                  </h2>
                </div>

                {/* Dirección */}
                <div className="flex items-center gap-3 md:gap-4">
                  <img
                    src={locationSVG}
                    alt="Icono"
                    className="size-6 md:size-8"
                  />
                  <a
                    href="https://maps.app.goo.gl/Tu1Wr5XMeXHQnP1GA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors duration-300 text-base md:text-lg"
                  >
                    25 de Mayo, Simoca, Tucumán
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha - Formulario */}
          <div className="w-full md:w-2/3 mt-6 md:mt-0">
            <p className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8">
              O bien completa el formulario y nos pondremos en contacto contigo.
            </p>
            <div className="space-y-6 md:space-y-8">
              {formFields.map((field, index) => (
                <div key={index}>
                  <label className="block text-gray-700 font-semibold mb-2 md:mb-3 text-base md:text-lg">
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full p-3 md:p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 h-32 md:h-40"
                    />
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full p-3 md:p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      ref={field.name === "name" ? inputName : null}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Contact;
