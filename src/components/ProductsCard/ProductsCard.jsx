import { Link } from "react-router-dom";
import "./index.scss";
import React from "react";

const ProductsCard = ({ data }) => {
  return (
    <div className="home__card" >
      <div className="space"></div>
      <div className="card-container">
        <div className="image-container home__card" style={{border: "1px solid #ccc",
            borderRadius: "5px",}}>
          <img className="image" src={data.imgPath} alt="" />
          <img />
        </div>

        <div
          className="home__card-description "
          style={{
            textAlign: "center",
            justifyContent: "center",
            border: "1px solid #ccc",
            height: "15vh",
            borderRadius: "5px",
          }}
        >
          <p>{data.title}</p>
          <a href="">
            <button className="button">
              <Link to={`/products/${data.id}`}>Comprar Look</Link>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
