import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Detalhe() {
  const { id } = useParams(); // Pega o número do produto que veio na URL
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduto(data));
  }, [id]);

  if (!produto) return <p>Carregando detalhe...</p>;

  return (
    <div>
      <h1>{produto.title}</h1>
      <img src={produto.thumbnail} />
      <p>{produto.description}</p>
      <a href="/">Voltar para a loja</a>
    </div>
  );
}
export default Detalhe;