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

// Importar el proveedor del contexto
import { ContactProvider } from './context/ContactContext';
import LoginForm from './Components/login/LoginForm';
import AdminPage from './Pages/staff/AdminPage';
import ProtectedRoute from './ProtectedRoute';
import UsuariosGet from './Pages/MetodsGet/UsuariosGet';
import ClientesGet from './Pages/MetodsGet/ClientesGet';
import PlanesMembresiaAdmin from './Pages/MetodsGet/PlanesMembresiaAdmin';
import AccesosGet from './Pages/MetodsGet/AccesosGet';

function App() {
  return (
    <ContactProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contact />} />
          {/* <Route path="/planes" element={<Planes />} /> */}
          <Route path="/instalaciones" element={<Instalaciones />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                {' '}
                <AdminPage />{' '}
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/usuarios"
            element={
              <ProtectedRoute>
                {' '}
                <UsuariosGet />{' '}
              </ProtectedRoute>
            }
          />{' '}
          <Route
            path="/dashboard/clientes"
            element={
              <ProtectedRoute>
                {' '}
                <ClientesGet />{' '}
              </ProtectedRoute>
            }
          />{' '}
          <Route
            path="/dashboard/planes"
            element={
              <ProtectedRoute>
                {' '}
                <PlanesMembresiaAdmin />{' '}
              </ProtectedRoute>
            }
          />{' '}
          <Route
            path="/dashboard/accesos"
            element={
              <ProtectedRoute>
                {' '}
                <AccesosGet />{' '}
              </ProtectedRoute>
            }
          />{' '}
        </Routes>
        <Footer />
      </Router>
    </ContactProvider>
  );
}

export default App;
