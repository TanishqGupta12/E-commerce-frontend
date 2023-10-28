import React from "react";
import { Link } from "react-router-dom";

import ReactStars from "react-rating-stars-component";
// import a1 from "../images/img/products/a1.png"
import { Rating } from "@mui/material";


const Product = ({ productdata }) => {


  const option = {
    edit: false,
    color: "rgba(20, 20, 20, 0.1)",
    activeColor: "tomato",
    isHalf: true,
    value: productdata.ratings,
  };
  return (

    <Link className="ProductCard" to={`/products/${productdata._id}`}>
    {/* {console.log(productdata)}   */}
      <img src={ productdata.image[0]?.url_id} alt={productdata.NameProducts} />

      <p>{productdata.NameProducts}</p>
      <div className="ReactStars">
        <Rating {...option} value={productdata.ratings} className="Rating" />
        <span className="Reviews">({productdata.numofReview} Reviews)</span>
      </div>
      <span className="sapns">₹ {productdata.PriceProduct}</span>
    </Link>
  );
};

export default Product;


