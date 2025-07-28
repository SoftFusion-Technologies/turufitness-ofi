import { useEffect, useState } from 'react';
import { FaRegClock, FaUser, FaIdCard, FaSearch } from 'react-icons/fa';
import { format } from 'date-fns';
import es from 'date-fns/locale/es';
import ParticlesBackground from '../../Components/ParticlesBackground';

export default function AccesosGet() {
  const [accesos, setAccesos] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [fecha, setFecha] = useState('');

  const fetchAccesos = async () => {
    try {
      let url = 'http://localhost:8080/accesos'; // Ruta base
      const params = [];
      if (filtro) params.push(`q=${filtro}`);
      if (fecha) params.push(`fecha=${fecha}`);
      if (params.length) url += `?${params.join('&')}`;

      const res = await fetch(url);
      const data = await res.json();
      setAccesos(data);
    } catch (error) {
      console.error('Error al obtener accesos:', error);
    }
  };

  useEffect(() => {
    fetchAccesos();
  }, [filtro, fecha]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-10 px-4">
      <ParticlesBackground></ParticlesBackground>
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
            onChange={(e) => setFiltro(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg text-black"
          />
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="px-4 py-2 rounded-lg text-black"
          />
        </div>

        {/* Lista de accesos */}
        <div className="grid gap-4">
          {accesos.length === 0 ? (
            <p className="text-center text-gray-300">
              No hay accesos registrados.
            </p>
          ) : (
            accesos.map((acceso) => (
              <div
                key={acceso.id}
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
                      { locale: es }
                    )}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
