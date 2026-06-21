import ProdutoCard from "./ProdutoCard"

function Vitrine() {

  const produtos = [
    {
      id: 1,
      nome: "Notebook",
      preco: 3499.90,
      freteGratis: true
    },
    {
      id: 2,
      nome: "Mouse Gamer",
      preco: 149.90,
      freteGratis: false
    },
    {
      id: 3,
      nome: "Teclado Mecânico",
      preco: 299.90,
      freteGratis: true
    },
    {
      id: 4,
      nome: "Monitor",
      preco: 899.90,
      freteGratis: false
    }
  ]

  return (
    <div className="vitrine">

      {produtos.map(produto => (
        <ProdutoCard
          key={produto.id}
          produto={produto}
        />
      ))}

    </div>
  )
}

export default Vitrine