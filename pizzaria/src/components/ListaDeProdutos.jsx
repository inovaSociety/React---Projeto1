// src/ListaDeProdutos.js
import React from 'react';
import Produto from './Produto'; // Importe o seu componente Produto
import './ListaDeProdutos.css'; // Importe os estilos (se criar)

const ListaDeProdutos = () => {
  const produtos = [
    {
      id: 1,
      imagem: './src/imgs/vans.svg', // Substitua pelas URLs reais
      nome: 'Tênis de Corrida Deviate NITRO™ 3 Masculino',
      preco: 'R$1.199,99',
    },
      {
        id: 2,
        imagem: './src/imgs/nike.svg', // Substitua pelas URLs reais
        nome: 'Tênis de Corrida Deviate NITRO™ 3 Masculino',
        preco: 'R$1.199,99',
      },
      {
        id: 3,
        imagem: './src/imgs/nike_preto.svg', // Substitua pelas URLs reais
        nome: 'Tênis de Corrida Deviate NITRO™ 3 Masculino',
        preco: 'R$1.199,99',
      },
      {
        id: 4,
        imagem: './src/imgs/nike_laranja.svg', // Substitua pelas URLs reais
        nome: 'Tênis de Corrida Deviate NITRO™ 3 Masculino',
        preco: 'R$1.199,99',
      },
    
    // ... outros produtos
  ];

  return (
    <div className="product-list">
      {produtos.map((produto) => (
        <Produto
          key={produto.id}
          imagem={produto.imagem}
          nome={produto.nome}
          preco={produto.preco}
        />
      ))}
    </div>
  );
};

export default ListaDeProdutos;