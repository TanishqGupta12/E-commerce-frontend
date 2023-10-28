
import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";

import { useDispatch  } from "react-redux";

import { removeItemsFromCart } from "../../reduxbox/action/OrderAction";

const Cartcard = ({ Cart }) => {
  const dispatch = useDispatch()

  const deletedata = (id)=>{
    dispatch(removeItemsFromCart(id))
  }
  return (
    <>
      <div className="cartitemcard">
        {console.log(Cart.image)}
        <img src={Cart.image} alt="image4"></img>
        <div>
          <Link to={`/product/${Cart.product}`}>{Cart.name}</Link>
          <span>{`Price : ${Cart.price}`}</span>
          <p onClick={()=>{deletedata(Cart.product)}} >Remove</p>
        </div>
      </div>
    </>
  );
};

export default Cartcard;
