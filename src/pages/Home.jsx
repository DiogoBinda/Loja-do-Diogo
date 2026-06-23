import ProdutoCard from "../components/ProdutoCard";
import { useState, useEffect } from 'react';

function Home() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=12')
      .then(res => res.json())
      .then(data => {
        setProdutos(data.products);
        setCarregando(false);
      });
  }, []); // Array vazio para rodar apenas uma vez

  if (carregando) return <p>Carregando vitrine...</p>;

  return (
    <div className="vitrine-grid">
       {produtos.map(p => (
         <ProdutoCard 
            key={p.id} 
            id={p.id} 
            title={p.title} 
            price={p.price} 
            thumbnail={p.thumbnail} 
            category={p.category} 
         />
       ))}
    </div>
  );
}

export default Home;