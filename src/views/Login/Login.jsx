import React from "react";
import "./index.scss";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
    <section className="header">
      <Header />
      
    </section>
    <section className="container-login">
      <div  className="text-header">
      <h1>Acesse com seu login ou cadastre-se!</h1>
      <h2>você pode entrar com o seu CPF</h2>
   </div>
    <form className="login__form">
    
    
    <div className="login__input-wrapper">
      <label htmlFor="name">Digite seu CPF:</label>
      <input
        type="text"
        placeholder="Nome completo"
        id="name"
        className="login__input-name"
      />
      <label htmlFor="password">Senha:</label>
      <input type="password" id="password" placeholder="********" />
      <button type="submit">
      <Link to={"/home"}>Entrar</Link>
    </button>
    </div>
    
  </form>
    </section>
    
  </>
  );
};

export default Login;