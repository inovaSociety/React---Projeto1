import React from 'react'
import './Produto.css'

const Produto = ({imagem, nome, preco}) => {
  return (
    <div>
        <div className="product-card">
            <img src={imagem} alt={nome} />
            <h3>{nome}</h3>
            <p>{preco}</p>
        </div>
    </div>
  )
}

export default Produto;