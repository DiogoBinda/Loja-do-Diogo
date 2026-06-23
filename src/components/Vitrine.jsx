import { useState, useEffect } from 'react';
import ProdutoCard from "./ProdutoCard";

function Vitrine() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=12')
      .then(res => {
        if (!res.ok) throw new Error("Erro na API");
        return res.json();
      })
      .then(data => {
        setProdutos(data.products);
        setCarregando(false);
      })
      .catch(() => {
        setErro("Erro ao carregar produtos");
        setCarregando(false);
      });
  }, []);

  if (carregando) return <p>Carregando...</p>;
  if (erro) return <p>{erro}</p>;

  return (
    <div className="vitrine-grid">
      {produtos.map(p => (
        <ProdutoCard 
          key={p.id} 
          title={p.title} 
          price={p.price} 
          thumbnail={p.thumbnail} 
          category={p.category} 
        />
      ))}
    </div>
  );
}

export default Vitrine;