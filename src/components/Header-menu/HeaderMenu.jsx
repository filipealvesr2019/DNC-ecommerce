import React from 'react';
import "./index.scss";
import logo from "/images/logo.png";
import cartshop from "/src/assets/cartshop.png";
const HeaderMenu = () => {
  return (
    <header className="header_menu">
       <div className='left-section'>
        <img src={logo} alt="logo icone" />
        <nav>
          <ul>
            <li>Home</li>
            <li>Novidades</li>
            <li>Feminino</li>
            <li>Masculino</li>
            <li>Atendimento</li>
          </ul>
        </nav>
       </div>
       <div className='right-section'>
        <div className='header-menu-logo'>
          <span>Meu Carrinho</span>
          <img src={cartshop} alt="cart shop icone" />
        </div>
       </div>
    </header>
  )
}

export default HeaderMenu
