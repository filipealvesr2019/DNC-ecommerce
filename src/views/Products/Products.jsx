import React from 'react'
import './index.scss';
import { useParams } from 'react-router-dom';
import ProductDetail from '../../components/ProductDetail.jsx/ProductDetail';
import HeaderMenu from '../../components/Header-menu/HeaderMenu';
import Search from '../../components/Search/Search';
const Products = ({data}) => {
  const {productId} = useParams();
  const selectProduct = data.find((product) => product.id == productId)
  return ( <div className="products">
  <HeaderMenu></HeaderMenu>
  <Search></Search>
  <ProductDetail data={selectProduct}/>
  
</div>
)
}

export default Products;
