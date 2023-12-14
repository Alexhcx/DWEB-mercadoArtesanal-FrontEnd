import axios from "axios";
import { useEffect, useState } from "react";
import numeral from "numeral";

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

// Este é um componente React escrito em TypeScript chamado produtos. Ele exibe todos os produtos disponiveis.

export default function ProdutosDisplay() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const getProdutos = async () => {
    const response = await axios.get("http://localhost:8080/produtosArtesanais");
    setProdutos(response.data);
  };

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <div>
      {produtos.map((produto) => (
        <div key={produto.id}>
          <img src={produto.imagem1} alt={produto.nomeProduto} />
          <h3>{produto.nomeProduto.toUpperCase()}</h3>
          <p>R$ {numeral(produto.preco).format('0,0.00')}</p>
        </div>
      ))}
    </div>
  );
}