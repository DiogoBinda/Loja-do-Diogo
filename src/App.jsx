import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Detalhe from "./pages/Detalhe";
import NaoEncontrado from "./pages/NaoEncontrado";

function App() {
  return (
    <Layout>
      <Routes>
        {/* Rota da lista de produtos */}
        <Route path="/" element={<Home />} />
        
        {/* Rota de detalhe usando o parâmetro id */}
        <Route path="/produto/:id" element={<Detalhe />} />
        
        {/* Rota 404 (deve ser sempre a última) */}
        <Route path="*" element={<NaoEncontrado />} />
      </Routes>
    </Layout>
  );
}

export default App;