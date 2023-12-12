import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface Produto {
  id: string;
  nomeProduto: string;
  tipoProduto: string;
  descricao: string;
  imagem1: string;
  imagem2: string;
  imagem3: string;
  preco: number;
}
function ProdutoDetalhado() {

  const [produto, setProduto] = useState<Produto | null>(null);
  const { id } = useParams<{ id: string }>();


  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/produtosArtesanais/${id}`);
        setProduto(response.data);
      } catch (error) {
        console.error("Erro ao buscar produto:", error);
      }
    };

    fetchProduto();
  }, [id]);

  if (!produto) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h2>{produto.nomeProduto}</h2>
      <img src={produto.imagem1} alt={produto.nomeProduto} />
      <p>{produto.descricao}</p>
      <p>Tipo: {produto.tipoProduto}</p>
      <p>Preço: {produto.preco}</p>
      <img src={produto.imagem2} alt={`${produto.nomeProduto} imagem 2`} />
      <img src={produto.imagem3} alt={`${produto.nomeProduto} imagem 3`} />
    </div>
  );
};

export default ProdutoDetalhado;