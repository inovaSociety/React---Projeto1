import React from 'react'
import './Navbar.css'

const Navbar = () => {

  return (
        <nav className='navbar'>
          <div className='navbar-container'>

            <div className='navbar-logo'>
              <a className='navbar-logo'><img src="./src/imgs/{04A74FB6-048D-40CD-9DD2-EAFCE95993E6} 1.svg" alt="logo-adventure" /></a>
            </div>
            <ul className='navbar-opcoes'>
              <li>Homens</li>
              <li>Mulher</li>
              <li>Esporte</li>
              <li>Coleções</li>
              </ul>
                <input className=" "type="search" value="Pesquisar" />
                <ul className='navbar-icones'>
                  <li>Instagram</li>
                  <li>Facebook</li>
                  <li>Twitter</li>
                  </ul>
              </div>
        </nav>
  )
}

export default Navbar
