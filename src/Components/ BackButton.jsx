import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';

export default function BackButton({ label = 'Volver' }) {
  const navigate = useNavigate();

  return (
    <motion.button
      onClick={() => navigate(-1)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="mt-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-700 text-white shadow-lg hover:shadow-emerald-600/50 transition-all text-sm sm:text-base font-semibold backdrop-blur-md"
    >
      <FaArrowLeft className="text-sm sm:text-base" />
      <span>{label}</span>
    </motion.button>
  );
}
