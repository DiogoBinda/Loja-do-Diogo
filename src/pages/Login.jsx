import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [nome, setNome] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (nome.trim()) {
      login(nome); // Salva o usuário no Contexto
      navigate('/'); // Redireciona para a home após logar
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input 
          type="text" 
          placeholder="Digite seu nome" 
          value={nome}
          onChange={(e) => setNome(e.target.value)} 
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;