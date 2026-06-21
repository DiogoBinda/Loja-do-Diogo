import Botao from "./Botao"
import Selo from "./Selo"

function ProdutoCard({ produto }) {
  return (
    <div className="card">

      <h3>{produto.nome}</h3>

      <p>
        {produto.preco.toLocaleString(
          "pt-BR",
          {
            style: "currency",
            currency: "BRL"
          }
        )}
      </p>

      {produto.freteGratis && (
        <Selo
          texto="Frete Grátis"
          cor="green"
        />
      )}

      <br />

      <Botao texto="Comprar" />

    </div>
  )
}

export default ProdutoCard