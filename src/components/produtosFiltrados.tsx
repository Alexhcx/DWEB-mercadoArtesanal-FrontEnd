import numeral from "numeral";
import Filtro from "../styles/filtro.module.css";
import { Link } from 'react-router-dom';

interface Produto {
  idProduto: string;
  nomeProduto: string;
  tipoProduto: string;
  descricao: string;
  imagem1: string;
  imagem2: string;
  imagem3: string;
  preco: number;
}

interface ProdutosFiltradosProps {
  produtosFiltrados: Produto[];
  isLoading: boolean;
  searched: boolean; 
}

const ProdutosFiltrados: React.FC<ProdutosFiltradosProps> = ({ produtosFiltrados = [], isLoading, searched }) => {

  if (isLoading) {
    return null;
  }

  if (produtosFiltrados.length === 0 && searched) { 
    return <div id={Filtro["filtroSemElementos"]}>Nenhum produto encontrado.</div>;
  }

  console.log(produtosFiltrados)

  return (
    <div>
      {produtosFiltrados.map((produto) => {
        console.log(produto); // Adicione esta linha
        return (
          <div key={produto.idProduto}>
            <Link to={`/produtos/${produto.idProduto}`}>
              <div>
                <img src={produto.imagem1} alt={produto.nomeProduto} />
                <p>R$ {numeral(produto.preco).format("0,0.00")}</p>
              </div>
              <h3>{produto.nomeProduto.toUpperCase()}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProdutosFiltrados;
