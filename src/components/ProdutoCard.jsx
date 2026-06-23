import Botao from "./Botao";

// Recebendo as variáveis diretamente, conforme retornadas pela API (em inglês)
function ProdutoCard({ title, price, thumbnail, category }) {
  return (
    <div className="card">

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
        {price.toLocaleString(
          "pt-BR",
          {
            style: "currency",
            currency: "BRL"
          }
        )}
      </p>

      {/* Exibição condicional caso a categoria seja passada */}
      {category && (
        <p>
          Categoria: {category}
        </p>
      )}

      <Botao texto="Comprar" />

    </div>
  );
}

export default ProdutoCard;