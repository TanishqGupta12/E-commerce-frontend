import React, { useRef } from 'react'
import CheckoutSteps from "./CheckoutSteps";

import { useDispatch , useSelector } from "react-redux";

// import { Typography } from '@mui/material';

import axios from 'axios';

import {
    CardCvcElement,
    CardExpiryElement,
    CardNumberElement,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';

  import EventIcon from '@mui/icons-material/Event';
  import VpnKeyIcon from '@mui/icons-material/VpnKey';
  import CreditCardIcon from '@mui/icons-material/CreditCard';
import MetaData from '../../MetaData';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { clearErrors, createOrder } from '../../reduxbox/action/OrderDetailAction';


export default function Payment() {
  const nav = useNavigate()
  const Dispatch = useDispatch()
    const paybtn = useRef(null)
    const stripe = useStripe()
    const Elements = useElements()
    const  orderInfo =JSON.parse(sessionStorage.getItem("orderInfo"))
    const { cartItems, shippingInfo } = useSelector((state) => state.carts);
  const { loginsignUp } = useSelector((state) => state.loginsignUp);
  const { error } = useSelector((state) => state.newOrder);

  const [isProcessing, setIsProcessing] = React.useState(false);  
  
  const paymentsdata = {
    amount : Math.round(orderInfo.totalPrice)
  }

  const order = {
    shippingInfo,
    orderItems : cartItems,
    itemsPrice : orderInfo.subtotal,
    taxPrice : orderInfo.tax,
    shippingPrice : orderInfo.shippingcharges,
    totalPrice : orderInfo.totalPrice,
    
  }

  const SubmitHandler = async (e) => {
    setIsProcessing(true);
    e.preventDefault();

    paybtn.current.disabled = true;
  
    try {
      const { data } = await axios.post('/api/v2/payment/process', paymentsdata, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const client_secret = data.client_secret;

      if ( !stripe || !Elements) {
        return
      }
      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: Elements.getElement(CardNumberElement),
          billing_details: {
            name: loginsignUp.Name,
            email: loginsignUp.Email,
            address: {
              line1: shippingInfo.address,
              city: shippingInfo.city,
              state: shippingInfo.state,
              postal_code: shippingInfo.pincode,
            },
          },
        },
      });
  
      if (result.error) {
        paybtn.current.disabled = false;
        alert(result.error.message);
      } else {
        if (result.paymentIntent.status === 'succeeded') {

          order.paymentInfo = {
              id : result.paymentIntent.id,
              status : result.paymentIntent.status,

          }
          Dispatch(createOrder(order))
          nav('/success');
        } else {
          alert('There was an issue while processing the payment.');
        }
      } 
    } catch (error) {
      alert(error.response.data.message);
      paybtn.current.disabled = false;
    } finally {
      setIsProcessing(false); 
    }

  };

  useEffect(() => {
    if (error) {
      alert(error)
      Dispatch(clearErrors)
    }
  }, [Dispatch, error])
  
  
  return (
    <>
     
      <MetaData title="Payment" />
      <CheckoutSteps activeStep={2} /> 
      <div className='paymentContainer'>
      
          <form className='paymentForm ' onSubmit={SubmitHandler}>
            {/* Your form content */}
            <div>
              <CreditCardIcon/>
              <CardNumberElement className='paymentInput ' />
            </div>
            <div>
              <EventIcon/>
              <CardExpiryElement className='paymentInput ' />
            </div>
            <div>
              <VpnKeyIcon/>
              <CardCvcElement className='paymentInput ' />
            </div>

            <input type='submit'
            className='paymentFormBtn'
            ref = {paybtn}
            value={`Pay${orderInfo && orderInfo.totalPrice}`} 
            disabled = {isProcessing}
            />
               

          </form>
        
      </div>
    </>
  )
}



// // Create a Stripe instance
// const stripePromise = loadStripe('YOUR_STRIPE_PUBLISHABLE_KEY');

// Wrap your app component with the Elements provider


