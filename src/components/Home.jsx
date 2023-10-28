import Loader from "../Loader/Loader";

import React, { useEffect } from "react";
import HomeSide from "../Home/Home_side";

import { Link } from "react-router-dom";
// import "../index.css";
import { getAllProducts } from "../../src/reduxbox/action/ProductsAction";
import { useSelector, useDispatch } from "react-redux";

import Button from "@mui/material/Button";

import Product from "./Product";

import "./Home.css";
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  // const { loading , error , products , ProductsCount} = useSelector((state) => state.products.Products);
  const { loading, Products } = useSelector((state) => state.products);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
        <HomeSide />
        <div className="classline">
          <h1>GET START</h1>
          <h2>
            YOUR FAVRIOT <span class="typewriter thick"></span>
          </h2>
        </div>
        
        <div className="container" id="container">
          {Products &&
            Products
              .slice(0, 8)
              .map((products) => (
                <Product key={products._id} productdata={products} />
              ))}
        </div>{" "}
        <div className="ViewProducts">
          <Link to="/viewProducts">
            <Button>view Products</Button>
          </Link>
        </div>
      </>
      )}
    </>
  );
};

export default Home;
