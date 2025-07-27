/*
 * Programador: Benjamin Orellana
 * Fecha Actualización: 21 / 06 / 2025
 * Versión: 1.1
 *
 * Descripción:
 * Este archivo (LoginForm.jsx) es el formulario exclusivo de login de usuarios (email + password),
 * autenticado contra la base de datos y gestionado con JWT.
 *
 * Tema: Renderización - Login
 * Capa: Frontend
 */

import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Alerta from '../Error';
import { useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';
import '../../Styles/login.css';
import { useAuth } from '../../AuthContext';
import { motion } from 'framer-motion';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { StarsCanvas2 } from '../canvas';

Modal.setAppElement('#root');

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    const element = document.getElementById('login');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);

      axios
        .post('http://localhost:8080/login', {
          email: values.email,
          password: values.password
        })
        .then((res) => {
          setLoading(false);
          if (res.data.message === 'Success') {
            login(
              res.data.token,
              res.data.id,
              res.data.nombre,
              res.data.email,
              res.data.rol,
              res.data.local_id
            );
            navigate('/dashboard');
          } else {
            setModalMessage('Usuario o contraseña incorrectos');
            setIsModalOpen(true);
          }
        })
        .catch((err) => {
          setLoading(false);
          console.error(err);
          setModalMessage('Error al conectar con el servidor');
          setIsModalOpen(true);
        });
    }
  };

  return (
    <div className="h-screen loginbg font-bignoodle w-full flex items-center justify-center bg-cover bg-center relative">
      <StarsCanvas2></StarsCanvas2>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        whileHover={{
          scale: 1.01,
          boxShadow: '0 8px 30px rgba(59,130,246,0.3)'
        }}
        className="bg-white shadow-2xl rounded-2xl p-8 w-[95%] max-w-md mx-auto"
      >
        <h1 className="text-5xl titulo uppercase font-bold text-center text-blue-700 mb-2">
          Bienvenido
        </h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center text-sm text-gray-500 mb-6"
        >
          Iniciá sesión para continuar
        </motion.p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Correo Electrónico */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Correo Electrónico
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              id="email"
              type="email"
              name="email"
              placeholder="ejemplo@correo.com"
              className="w-full mt-1 p-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black0 focus:border-black0 transition-all"
              onChange={handleInput}
            />
            {errors.email && <Alerta>{errors.email}</Alerta>}
          </div>

          {/* Contraseña */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>
            <div className="relative">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                id="password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="••••••••"
                className="w-full mt-1 p-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black0 focus:border-black0 transition-all pr-10"
                onChange={handleInput}
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-black0"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && <Alerta>{errors.password}</Alerta>}
          </div>

          {/* Botón de envío */}
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="bg-black0 text-black w-full py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-black0 transition-all"
            >
              {loading ? 'Cargando...' : 'Iniciar Sesión'}
            </motion.button>
          </div>
        </form>

        <p className="mt-6 text-center text-xs text-gray-400 italic">
          "El esfuerzo de hoy es el éxito de mañana"
        </p>
      </motion.div>

      {/* Modal de error */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Error Modal"
        className="fixed inset-0 flex items-center justify-center z-50"
        overlayClassName="fixed inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-300 ease-in-out z-40"
      >
        <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl border-l-4 border-[#ff3b80] animate-fadeIn">
          <div className="flex items-center gap-4 mb-5">
            {/* Ícono decorativo */}
            <div className="bg-[#ff3b80]/10 p-3 rounded-full">
              <svg
                className="w-7 h-7 text-[#ff3b80]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0v-4.5zM10 14a.875.875 0 110-1.75.875.875 0 010 1.75z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#ff3b80]">¡Atención!</h2>
              <p className="text-gray-700 mt-1 leading-snug">{modalMessage}</p>
            </div>
          </div>

          <div className="text-end">
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-2 bg-[#ff3b80] hover:bg-[#e02b6c] text-white font-semibold py-2 px-6 rounded-lg transition-all"
            >
              Cerrar
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LoginForm;
