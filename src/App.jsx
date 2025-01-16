import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Contact from './Pages/Contact';

// Otros componentes que quieras agregar
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Mapa from './Components/Mapa';
import Planes from './Pages/Planes';
import Instalaciones from './Pages/Instalaciones';
import FAQ from './Pages/FAQ';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/planes" element={<Planes />} />
        <Route path="/instalaciones" element={<Instalaciones />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Mapa></Mapa>
      <Footer />
    </Router>
  );
}

export default App;
