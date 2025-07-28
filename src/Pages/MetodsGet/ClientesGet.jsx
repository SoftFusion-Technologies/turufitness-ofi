import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserFriends, FaPlus } from 'react-icons/fa';
import Modal from 'react-modal';
import AdminActions from '../../Components/AdminActions';
import axios from 'axios';
import Info from '../../Components/Info';
import formatearFechaARG from '../../Components/formatearFechaARG';
import ParticlesBackground from '../../Components/ParticlesBackground';
export default function ClientesGet() {
  const [clientes, setClientes] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    dni: '',
    nombre: '',
    telefono: '',
    email: '',
    monto: '',
    porcentaje_recargo: '',
    fecha_inscripcion: '',
    fecha_vencimiento: '',
    ultima_notificacion: '',
    fecha_alta: '',
    estado: '',
    tipo_membresia: '',
    pagado: '',
    origen: '',
    notificacion_whatsapp: true,
    notas: '',
    plan_id: ''
  });

  const [search, setSearch] = useState('');
  const [pagado, setPagado] = useState('');
  const [estado, setEstado] = useState('');
  const [fechaInscripcion, setFechaInscripcion] = useState('');
  const [fechaVencimiento, setFechaVencimiento] = useState('');
  const [ultimaNotificacion, setUltimaNotificacion] = useState('');
  const [planes, setPlanes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/planes-membresia') // o la ruta que uses
      .then((res) => res.json())
      .then((data) => setPlanes(data))
      .catch((err) => console.error('Error al cargar planes:', err));
  }, []);
  const openModal = (cliente = null) => {
    if (cliente) {
      setEditId(cliente.id);
      setFormData({
        dni: cliente.dni || '',
        nombre: cliente.nombre || '',
        telefono: cliente.telefono || '',
        email: cliente.email || '',
        monto: cliente.monto || '',
        fecha_inscripcion: cliente.fecha_inscripcion || '',
        fecha_vencimiento: cliente.fecha_vencimiento || '',
        ultima_notificacion: cliente.ultima_notificacion || '',
        estado: cliente.estado || 'activo',
        pagado: cliente.pagado || 'NO',
        tipo_membresia: cliente.tipo_membresia || 'mensual',
        notas: cliente.notas || '',
        origen: cliente.origen || '',
        notificacion_whatsapp: cliente.notificacion_whatsapp ?? true,
        plan_id: cliente.plan_id || null
      });
    } else {
      setEditId(null);
      setFormData({
        dni: '',
        nombre: '',
        telefono: '',
        email: '',
        monto: '',
        fecha_inscripcion: '',
        fecha_vencimiento: '',
        ultima_notificacion: '',
        estado: 'activo',
        pagado: 'NO',
        tipo_membresia: 'mensual',
        notas: '',
        origen: '',
        notificacion_whatsapp: true,
        plan_id: null
      });
    }
    setModalOpen(true);
  };

  const fetchClientes = async () => {
    try {
      const res = await axios.get('http://localhost:8080/clientes');
      setClientes(res.data);
    } catch (err) {
      console.error('Error al obtener clientes:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`http://localhost:8080/clientes/${editId}`, formData);
      } else {
        await axios.post('http://localhost:8080/clientes', formData);
      }
      setModalOpen(false);
      fetchClientes();
    } catch (err) {
      console.error('Error al guardar cliente:', err);
    }
  };

  const handleDelete = async (id) => {
    if (confirm('¿Seguro que deseas eliminar este cliente?')) {
      try {
        await axios.delete(`http://localhost:8080/clientes/${id}`);
        fetchClientes();
      } catch (err) {
        console.error('Error al eliminar cliente:', err);
      }
    }
  };

  useEffect(() => {
    fetchClientes();
  }, []);

  const clientesFiltrados = clientes.filter((c) => {
    const searchMatch =
      search === '' ||
      c.nombre?.toLowerCase().includes(search.toLowerCase()) ||
      c.dni?.toString().includes(search) ||
      c.email?.toLowerCase().includes(search.toLowerCase()) ||
      c.telefono?.includes(search);

    const estadoMatch = estado === '' || c.estado === estado;
    const inscripcionMatch =
      fechaInscripcion === '' || c.fecha_inscripcion === fechaInscripcion;
    const vencimientoMatch =
      fechaVencimiento === '' || c.fecha_vencimiento === fechaVencimiento;
    const notificacionMatch =
      ultimaNotificacion === '' || c.ultima_notificacion === ultimaNotificacion;

    return (
      searchMatch &&
      estadoMatch &&
      inscripcionMatch &&
      vencimientoMatch &&
      notificacionMatch
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-800 to-emerald-900 py-10 px-3 md:px-6 relative font-sans">
      <ParticlesBackground></ParticlesBackground>
      <div className="max-w-5xl mx-auto flex flex-col gap-4">
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold flex items-center gap-3 drop-shadow-xl text-white uppercase"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <FaUserFriends className="text-emerald-400 drop-shadow-lg" />
            Gestión de Clientes
          </motion.h1>
          <motion.button
            onClick={() => openModal()}
            className="text-white bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg transition-colors active:scale-95"
            whileHover={{ scale: 1.05 }}
          >
            <FaPlus /> Nuevo Cliente
          </motion.button>
        </div>
        {/* Filtros */}
        <div className="w-full bg-white/10 p-5 rounded-2xl shadow-md mb-6 backdrop-blur-lg">
          <h2 className="text-emerald-200 text-lg font-semibold mb-4">
            Filtros
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Filtro búsqueda global */}
            <div>
              <label className="block text-sm text-emerald-200 mb-1">
                Buscar
              </label>
              <input
                type="text"
                placeholder="DNI, nombre, email o teléfono..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-emerald-950 text-white border border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/80"
              />
            </div>

            {/* Filtro estado */}
            <div>
              <label className="block text-sm text-emerald-200 mb-1">
                Estado
              </label>
              <select
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-emerald-950 text-white border border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/80"
              >
                <option value="">Todos</option>
                <option value="activo">Activo</option>
                <option value="inactivo">Inactivo</option>
              </select>
            </div>

            {/* Filtro fecha inscripción */}
            <div>
              <label className="block text-sm text-emerald-200 mb-1">
                Fecha Inscripción
              </label>
              <input
                type="date"
                value={fechaInscripcion}
                onChange={(e) => setFechaInscripcion(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-emerald-950 text-white border border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/80"
              />
            </div>

            {/* Filtro vencimiento */}
            <div>
              <label className="block text-sm text-emerald-200 mb-1">
                Fecha Vencimiento
              </label>
              <input
                type="date"
                value={fechaVencimiento}
                onChange={(e) => setFechaVencimiento(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-emerald-950 text-white border border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/80"
              />
            </div>

            {/* Filtro última notificación */}
            <div>
              <label className="block text-sm text-emerald-200 mb-1">
                Últ. Notificación
              </label>
              <input
                type="date"
                value={ultimaNotificacion}
                onChange={(e) => setUltimaNotificacion(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-emerald-950 text-white border border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/80"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Cards-table para desktop */}
      <div className="hidden md:block">
        <div className="grid grid-cols-1 gap-4 max-w-6xl mx-auto mt-6">
          {clientesFiltrados.length === 0 ? (
            <div className="text-center text-emerald-200 py-12 rounded-2xl bg-white/5 shadow-xl">
              No hay clientes para mostrar.
            </div>
          ) : (
            clientesFiltrados.map((c) => (
              <motion.div
                key={c.id}
                className="flex w-full min-h-[140px] bg-white/70 shadow-xl rounded-3xl border-l-8 transition-all border-emerald-500/80 hover:scale-[1.012] hover:shadow-2xl overflow-hidden"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28 }}
              >
                {/* Identidad */}
                <div className="flex flex-col justify-between items-start p-7 w-64 bg-gradient-to-br from-emerald-700/90 to-emerald-900/90 text-white">
                  <div>
                    <div className="text-xl font-extrabold flex items-center gap-2 drop-shadow-sm">
                      {c.nombre}
                      {c.pagado === 'SI' ? (
                        <span className="ml-2 flex items-center bg-emerald-200 text-emerald-900 rounded-full px-3 py-0.5 text-xs font-bold shadow animate-pulse">
                          <svg
                            className="w-4 h-4 mr-1 inline"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Pagado
                        </span>
                      ) : (
                        <span className="ml-2 flex items-center bg-rose-500 text-white rounded-full px-3 py-0.5 text-xs font-bold shadow animate-pulse">
                          <svg
                            className="w-4 h-4 mr-1 inline"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="15" y1="9" x2="9" y2="15" />
                            <line x1="9" y1="9" x2="15" y2="15" />
                          </svg>
                          Pendiente
                        </span>
                      )}
                    </div>
                    <div className="mt-1 opacity-90 text-base">{c.email}</div>
                    <div className="flex items-center gap-2 mt-1 text-sm opacity-90">
                      {c.telefono}
                    </div>
                    <div className="text-xs text-emerald-200 mt-2">
                      <span className="opacity-80">DNI:</span> {c.dni}
                    </div>
                  </div>
                </div>

                {/* Detalle */}
                <div className="flex-1 grid grid-cols-4 gap-6 px-8 py-6 bg-white/80 backdrop-blur-lg text-gray-800 items-center text-sm">
                  <div>
                    <div className="text-xs text-gray-500 font-semibold">
                      Monto
                    </div>
                    <div className="text-base font-bold text-emerald-800">
                      ${Number(c.monto).toLocaleString('es-AR')}
                    </div>
                    <div className="text-xs text-gray-500 font-semibold mt-2">
                      Membresía
                    </div>
                    <div className="text-base">{c.tipo_membresia || '-'}</div>
                    <div className="text-xs text-gray-500 font-semibold mt-2">
                      Plan
                    </div>
                    <div className="text-base">{c.plan?.nombre || '-'}</div>
                  </div>

                  <div>
                    <div className="text-xs text-gray-500 font-semibold">
                      Fecha Inscripción
                    </div>
                    <div className="text-base">
                      {formatearFechaARG(c.fecha_inscripcion)}
                    </div>
                    <div className="text-xs text-gray-500 font-semibold mt-2">
                      Fecha Vencimiento
                    </div>
                    <div className="text-base">
                      {formatearFechaARG(c.fecha_vencimiento)}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-gray-500 font-semibold">
                      Últ. Notificación
                    </div>
                    <div className="text-base">
                      {formatearFechaARG(c.ultima_notificacion)}
                    </div>
                    <div className="text-xs text-gray-500 font-semibold mt-2">
                      Fecha Alta
                    </div>
                    <div className="text-base">
                      {formatearFechaARG(c.fecha_alta)}
                    </div>
                    <div className="text-xs text-gray-500 font-semibold mt-2">
                      Estado
                    </div>
                    <div
                      className={
                        c.estado === 'activo'
                          ? 'text-emerald-700 font-semibold'
                          : 'text-rose-500 font-semibold'
                      }
                    >
                      {c.estado || '-'}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-gray-500 font-semibold">
                      Origen
                    </div>
                    <div className="text-base">{c.origen || '-'}</div>
                    <div className="text-xs text-gray-500 font-semibold mt-2">
                      Notificación
                    </div>
                    <div className="text-base">
                      {c.notificacion_whatsapp ? 'WhatsApp ✅' : 'Desactivado'}
                    </div>
                    <div className="text-xs text-gray-500 font-semibold mt-2">
                      Notas
                    </div>
                    <div className="text-base truncate max-w-[180px]">
                      {c.notas || '-'}
                    </div>
                  </div>
                </div>

                {/* Acciones */}
                <div className="flex flex-col items-center justify-center px-6 gap-3 bg-white/60 backdrop-blur-xl">
                  <AdminActions
                    onEdit={() => openModal(c)}
                    onDelete={() => handleDelete(c.id)}
                  />
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>

      {/* Tarjetas para mobile */}
      <div className="block md:hidden">
        <div className="grid grid-cols-1 gap-4 max-w-xl mx-auto mt-8">
          {clientesFiltrados.length === 0 && (
            <div className="text-center text-emerald-200 py-12 text-lg font-semibold">
              No hay clientes para mostrar.
            </div>
          )}

          {clientesFiltrados.map((c) => (
            <motion.div
              key={c.id}
              className={`rounded-2xl px-4 py-5 shadow-2xl bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 flex flex-col gap-3 border-l-[6px] ${
                c.pagado === 'SI' ? 'border-emerald-400' : 'border-rose-500'
              } text-white`}
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.22 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-emerald-400/80 rounded-full flex items-center justify-center font-extrabold text-lg text-emerald-900 shadow">
                    {c.nombre[0]}
                  </div>
                  <div>
                    <div className="font-bold text-base text-white">
                      {c.nombre}
                    </div>
                    <div className="text-xs text-emerald-200">
                      {c.tipo_membresia || 'Sin tipo'}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {c.pagado === 'SI' ? (
                    <span className="flex items-center bg-emerald-300 text-emerald-900 rounded-full px-2 py-0.5 text-xs font-bold animate-pulse gap-1 shadow">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Pagado
                    </span>
                  ) : (
                    <span className="flex items-center bg-gradient-to-r from-rose-500 to-rose-400 text-white rounded-full px-2 py-0.5 text-xs font-bold animate-pulse gap-1 shadow">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="15" y1="9" x2="9" y2="15" />
                        <line x1="9" y1="9" x2="15" y2="15" />
                      </svg>
                      Pendiente
                    </span>
                  )}
                  <AdminActions
                    onEdit={() => openModal(c)}
                    onDelete={() => handleDelete(c.id)}
                    iconSize={22}
                    iconColorEdit="#38bdf8"
                    iconColorDelete="#fb7185"
                    bgColor="bg-emerald-950"
                  />
                </div>
              </div>

              {/* Info clave */}
              <div className="grid grid-cols-2 gap-2">
                <Info label="DNI" value={c.dni} />
                <Info label="Teléfono" value={c.telefono} />
                <Info label="Email" value={c.email} isTruncate />
                <Info
                  label="Monto"
                  value={`$${Number(c.monto).toLocaleString('es-AR')}`}
                  strong
                />
                <Info
                  label="F. Inscripción"
                  value={formatearFechaARG(c.fecha_inscripcion)}
                />
                <Info label="F. Alta" value={formatearFechaARG(c.fecha_alta)} />
                <Info
                  label="Vencimiento"
                  value={formatearFechaARG(c.fecha_vencimiento)}
                />
                <Info
                  label="Estado"
                  value={c.estado}
                  color={
                    c.estado === 'activo' ? 'text-emerald-300' : 'text-rose-300'
                  }
                />
                <Info label="Recargo" value={`${c.porcentaje_recargo || 0}%`} />
                <Info label="Origen" value={c.origen} />
                <Info
                  label="Notif. WhatsApp"
                  value={c.notificacion_whatsapp ? '✅' : '—'}
                />
                <Info label="Plan" value={c.plan?.nombre || '-'} />
              </div>

              {/* Observaciones */}
              <div className="mt-2">
                <div className="text-xs text-emerald-300 font-semibold">
                  Notas
                </div>
                <div className="text-sm italic text-emerald-100">
                  {c.notas || '-'}
                </div>
              </div>

              {/* Última notificación */}
              <div className="mt-2 flex items-center justify-between border-t pt-2 border-emerald-300/40">
                <div className="text-xs text-emerald-200 font-semibold">
                  Últ. Notif:
                </div>
                <div className="text-xs text-emerald-50">
                  {formatearFechaARG(c.ultima_notificacion)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <Modal
            isOpen={modalOpen}
            onRequestClose={() => setModalOpen(false)}
            overlayClassName="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50"
            className="bg-white rounded-2xl p-8 max-w-lg w-full mx-4 shadow-2xl border-l-4 border-emerald-500"
            closeTimeoutMS={300}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-emerald-600">
                {editId ? 'Editar Cliente' : 'Nuevo Cliente'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 text-gray-800">
                {/* Grupo: DNI + Nombre */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="DNI"
                    value={formData.dni}
                    onChange={(e) =>
                      setFormData({ ...formData, dni: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-lg border border-emerald-200 bg-white"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Nombre"
                    value={formData.nombre}
                    onChange={(e) =>
                      setFormData({ ...formData, nombre: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-lg border border-emerald-200 bg-white"
                    required
                  />
                </div>

                {/* Grupo: Teléfono + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Teléfono"
                    value={formData.telefono}
                    onChange={(e) =>
                      setFormData({ ...formData, telefono: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-lg border border-emerald-200 bg-white"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-lg border border-emerald-200 bg-white"
                  />
                </div>

                {/* Grupo: Monto + Recargo */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="number"
                    placeholder="Monto abonado"
                    value={formData.monto}
                    onChange={(e) =>
                      setFormData({ ...formData, monto: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-lg border border-emerald-200 bg-white"
                  />
                  <input
                    type="number"
                    placeholder="% Recargo por mora"
                    value={formData.porcentaje_recargo}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        porcentaje_recargo: e.target.value
                      })
                    }
                    className="w-full px-4 py-2 rounded-lg border border-emerald-200 bg-white"
                  />
                </div>

                {/* Grupo: Fechas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-emerald-600 mb-1">
                      Fecha Inscripción
                    </label>
                    <input
                      type="date"
                      value={formData.fecha_inscripcion}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          fecha_inscripcion: e.target.value
                        })
                      }
                      className="w-full px-4 py-2 rounded-lg border border-emerald-200 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-emerald-600 mb-1">
                      Fecha Vencimiento
                    </label>
                    <input
                      type="date"
                      value={formData.fecha_vencimiento}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          fecha_vencimiento: e.target.value
                        })
                      }
                      className="w-full px-4 py-2 rounded-lg border border-emerald-200 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-emerald-600 mb-1">
                      Última Notificación
                    </label>
                    <input
                      type="date"
                      value={formData.ultima_notificacion}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          ultima_notificacion: e.target.value
                        })
                      }
                      className="w-full px-4 py-2 rounded-lg border border-emerald-200 bg-white"
                    />
                  </div>
                  {editId && (
                    <div>
                      <label className="block text-sm font-semibold text-emerald-600 mb-1">
                        Fecha Alta (solo lectura)
                      </label>
                      <input
                        type="datetime-local"
                        value={formData.fecha_alta?.slice(0, 16)}
                        disabled
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed"
                      />
                    </div>
                  )}
                </div>

                {/* Estado + Tipo membresía */}
                {/* Estado + Tipo membresía + Pagado */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <select
                    value={formData.estado}
                    onChange={(e) =>
                      setFormData({ ...formData, estado: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-lg border border-emerald-200 bg-white"
                    required
                  >
                    <option value="">Seleccionar estado</option>
                    <option value="activo">Activo</option>
                    <option value="inactivo">Inactivo</option>
                    <option value="suspendido">Suspendido</option>
                    <option value="moroso">Moroso</option>
                  </select>

                  <select
                    value={formData.pagado}
                    onChange={(e) =>
                      setFormData({ ...formData, pagado: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-lg border border-emerald-200 bg-white"
                    required
                  >
                    <option value="">¿Pagado?</option>
                    <option value="SI">Sí</option>
                    <option value="NO">No</option>
                  </select>
                </div>

                {/* Selección del plan */}
                <div>
                  <label className="block text-sm font-semibold text-emerald-600 mb-1">
                    Plan de Membresía
                  </label>
                  <select
                    value={formData.plan_id || ''}
                    onChange={(e) =>
                      setFormData({ ...formData, plan_id: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded-lg border border-emerald-200 bg-white"
                  >
                    <option value="">Seleccionar plan</option>
                    {planes.map((plan) => (
                      <option key={plan.id} value={plan.id}>
                        {plan.nombre} - {plan.duracion_dias} días - $
                        {Number(plan.precio).toLocaleString('es-AR')}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Origen */}
                <input
                  type="text"
                  placeholder="Origen (ej: Instagram, Referido...)"
                  value={formData.origen}
                  onChange={(e) =>
                    setFormData({ ...formData, origen: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg border border-emerald-200 bg-white"
                />

                {/* Notificación WhatsApp */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.notificacion_whatsapp}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        notificacion_whatsapp: e.target.checked
                      })
                    }
                  />
                  <label className="text-sm text-gray-700">
                    Recibir notificación por WhatsApp
                  </label>
                </div>

                {/* Notas */}
                <textarea
                  placeholder="Notas internas"
                  value={formData.notas}
                  onChange={(e) =>
                    setFormData({ ...formData, notas: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg border border-emerald-200 bg-white resize-none"
                  rows={3}
                />

                {/* Botón */}
                <div className="text-right">
                  <button
                    type="submit"
                    className="bg-emerald-500 hover:bg-emerald-600 px-6 py-2 text-white font-medium rounded-lg"
                  >
                    {editId ? 'Actualizar' : 'Guardar'}
                  </button>
                </div>
              </form>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}
