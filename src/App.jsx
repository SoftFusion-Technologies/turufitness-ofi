import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

// Otros componentes que quieras agregar
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Mapa from './Components/Mapa'
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Mapa></Mapa>
      <Footer />
    </Router>
  );
}

export default App;
