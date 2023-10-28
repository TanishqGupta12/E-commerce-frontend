import React, { useState } from "react";

import SilderDashboard from "./SilderDashboard";
import { Button, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import {
  createProducts,
  CLEARERRORS,
} from "../../reduxbox/action/ProductsAction";

export default function CreateProducts() {
  const [NameProducts, setNameProducts] = useState("");
  const [PriceProduct, setPriceProduct] = useState(0);
  const [description, setdescription] = useState("");

  const [category, setCategory] = useState("");
  const [stock, setstock] = useState(0);

  const [image, setimage] = useState("");
  const categories = [
    "Laptop",
    "Tops",
    "Camera",
    "Moblie",
    "Camera",
    "FootWear",
  ];

  const { loading, error, success } = useSelector((state) => state.newProduct);
  const Dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      alert(error);
      Dispatch(CLEARERRORS());
    }

    if (success) {
      alert("SuCCESSFULL ADD PRODUCTED");
    }
  }, [Dispatch, error, success]);

  const CreateProducts = (e) => {
    e.preventDefault();

    const myfrom = new FormData();

    myfrom.set("NameProducts", NameProducts);
    myfrom.set("description", description);
    myfrom.set("PriceProduct", PriceProduct);
    myfrom.set("category", category);
    myfrom.set("stock", stock);
    myfrom.set("image", image);

    Dispatch(createProducts(myfrom));
  };

  return (
    <>
      <div className="dashboard">
        <SilderDashboard />
        <div className="dashboardContainer">
          <Typography component="h1">Create Products</Typography>
          <div className="newProductsContainer">
            <form
              className="createProductionForm"
              encType="multipart/form-data"
              onSubmit={CreateProducts}
            >
              <div>
                <select onChange={(e) => setCategory(e.target.value)}>
                  <option value="">Choose Category</option>
                  {categories.map((cate) => (
                    <option key={cate} value={cate}>
                      {cate}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Product Name"
                  required
                  name={NameProducts}
                  onChange={(e) => setNameProducts(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="Number"
                  placeholder="PriceProduct"
                  required
                  name={PriceProduct}
                  onChange={(e) => setPriceProduct(e.target.value)}
                />
              </div>

              <div>
                <input
                  type="Number"
                  placeholder="stock"
                  required
                  name={stock}
                  onChange={(e) => setstock(e.target.value)}
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="image URL"
                  required
                  name={image}
                  onChange={(e) => setimage(e.target.value)}
                />
              </div>
              <div>
                <textarea
                  cols="40"
                  rows="5"
                  placeholder="description"
                  required
                  name={description}
                  onChange={(e) => setdescription(e.target.value)}
                  className="lastChildDiv"
                />
              </div>
              <Button type="Submit" disabled={loading ? true : false}>
                Create
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
