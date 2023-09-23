import React from 'react';
import "./index.scss";
import logo from "/images/logo.png";
import cartshop from "/src/assets/cartshop.png";
const HeaderMenu = () => {
  return (
    <header className="header_menu">
      <div className='container-left'>
        <img src={logo} alt="" />
      <ul>
        <li>Home</li>
        <li>Novidades</li>
        <li>Feminino</li>
        <li>Masculino</li>
        <li>Atendimento</li>
      </ul>
      </div>
      
      <div className="header-menu__cart-shop">
        <h1>Meu Carrinho</h1>
        <img src={cartshop} alt="cartLogo" />

      </div>
    </header>
  )
}

export default HeaderMenu
