import React from "react";

import CheckoutSteps from "./CheckoutSteps";
import { useSelector } from "react-redux";
import "./shipping.css";
import { Link } from "react-router-dom";
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js'
import { Button, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";
export default function ConfirmOrder() {
  const navigate = useNavigate();
  const { cartItems, shippingInfo } = useSelector((state) => state.carts);
  const { loginsignUp } = useSelector((state) => state.loginsignUp);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const shippingCharges = subtotal > 5000 ? 0 : 200;

  const tax = subtotal * 0.18;

  const totalPrice = subtotal + tax + shippingCharges;

  const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;
  const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
  const proceedToPayment = () => {
    const data = {
      subtotal,
      shippingCharges,
      tax,
      totalPrice,
    };

    sessionStorage.setItem("orderInfo", JSON.stringify(data));

    navigate("/process/payment");
  };
  return (
    <>
      <CheckoutSteps activeStep={1} />
      <div className="ConfirmOrder">
        <div>
          <div className="confirmshippingArea">
            <Typography> Shipping Info</Typography>
            <div className="confirmshippingAreaBox">
              <div>
                <p>Name:</p>
                <span>{loginsignUp.Name}</span>
              </div>
              <div>
                <p>Phone:</p>
                <span>{shippingInfo.phoneNo}</span>
              </div>
              <div>
                <p>Address:</p>
                <span>{address}</span>
              </div>
            </div>
          </div>
          <div className="confirmCartItems">
            <Typography> Your Cart Items: </Typography>
            <div className="confirmCartItemsContainer">
              {cartItems &&
                cartItems.map((item) => (
                  <div key={item.produc}>
                    <img src={item.image}></img>
                    {item.quantity} X Price :{item.price}=
                    <h3>{item.quantity * item.price}</h3>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div>
          <div className="orderSummary">
            <Typography>Order Summery</Typography>
            <div>
              <div>
                <p>Subtotal:</p>
                <span>Price{subtotal}</span>
              </div>
              <div>
                <p>Shipping Chrges:</p>
                <span>{shippingCharges}</span>
              </div>
              <div>
                <p>GST:</p>
                
                <span>{Math.round(tax)}</span>
              </div>
            </div>
            <div className="orderSummaryTotal">
              <p>
                <b>Total:</b>
              </p>
              <span>{totalPrice}</span>
            </div>
            <Elements  stripe={stripePromise}>
            <Button onClick={proceedToPayment}>Proceed to Payment</Button>
            </Elements>
          </div>
        </div>
      </div>
    </>
  );
}
