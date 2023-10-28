import Home from "./components/Home";
import Login from "./components/login";
import Favorite from "./components/Favorite";
import SignUp from "./components/SignUp";
import NoPage from "./components/NoPage";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import ProductDetails from "./components/ProductDeatils";
import ViewProducts from "./components/ViewProducts";
import UserOption from "./components/useroption";
import { Update } from "./components/Update";
import { PasswordUpdate } from "./components/PasswordUpdate";
import ForgetPassword from "./components/forgetPassword";
import ResetPassword from "./components/ResetPassword";
import About from "./components/About";
import OrderSuccess from "./components/Cart/OrderSccuss";

import Cart from "./components/Cart/cart";
import Shipping from "./components/Cart/shipping";
import Orderconfirm from "./components/Cart/ConfirmOrder";
import Payment from "./components/Cart/Payment";

import Order from "./components/Order/order";
import Orderdetail from "./components/Order/orderdetail";
import UpdatePhoto from "./components/UpdatePhoto";

import "./App.css";

import Dashboard from "./components/Admin/Dashboard";
import AdminProducts from "./components/Admin/adminProducts";
import CreateProducts from "./components/Admin/CreateProducts";
import UpddateProducts from "./components/Admin/UpdateProducts";
import Orderlist from "./components/Admin/Orderlist";
import OrderEdit from "./components/Admin/OrderEdit";
import Userlist from "./components/Admin/userlist";
import Productsreview from "./components/Admin/Productsreview";

import { Routes, Route } from "react-router-dom";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { useEffect, useState } from "react";
import store from "./Redux";

import { useSelector } from "react-redux";

import { loaduser } from "./reduxbox/action/UserAction";
import axios from "axios";

function App() {
  const [stripeApitkey, setstripeApitkey] = useState("");

  async function getStripeApiKey() {
    try {
      const { data } = await axios.get("/api/v2/sendApiPayments");
      setstripeApitkey(data.api_key);
    } catch (error) {
      // console.log(error);
    }
  }

  useEffect(() => {
    store.dispatch(loaduser());
    getStripeApiKey();
  }, []);

  const { isAuthenticated, loginsignUp } = useSelector(
    (state) => state.loginsignUp
  );

  return (
    <>
      {isAuthenticated && <UserOption user={loginsignUp} />}
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/Contact" element={<Contact />} />

        <Route exact path="/Favorite" element={<Favorite />} />

        <Route exact path="/About" element={<About />} />

        <Route exact path="/Cart" element={<Cart />} />

        <Route exact path="/orders" element={<Order />} />

        <Route exact path="/Shipping" element={<Shipping />} />

        <Route exact path="/order/confirm" element={<Orderconfirm />} />

        {stripeApitkey && (
          <Route
            exact
            path="/process/payment"
            element={
              <Elements stripe={loadStripe(stripeApitkey)}>
                <Payment />
              </Elements>
            }
          />
        )}

        <Route exact path="/success" element={<OrderSuccess />} />

        <Route path="/orders/:id" element={<Orderdetail />} />

        <Route exact path="/ForgetPassword" element={<ForgetPassword />} />

        <Route exact path="/Profile" element={<Profile />} />

        <Route exact path="/Password/Update" element={<PasswordUpdate />} />

        <Route exact path="/me/update" element={<Update />} />

        <Route exact path="/photo/pic" element={<UpdatePhoto />} />

        <Route exact path="/Login" element={<Login />} />

        <Route exact path="/signUps" element={<SignUp />} />

        <Route path="password/reset/:token" element={<ResetPassword />} />

        <Route path="/products/:id" element={<ProductDetails />} />

        <Route exact path="/viewProducts" element={<ViewProducts />} />

        <Route exact path="/admin/controller" element={<Dashboard />} />

        <Route exact path="/admin/ALLproducts" element={<AdminProducts />} />

        <Route
          exact
          path="/admin/CreateProducts"
          element={<CreateProducts />}
        />

        <Route
          exact
          path="/admin/product/edit/:id"
          element={<UpddateProducts />}
        />

        <Route exact path="/admin/orders" element={<Orderlist />} />

        <Route  path="/admin/orders/edit/:id" element={<OrderEdit />} />

        <Route exact path="/admin/users" element={<Userlist />} />
        
        <Route exact path="/admin/review" element={<Productsreview />} />

        {/* error pages */}
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
