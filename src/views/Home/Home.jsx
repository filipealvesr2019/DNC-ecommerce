import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss';
import HeaderMenu from '../../components/Header-menu/HeaderMenu';
import Search from '../../components/Search/Search';
const Home = () => {
  return <div className="home">
    <HeaderMenu></HeaderMenu>
    <Search></Search>
  </div>
}

export default Home;
