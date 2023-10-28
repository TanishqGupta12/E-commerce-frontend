


import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    SAVE_SHIPPING_INFO,
  } from "../constant/OrderConstants";
  import axios from "axios";
  
  // Add to Cart
  export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
    try {
     const { data } = await axios.get(`/api/v1/products/${id}`);
    dispatch({
      type: ADD_TO_CART,
      payload: {
        product: data.product._id,
        name: data.product.NameProducts,
        price: data.product.PriceProduct,
        image: data.product.image[0].url_id,
        stock: data.product.stock,
        quantity,
      },
    });
  
    localStorage.setItem("cartItems", JSON.stringify(getState().carts.cartItems))
    } catch (error) {
        console.log(error);
    }
  };
  
  // REMOVE FROM CART
  export const removeItemsFromCart = (id) => async (dispatch, getState) => {
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: id,
    });
  
    // localStorage.removeItem("cartItems", JSON.stringify(getState().cart.cartItems));
    localStorage.removeItem("cartItems");

  };
  
  // SAVE SHIPPING INFO
  export const saveShippingInfo = (data) => async (dispatch) => {
    dispatch({
      type: SAVE_SHIPPING_INFO,
      payload: data,
    });
  
    localStorage.setItem("shippingInfo", JSON.stringify(data));
  };