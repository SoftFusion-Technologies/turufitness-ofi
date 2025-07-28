import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEdit,
  FaTrash,
  FaRegFileAlt,
  FaRegClock,
  FaMoneyBillWave
} from 'react-icons/fa';
import ParticlesBackground from '../../Components/ParticlesBackground';

export default function PlanesMembresiaAdmin() {
  const [planes, setPlanes] = useState([]);
  const [form, setForm] = useState({
    nombre: '',
    descripcion: '',
    duracion_dias: '',
    precio: ''
  });
  const [editId, setEditId] = useState(null);

  const fetchPlanes = async () => {
    const res = await fetch('http://localhost:8080/planes-membresia');
    const data = await res.json();
    setPlanes(data);
  };

  useEffect(() => {
    fetchPlanes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = editId
      ? `http://localhost:8080/planes-membresia/${editId}`
      : 'http://localhost:8080/planes-membresia';

    const method = editId ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    if (res.ok) {
      setForm({ nombre: '', descripcion: '', duracion_dias: '', precio: '' });
      setEditId(null);
      fetchPlanes();
    }
  };

  const handleEdit = (plan) => {
    setForm({
      nombre: plan.nombre,
      descripcion: plan.descripcion,
      duracion_dias: plan.duracion_dias,
      precio: plan.precio
    });
    setEditId(plan.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar este plan?')) {
      await fetch(`http://localhost:8080/planes-membresia/${id}`, {
        method: 'DELETE'
      });
      fetchPlanes();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-950 via-teal-900 to-cyan-800 py-10 px-4">
      <ParticlesBackground></ParticlesBackground>
      <div className="max-w-5xl mx-auto mt-10">
        <motion.h1
          className="text-4xl font-extrabold text-center text-green-200 mb-10 uppercase drop-shadow"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Planes de Membresía
        </motion.h1>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl grid md:grid-cols-2 gap-4 mb-10"
        >
          <input
            type="text"
            placeholder="Nombre del plan"
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            required
            className="px-4 py-2 rounded-lg bg-green-950/30 border border-green-700 text-white placeholder:text-green-300"
          />
          <input
            type="number"
            placeholder="Duración (días)"
            value={form.duracion_dias}
            onChange={(e) =>
              setForm({ ...form, duracion_dias: e.target.value })
            }
            required
            className="px-4 py-2 rounded-lg bg-green-950/30 border border-green-700 text-white placeholder:text-green-300"
          />
          <input
            type="number"
            placeholder="Precio"
            value={form.precio}
            onChange={(e) => setForm({ ...form, precio: e.target.value })}
            required
            className="px-4 py-2 rounded-lg bg-green-950/30 border border-green-700 text-white placeholder:text-green-300"
          />
          <textarea
            placeholder="Descripción"
            value={form.descripcion}
            onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
            className="px-4 py-2 rounded-lg bg-green-950/30 border border-green-700 text-white placeholder:text-green-300 col-span-full"
            rows={3}
          />
          <button
            type="submit"
            className="col-span-full bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg transition-all"
          >
            {editId ? 'Actualizar Plan' : 'Crear Plan'}
          </button>
        </form>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {planes.map((plan) => (
            <motion.div
              key={plan.id}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/10 relative"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-green-100 mb-2">
                {plan.nombre}
              </h2>
              <p className="text-sm text-green-300 mb-1">
                {plan.duracion_dias} días
              </p>
              <p className="text-sm text-green-300 mb-3">
                ${Number(plan.precio).toLocaleString('es-AR')}
              </p>
              <p className="text-green-200 italic text-sm mb-5">
                {plan.descripcion}
              </p>
              <div className="absolute top-3 right-3 flex gap-2">
                <button
                  className="bg-green-800/40 hover:bg-green-700/70 p-2 rounded-full"
                  onClick={() => handleEdit(plan)}
                >
                  <FaEdit className="text-green-300" />
                </button>
                <button
                  className="bg-red-800/40 hover:bg-red-700/70 p-2 rounded-full"
                  onClick={() => handleDelete(plan.id)}
                >
                  <FaTrash className="text-red-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
