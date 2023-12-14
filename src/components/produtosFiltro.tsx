import axios from "axios";
import { useEffect, useState } from "react";
import ProdutosFiltrados from "./produtosFiltrados";

// Este é um componente React escrito em TypeScript chamado produtoFiltro. Esse componente é utilizado para filtras ou produtos disponiveis.

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
export default function ProdutosDisplay() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [filtro, setFiltro] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searched, setSearched] = useState<boolean>(false); 

  const getProdutos = async () => {
    try {
      const response = await axios.get("http://localhost:8080/produtosArtesanais");
      setProdutos(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProdutos();
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiltro(event.target.value.toLowerCase());
    setSearched(true);
  };

  const produtosFiltrados = produtos.filter((produto) =>
    produto.nomeProduto.toLowerCase().includes(filtro)
  );

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Pesquisar produto..."
          value={filtro}
          onChange={handleInputChange}
        />
      </form>
      <ProdutosFiltrados produtosFiltrados={produtosFiltrados} isLoading={isLoading} searched={searched} />
    </div>
  );
}