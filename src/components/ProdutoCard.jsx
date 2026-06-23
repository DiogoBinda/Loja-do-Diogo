import { Link } from 'react-router-dom';
import Botao from "../components/Botao"; // Ajuste o caminho se necessário

function ProdutoCard({ id, title, price, thumbnail, category }) {
  return (
    <div className="card">
      {/* O componente Link envolve o conteúdo ou parte dele para permitir a navegação */}
      <Link to={`/produto/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        
        <img
          src={thumbnail}
          alt={title}
          style={{
            width: "100%",
            height: "180px",
            objectFit: "cover",
            borderRadius: "8px"
          }}
        />

        <h3>{title}</h3>

        <p>
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
          })}
        </p>

        <p>Categoria: {category}</p>
      </Link>

      {/* O Botão pode ficar fora do Link ou ser um link também */}
      <Botao texto="Comprar" />
    </div>
  );
}

export default ProdutoCard;