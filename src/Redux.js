import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Import your reducers here
import {ProductReducer } from './reduxbox/reduxer/ProductReducer';
import { productDetailsReducer } from './reduxbox/reduxer/ProductReducer';
import { newReviewReducer  , newProductsReducer ,UpdateandDeleteProductsReducer ,GetandDeleteReviewReducer } from './reduxbox/reduxer/ProductReducer';

import {userReducer } from './reduxbox/reduxer/UserReducer';
import {ProfileUpdateReducer } from './reduxbox/reduxer/UserReducer';
import { forgetReducer , AlluserReducer }  from './reduxbox/reduxer/UserReducer';

import { cartReducer }  from './reduxbox/reduxer/OrderReducer';

import { myOrdersReducer, newOrderReducer ,orderDetailsReducer , allOrdersReducer , orderReducer} from "./reduxbox/reduxer/OrderDetailReduxer";

// Combine your reducers into a root reducer
const rootReducer = combineReducers({
  products: ProductReducer,
  productDetails: productDetailsReducer,
  loginsignUp :userReducer,
  ProfileUPdate :  ProfileUpdateReducer,
  forget :forgetReducer,
  carts : cartReducer,

  newOrder : newOrderReducer,
  Myorder: myOrdersReducer,
  
  orderDetails : orderDetailsReducer,
  newReview : newReviewReducer,
  
  newProduct : newProductsReducer,
  UpdateandDeleteProducts : UpdateandDeleteProductsReducer,

  allOrders: allOrdersReducer,
  order: orderReducer,
  Allusers : AlluserReducer,
  GetandDeleteReview : GetandDeleteReviewReducer

});

// Set up your initial state
const initialState = {
  carts :{
    cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
    shippingInfo: localStorage.getItem("shippingInfo")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  }
};

// Set up your middleware (in this case, just thunk)
const middleware = [thunk];

// Create your store using createStore and pass in your root reducer, initial state, and middleware

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

