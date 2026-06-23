import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Layout({ children }) {
  const { usuario, logout } = useContext(AuthContext);

  return (
    <div>
      <header style={{ padding: '20px', background: '#007bff', color: 'white' }}>
        <h1>Loja do Diogo</h1>
        <nav>
          <Link to="/" style={{ color: 'white', marginRight: '10px' }}>Home</Link>
          <Link to="/minha-conta" style={{ color: 'white', marginRight: '10px' }}>Minha Conta</Link>
          
          {/* Renderização Condicional: Mostra o nome e o botão Sair se logado, ou Entrar se deslogado */}
          {usuario ? (
            <button onClick={logout} style={{ cursor: 'pointer' }}>
              Sair ({usuario.nome})
            </button>
          ) : (
            <Link to="/login" style={{ color: 'white' }}>Entrar</Link>
          )}
        </nav>
      </header>

      <main style={{ padding: '20px' }}>
        {children}
      </main>

      <footer style={{ padding: '10px', background: '#333', color: 'white', textAlign: 'center' }}>
        Diogo Binda - 2026
      </footer>
    </div>
  );
}

export default Layout;