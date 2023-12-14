import { useEffect, useState } from 'react';
import styles from '../styles/produtoDetalhado.module.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import numeral from "numeral";

// Este é um componente React escrito em TypeScript chamado ProdutoDetalhado. Ele é usado para exibir detalhes de um produto específico.

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
      <div className={styles.produto}>
          <div className={styles.imagens}>
            <img src={produto.imagem1} alt={produto.nomeProduto} />
            <img src={produto.imagem2} alt={`${produto.nomeProduto} imagem 2`} />
            <img src={produto.imagem3} alt={`${produto.nomeProduto} imagem 3`} />
         </div>
          <div>
            <p>{produto.descricao}</p>
            <p>Tipo: {produto.tipoProduto}</p>
            <p>Preço: R$ {numeral(produto.preco).format("0,0.00")}</p>
          </div>
        </div>
    </div>
  );
};

export default ProdutoDetalhado;