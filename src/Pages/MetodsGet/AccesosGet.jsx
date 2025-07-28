import { useEffect, useState } from 'react';
import {
  FaRegClock,
  FaUser,
  FaIdCard,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';
import { format } from 'date-fns';
import es from 'date-fns/locale/es';
import ParticlesBackground from '../../Components/ParticlesBackground';
import { motion, AnimatePresence } from 'framer-motion';
import BackButton from '../../Components/ BackButton';

const LIMITE_POR_PAGINA = 20;

export default function AccesosGet() {
  const [accesos, setAccesos] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [fecha, setFecha] = useState('');
  const [pagina, setPagina] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [detalle, setDetalle] = useState(null);

  const fetchAccesos = async () => {
    try {
      let url = `http://localhost:8080/accesos?limit=${LIMITE_POR_PAGINA}&offset=${
        (pagina - 1) * LIMITE_POR_PAGINA
      }`;
      if (filtro) url += `&q=${filtro}`;
      if (fecha) url += `&fecha=${fecha}`;

      const res = await fetch(url);
      const { accesos, totalPages } = await res.json();
      setAccesos(accesos);
      setTotalPaginas(totalPages);
    } catch (error) {
      console.error('Error al obtener accesos:', error);
    }
  };

  useEffect(() => {
    fetchAccesos();
  }, [filtro, fecha, pagina]);

  const cambiarPagina = (nueva) => {
    if (nueva >= 1 && nueva <= totalPaginas) {
      setPagina(nueva);
    }
  };

  const cargarDetalle = async (id) => {
    try {
      const res = await fetch(`http://localhost:8080/accesos/${id}`);
      const data = await res.json();
      setDetalle(data);
    } catch (err) {
      console.error('Error al cargar detalle:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-10 px-4">
      <ParticlesBackground />
      <BackButton></BackButton>
      <div className="mt-10 max-w-5xl mx-auto text-white">
        <h1 className="uppercase text-3xl font-bold text-center mb-6">
          📋 Historial de Accesos
        </h1>

        {/* Filtros */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Buscar por DNI o Nombre"
            value={filtro}
            onChange={(e) => {
              setPagina(1);
              setFiltro(e.target.value);
            }}
            className="flex-1 px-4 py-2 rounded-lg text-black"
          />
          <input
            type="date"
            value={fecha}
            onChange={(e) => {
              setPagina(1);
              setFecha(e.target.value);
            }}
            className="px-4 py-2 rounded-lg text-black"
          />
        </div>

        {/* Lista */}
        <div className="grid gap-4 mb-6">
          {accesos.length === 0 ? (
            <p className="text-center text-gray-300">
              No hay accesos registrados.
            </p>
          ) : (
            accesos.map((acceso) => (
              <div
                key={acceso.id}
                onClick={() => cargarDetalle(acceso.id)}
                className="bg-white/10 p-4 rounded-xl shadow-md backdrop-blur-lg flex flex-col md:flex-row justify-between items-start md:items-center"
              >
                <div>
                  <p className="font-bold text-lg text-emerald-300 flex items-center gap-2">
                    <FaUser /> {acceso.cliente?.nombre || 'Sin nombre'}
                  </p>
                  <p className="text-sm text-gray-300 flex items-center gap-2">
                    <FaIdCard /> DNI: {acceso.cliente?.dni || '---'}
                  </p>
                  <p className="text-sm text-gray-400 mt-1 italic">
                    {acceso.tipo_acceso}
                  </p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-sm text-gray-200 flex items-center justify-end gap-1">
                    <FaRegClock />
                    {format(
                      new Date(acceso.fecha),
                      "dd 'de' MMMM yyyy, HH:mm",
                      {
                        locale: es
                      }
                    )}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Paginación */}
        {totalPaginas > 1 && (
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={() => cambiarPagina(pagina - 1)}
              disabled={pagina === 1}
              className="px-3 py-1 rounded bg-slate-700 text-white disabled:opacity-40"
            >
              <FaChevronLeft />
            </button>

            {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => cambiarPagina(p)}
                className={`px-3 py-1 rounded ${
                  p === pagina
                    ? 'bg-emerald-500 text-white'
                    : 'bg-slate-600 text-gray-300 hover:bg-slate-500'
                }`}
              >
                {p}
              </button>
            ))}

            <button
              onClick={() => cambiarPagina(pagina + 1)}
              disabled={pagina === totalPaginas}
              className="px-3 py-1 rounded bg-slate-700 text-white disabled:opacity-40"
            >
              <FaChevronRight />
            </button>
          </div>
        )}

        {/* Modal */}
        <AnimatePresence>
          {detalle && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl rounded-3xl p-8 w-full max-w-3xl border border-white/10 backdrop-blur-xl overflow-hidden"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.6, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              >
                {/* Cierre */}
                <button
                  onClick={() => setDetalle(null)}
                  className="absolute top-4 right-4 text-white hover:text-emerald-400 text-xl transition"
                >
                  ✖
                </button>

                {/* Encabezado */}
                <h2 className="uppercase text-3xl font-extrabold text-white mb-6 text-center tracking-widest animate-pulse">
                  🔍 Detalles del Acceso
                </h2>

                {/* Sección info */}
                <div className="grid md:grid-cols-2 gap-6 text-sm sm:text-base">
                  <div className="space-y-3">
                    <p>
                      <span className="font-semibold text-emerald-300">
                        👤 Nombre:
                      </span>{' '}
                      {detalle.cliente.nombre}
                    </p>
                    <p>
                      <span className="font-semibold text-emerald-300">
                        🆔 DNI:
                      </span>{' '}
                      {detalle.cliente.dni}
                    </p>
                    <p>
                      <span className="font-semibold text-emerald-300">
                        📱 Teléfono:
                      </span>{' '}
                      {detalle.cliente.telefono}
                    </p>
                    <p>
                      <span className="font-semibold text-emerald-300">
                        📧 Email:
                      </span>{' '}
                      {detalle.cliente.email}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <p>
                      <span className="font-semibold text-emerald-300">
                        💳 Membresía:
                      </span>{' '}
                      <span className="bg-emerald-900/50 px-3 py-1 rounded-md text-xs font-semibold tracking-wide uppercase border border-emerald-400/30 shadow">
                        {detalle.cliente.tipo_membresia}
                      </span>
                    </p>
                    <p>
                      <span className="font-semibold text-emerald-300">
                        📆 Vencimiento:
                      </span>{' '}
                      {new Date(
                        detalle.cliente.fecha_vencimiento
                      ).toLocaleDateString('es-AR')}
                    </p>
                    <p>
                      <span className="font-semibold text-emerald-300">
                        🎟️ Pases usados:
                      </span>{' '}
                      {detalle.cliente.pases_usados}
                    </p>
                    <p>
                      <span className="font-semibold text-emerald-300">
                        💰 Monto:
                      </span>{' '}
                      $
                      {parseFloat(detalle.cliente.monto).toLocaleString(
                        'es-AR'
                      )}
                    </p>
                    <p>
                      <span className="font-semibold text-emerald-300">
                        🕒 Fecha/hora:
                      </span>{' '}
                      {new Date(detalle.cliente.fecha_hora).toLocaleString(
                        'es-AR'
                      )}
                    </p>
                    <p>
                      <span className="font-semibold text-emerald-300">
                        📌 Estado:
                      </span>{' '}
                      <span
                        className={`inline-block px-2 py-1 rounded-md text-xs font-semibold ${
                          detalle.cliente.estado === 'activo'
                            ? 'bg-green-600/20 text-green-400 border border-green-500/40'
                            : 'bg-red-600/20 text-red-400 border border-red-500/40'
                        }`}
                      >
                        {detalle.cliente.estado}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Brillo animado */}
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-emerald-400/20 blur-3xl rounded-full animate-ping-slow pointer-events-none"></div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
