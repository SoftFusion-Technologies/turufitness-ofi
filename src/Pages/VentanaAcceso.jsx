import { useState } from 'react';
import {
  FaFingerprint,
  FaExclamationTriangle,
  FaUserFriends,
  FaCheckCircle,
  FaUser,
  FaIdCard,
  FaWallet,
  FaCalendarAlt,
  FaTicketAlt,
  FaCheck
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import SoftLogo from '../Images/softLogo.png';
import ParticlesBackground from '../Components/ParticlesBackground';

export default function VentanaAcceso() {
  const [dni, setDni] = useState('');
  const [respuesta, setRespuesta] = useState(null);
  const [estado, setEstado] = useState('idle'); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEstado('loading');
    setRespuesta(null);

    try {
      const res = await fetch('http://localhost:8080/accesos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dni })
      });

      const data = await res.json();

      if (res.ok) {
        setEstado('success');
        setRespuesta(data);
      } else {
        setEstado('error');
        setRespuesta({ mensaje: data.mensaje });
      }

      setTimeout(() => {
        setEstado('idle');
        setRespuesta(null);
        setDni('');
      }, 4500);
    } catch (err) {
      setEstado('error');
      setRespuesta({ mensaje: 'Error de conexión' });
      setTimeout(() => {
        setEstado('idle');
        setRespuesta(null);
        setDni('');
      }, 4500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-900 flex items-center justify-center px-4 relative">
      <ParticlesBackground></ParticlesBackground>
      <div className="bg-white/10 backdrop-blur-xl shadow-2xl p-8 rounded-3xl max-w-md w-full text-white relative z-10">
        {/* Logo */}
        <motion.h1
          className="text-2xl md:text-3xl mb-5 font-extrabold flex items-center gap-3 drop-shadow-xl text-white uppercase"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <FaUserFriends className="text-pink-700 drop-shadow-lg" />
          SoftFusion
        </motion.h1>

        {/* Título */}
        <motion.h1
          className="text-3xl font-extrabold text-center mb-4 flex items-center justify-center gap-3 text-green-300 drop-shadow-md"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <FaFingerprint className="text-green-400 text-4xl" />
          Registro de Acceso
        </motion.h1>

        {/* Fecha actual */}
        <div className="text-center text-sm text-gray-300 mb-6">
          {new Date().toLocaleString('es-AR', {
            dateStyle: 'medium',
            timeStyle: 'short'
          })}
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Ingresá tu DNI"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-white/60 text-white text-center text-lg shadow-inner"
          />
          <button
            type="submit"
            disabled={estado === 'loading'}
            className="w-full bg-green-500 hover:bg-green-600 transition-colors duration-300 py-3 rounded-xl font-semibold text-lg shadow-[0_0_15px_rgba(16,255,128,0.4)] active:scale-95"
          >
            {estado === 'loading' ? 'Validando...' : 'Registrar Ingreso'}
          </button>
        </form>

        {/* Feedback */}
        <AnimatePresence>
          {respuesta && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className={`relative p-8 rounded-3xl shadow-2xl border-2 w-full max-w-2xl mx-auto transition-all duration-500 overflow-hidden ${
                  estado === 'success'
                    ? 'bg-green-50 border-green-300 text-green-900'
                    : 'bg-red-50 border-red-300 text-red-900'
                }`}
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              >
                {estado === 'success' && (
                  <motion.div
                    className="absolute -top-16 left-1/2 -translate-x-1/2 z-50"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="relative w-32 h-32">
                      <div className="absolute inset-0 border-4 border-green-300 rounded-full animate-spin-slow opacity-30 shadow-md" />
                      <div className="absolute inset-3 flex items-center justify-center rounded-full bg-green-500 text-white text-4xl shadow-xl">
                        <FaCheckCircle />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Contenido del mensaje */}
                <div className="mt-24">
                  {estado === 'success' ? (
                    <>
                      <div className="text-center text-2xl font-bold mb-6">
                        {respuesta.mensaje}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base leading-relaxed">
                        <div className="space-y-3">
                          <p>
                            <span className="font-semibold text-green-700">
                              👤 Nombre:
                            </span>{' '}
                            {respuesta.cliente.nombre}
                          </p>
                          <p>
                            <span className="font-semibold text-green-700">
                              🆔 DNI:
                            </span>{' '}
                            {respuesta.cliente.dni}
                          </p>
                          <p>
                            <span className="font-semibold text-green-700">
                              💳 Membresía:
                            </span>{' '}
                            <span className="inline-block bg-green-200 text-green-900 px-2 py-1 rounded-md text-xs font-semibold uppercase shadow-sm">
                              {respuesta.cliente.tipo_membresia}
                            </span>
                          </p>
                        </div>

                        <div className="space-y-3">
                          <p>
                            <span className="font-semibold text-green-700">
                              📆 Vencimiento:
                            </span>{' '}
                            {new Date(
                              respuesta.cliente.fecha_vencimiento
                            ).toLocaleDateString('es-AR')}
                          </p>
                          <p>
                            <span className="font-semibold text-green-700">
                              🎟️ Pases usados:
                            </span>{' '}
                            {respuesta.cliente.pases_usados}
                          </p>
                          <p>
                            <span className="font-semibold text-green-700">
                              💰 Monto abonado:
                            </span>{' '}
                            $
                            {parseFloat(respuesta.cliente.monto).toLocaleString(
                              'es-AR'
                            )}
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-3 text-lg font-semibold">
                      <FaExclamationTriangle className="text-red-500 text-3xl" />
                      {respuesta.mensaje}
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-8 text-center text-xs text-gray-500 italic tracking-wider">
          © {new Date().getFullYear()} - Desarrollado con 💻 por{' '}
          <span className="text-green-400 font-bold">Soft Fusion</span>
        </div>
      </div>
    </div>
  );
}
