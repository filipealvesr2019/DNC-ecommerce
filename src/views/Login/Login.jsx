import React from 'react'

import './index.scss';
import Header from '../../components/header/Header';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <section className='login'>
      <Header></Header>
        <form action="">
      <h1>Acesse com seu login ou cadastre-se!</h1>
      <h2>você pode entrar com o seu CPF</h2>

      <div className="login_input_wrapper">
        <label htmlFor="name">Digite seu CPF:</label>
        <input type="text" placeholder='Nome completo' id='name' className='login_input_name'/>
        <label htmlFor="password">Senha</label>
        <input type="password"  id='password' placeholder='*********'/>
      </div>

      <button type='submit'>
        <Link to={"/Home"}>Entrar</Link>
      </button>



      </form>
        </section>
  )
}

export default Login
