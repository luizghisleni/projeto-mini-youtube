import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/videos" element={<div>Página de Vídeos</div>} />
          <Route path="/perfil" element={<div>Página de Perfil</div>} />
          <Route path="/logout" element={<div>Logout implementado aqui</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export { App };