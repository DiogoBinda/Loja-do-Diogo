import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Detalhe from "./pages/Detalhe";
import NaoEncontrado from "./pages/NaoEncontrado";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Layout>
      <Routes>
        {/* Rotas Públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={<Detalhe />} />
        <Route path="/login" element={<Login />} />
        
        {/* Rota Protegida: só acessa se estiver logado */}
        <Route path="/minha-conta" element={
          <PrivateRoute>
             <h1>Bem-vindo à sua área de cliente!</h1>
          </PrivateRoute>
        } />
        
        {/* Rota 404 para caminhos inexistentes */}
        <Route path="*" element={<NaoEncontrado />} />
      </Routes>
    </Layout>
  );
}

export default App;