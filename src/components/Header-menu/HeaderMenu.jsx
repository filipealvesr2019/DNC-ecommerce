import React from 'react';
import "./index.scss";
import logo from "logo/logo.png";
import cartshop from "../../assets/cartshop";
const HeaderMenu = () => {
  return (
    <header className="classname header_menu">
      <img src={logo} alt="logo" className="header-menu_
      _logo" />
      <ul>
        <li>Home</li>
        <li>Novidades</li>
        <li>Feminino</li>
        <li>Masculino</li>
        <li>Atendimento</li>
      </ul>
      <div className="header-menu__cart-shop">
        <h1>Meu Carrinho</h1>
        <img src={cartshop} alt="cartLogo" />

      </div>
    </header>
  )
}

export default HeaderMenu
