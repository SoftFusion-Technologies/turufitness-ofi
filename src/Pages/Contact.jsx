import React, { useState, useEffect } from "react";
import Modal from "../Components/Modal";

const Contact = ({ open, setIsOpen }) => {
  const [isModalContactOpen, setIsModalContactOpen] = useState(open);
  useEffect(() => {
    setIsModalContactOpen(open);
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                  <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                </svg>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path d="M16.5 7.5l0 .01" />
                </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 2c4.97 0 9 4.03 9 9s-9 13 -9 13s-9 -8.03 -9 -13s4.03 -9 9 -9z" />
                    <path d="M12 11a2 2 0 1 0 0 -4a2 2 0 0 0 0 4z" />
                  </svg>
                  <a
                    href="https://www.google.com/maps/place/Espa%C3%B1a+1732,+T4146+Concepci%C3%B3n,+Tucum%C3%A1n/@-27.3458572,-65.5989922,17z/data=!3m1!4b1!4m6!3m5!1s0x9423cfd9beacde8f:0xcd929e71cf7bd11!8m2!3d-27.345862!4d-65.5964173!16s%2Fg%2F11jk25nd8b?entry=ttu"
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
