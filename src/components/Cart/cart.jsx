
import React from "react";
import "./cart.css";

import Cartcard from "./cartcard";
import { Button } from "@mui/material";

import { useDispatch ,useSelector } from "react-redux";

import { addItemsToCart } from "../../reduxbox/action/OrderAction";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();
  const{ cartItems } = useSelector((state) => state.carts)
  const dispatch = useDispatch()
  
  const handleadd = (id , quantity, stock) => {
    const newquantity = quantity+1
    if (stock <= newquantity ) {
      return;
      
    }
    dispatch(addItemsToCart(id , newquantity))
  };
  const handlesub = (id , quantity) => {
    const newquantity = quantity-1
    
    if (0 >= newquantity) {
      return;
    }
    
    dispatch(addItemsToCart(id , newquantity  ))
    
  };
  
  const handleNegative = () => {
    
    navigate('/Shipping');
  };
  
  return (
    <>
   {/* { console.log(cartItems)} */}
      <div className="cartpage">
        <div className="cartheader">
          <p>Product</p>
          <p>Quantity</p>
          <p>Subtotla</p>
        </div>
        {cartItems && cartItems.map((item)=>(
          <div className="cartcantined">
             <Cartcard Cart={item} />
             <div className="carrtinput">
               {/* {console.log(item)} */}
               <Button onClick={()=>handleadd(item.product , item.quantity , item.stock)} >+</Button>
               <input value={item.quantity} type="number" readOnly />
               <Button onClick={()=>handlesub(item.product , item.quantity , item.stock)} >-</Button>
             </div>
             <div className="Suvtotla">{`Price : ${item.price * item.quantity}`}</div>             
           </div>
        ))}
        <div className="cartGross">
          <div></div>
          <div className="cartGrossBox">
            <p>Gross TOTAL</p>
            {}
            <h3>{cartItems.reduce((acc, item)=> acc + item.quantity * item.price ,0)} </h3>
          </div>
          <div></div>
          <div className="checkout">
          
          <Button className="Button" onClick={handleNegative}>Check out</Button>

          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
