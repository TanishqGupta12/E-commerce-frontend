import React, { useState } from "react";

import SilderDashboard from "./SilderDashboard";
import { Button, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import {
  UPDATEsProducts,
  CLEARERRORS,
  getProductDetails,
} from "../../reduxbox/action/ProductsAction";
import { useParams } from "react-router-dom";

export default function UpddateProducts() {
  // const { Products } = useSelector((state) => state.products);
  const { product } = useSelector((state) => state.productDetails);
  const Dispatch = useDispatch();
  const [NameProducts, setNameProducts] = useState("");
  const [PriceProduct, setPriceProduct] = useState(0);
  const [description, setdescription] = useState("");

  const [category, setcategory] = useState("");
  const [stock, setstock] = useState(0);

  const [image, setimage] = useState("");

  const { id } = useParams();
  const categories = [
    "Laptop",
    "Tops",
    "Camera",
    "Moblie",
    "Camera",
    "FootWear",
  ];
  const { loading, error, success } = useSelector(
    (state) => state.UpdateandDeleteProducts
  );

  useEffect(() => {
    if (product && product._id !== id) {
      Dispatch(getProductDetails(id));
    } else {
      setNameProducts(product.NameProducts);
      setPriceProduct(product.PriceProduct);
      setdescription(product.description);
      setcategory(product.category);
      setstock(product.stock);
      setimage(product.image[0].url_id);

    }

    if (error) {
      alert(error);
      Dispatch(CLEARERRORS());
    }

    if (success) {
      alert("SuCCESSFULL edit");
    }
  }, [Dispatch, error, success, id, product]);

  const CreateProducts = (e) => {
    e.preventDefault();

    const myfrom = new FormData();

    myfrom.set("NameProducts", NameProducts);
    myfrom.set("description", description);
    myfrom.set("PriceProduct", PriceProduct);
    myfrom.set("category", category);
    myfrom.set("stock", stock);
    myfrom.set("image", image);

    Dispatch(UPDATEsProducts(id, myfrom));
  };

  return (
    <>
      <div className="dashboard">
        <SilderDashboard />
        <div className="dashboardContainer">
          <Typography component="h1">Upddate Products</Typography>
          <div className="newProductsContainer">
            <form
              className="createProductionForm"
              encType="multipart/form-data"
              onSubmit={CreateProducts}
            >
              <div>
                <select onChange={(e) => setcategory(e.target.value)}>
                  <option value="">Choose category</option>
                  {categories.map((category, index) => (
                    <option value={category} key={index}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div>
              <input
                type="text"
                placeholder="Product Name"
                required
                name="NameProducts"
                value={NameProducts}
                onChange={(e) => setNameProducts(e.target.value)}
              />
              </div>
              
              <div>

                <input
                  type="Number"
                  placeholder="PriceProduct"
                  required
                  value={PriceProduct}
                  name="PriceProduct"
                  onChange={(e) => setPriceProduct(e.target.value)}
                />
              </div>

              <div>
                <input
                  type="Number"
                  placeholder="stock"
                  required
                  value={stock}
                  name="stock"
                  onChange={(e) => setstock(e.target.value)}
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="image URL"
                  required
                  value={image}
                  name="image URL"
                  onChange={(e) => setimage(e.target.value)}
                />
              </div>
              <div>
                <textarea
                  cols="40"
                  rows="5"
                  name="description"
                  placeholder="description"
                  required
                  value={description}
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
