import React from 'react'
import './Navbar.css'

const Navbar = ({

  favoritosIcon = './src/imgs/favorito.png',
  carrinhoIcon = './src/imgs/carrinho.png',
  usuarioIcon = './src/imgs/usuario.png'

}) => {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>

        <div className='navbar-logo'>
          <a className='navbar-logo'><img src="./src/imgs/{04A74FB6-048D-40CD-9DD2-EAFCE95993E6} 1.svg" alt="logo-adventure" /></a>
        </div>
        <ul className='navbar-opcoes'>
          <li>Homens</li>
          <li>Mulheres</li>
          <li>Esportes</li>
          <li>Coleções</li>
        </ul>
        <div class="caixa-pesquisa">
          <span class="pesquisa-icon"><img src="./src/imgs/search_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 1.svg" alt="pesquisa" /></span>
          <input type="text" placeholder="Pesquisar" />
        </div>
        <div className='navbar-icones'>
          <img src={favoritosIcon} alt="favoritos" />
          <img src={carrinhoIcon} alt="carrinho" />
          <img src={usuarioIcon} alt="usuario" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
