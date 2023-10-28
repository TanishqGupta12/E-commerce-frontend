import React, { useEffect, useState } from "react";
import Product from "./Product";

import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

import { useDispatch, useSelector } from "react-redux";

import { getAllProducts } from "../reduxbox/action/ProductsAction";

const categories = ["Laptop", "Tops", "Camera", "Moblie" , "Camera" ,"FootWear"];

const ViewProducts = () => {
  const Dispatch = useDispatch();

  const { Error, Products } = useSelector((state) => state.products);

  const [query, setQuery] = useState("");
  const [PriceProduct, setPrice] = useState([0, 50000]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [Rating, setRating] = useState(0);

  useEffect(() => {
    Dispatch(getAllProducts(query, PriceProduct, Rating, selectedCategory));
  }, [Dispatch, query, PriceProduct, Rating, selectedCategory]);

  const priceHandler = (e, newPrice) => {
    setPrice(newPrice);
  };

  return (
    <>
      <div className="bg">
        <input
          type="text"
          placeholder="Let's find something..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search"
        />
      </div>
      <div className="container" id="container">
        {Products.map((product, index) => {
          return <Product key={index} productdata={product} />;
        })}
      </div>

      <div className="filterbox">
        <Typography>Price</Typography>
        <Slider
          value={PriceProduct}
          onChange={priceHandler}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          min={0}
          max={50000}
        ></Slider>
      </div>

      <div className="categorybox">
        <Typography>Category</Typography>
        <ul>
          {categories.map((category) => {
            return (
              <li
                className="category-link"
                key={category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            );
          })}
        </ul>
      </div>
      {console.log(Rating)}

      <fieldset className="fieldset">
    <Typography>Rating</Typography>
    <Slider
    value={Rating}
    onChange={(e,newRating)=>{
      setRating(newRating)
    }}
    aria-labelledby="continous-slider"
    min={0}
    max={5}
    valueLabelDisplay="auto"
    >
    </Slider>
    </fieldset>

    </>
  );
};

export default ViewProducts;


