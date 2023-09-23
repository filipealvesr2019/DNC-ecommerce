import { Link } from "react-router-dom"
import "./index.scss"
import React from 'react'

const ProductsCard = ({data}) => {
  
  return (
    <div className="home__card">
        <img src={data.imgPath} alt="" /><img/>
        <div className="home__card-description">
            <p>{data.title}</p>
            <button>
                <Link to={`/products/${data.id}`}>Comprar Look</Link>
            </button>
        </div>
    console.log(data)
    </div>
  )
}

export default ProductsCard