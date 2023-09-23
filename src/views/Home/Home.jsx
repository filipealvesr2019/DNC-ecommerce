import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss';
import HeaderMenu from '../../components/Header-menu/HeaderMenu';
import Search from '../../components/Search/Search';
import ProductsCard from '../../components/ProductsCard/ProductsCard';
const Home = ({data}) => {
  
  return <div className="home">
    <HeaderMenu></HeaderMenu>
    <Search></Search>
    <div className="home__products" >
      <div className="grid-container">
      {
        data.map(product => 
          (<ProductsCard key={product.id} data={product}/>))
      }
      </div>
      
    </div>
    
  </div>
}

export default Home;
