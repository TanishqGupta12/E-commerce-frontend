import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { Button } from "@mui/material";
import { ReviewCard } from "./ReviewCard";
import "./ProductDeatils.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductDetails,
  newReview,
} from "../reduxbox/action/ProductsAction";


import { DialogActions } from "@mui/material";
import { Dialog } from "@mui/material";
import { DialogContent } from "@mui/material";
import { DialogTitle } from "@mui/material";
import { Rating } from "@mui/material";

import Loader from "../Loader/Loader";

import { addItemsToCart } from "../reduxbox/action/OrderAction";
const ProductDetails = () => {
  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => state.productDetails);
  const { success } = useSelector((state) => state.newReview);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductDetails(id));

    if (success) {
      alert("Review added successfully");
      // dispatch({ NEW_REVIEW_RESET })
    }
  }, [dispatch, id, success]);

  const [curretinput, setinput] = useState(1);
  const [open, setopen] = useState(false);
  const [Ratings, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const SubmitReview = () => {
    const FormDatas = new FormData();

    FormDatas.set("Rating", Ratings);
    FormDatas.set("Comment", comment);
    FormDatas.set("ProductId", id);

    dispatch(newReview(FormDatas));
  };
  const submitReviewTogge = () => {
    open ? setopen(false) : setopen(true);
  };

  const handleQuantityChangeINcrease = () => {
    if (curretinput >= product.stock) {
      return;
    }
    setinput((c) => c + 1);
  };

  const handleQuantityChangedecrease = () => {
    if (curretinput <= 0) {
      return;
    }
    setinput((c) => c - 1);
  };

  const handleAddToCart = () => {
    dispatch(addItemsToCart(id, curretinput));
    alert("items ADDED TO CART");
  };

  const option = {
    edit: false,
    color: "rgba(20, 20, 20, 0.1)",
    activeColor: "tomato",
    isHalf: true,
    value: product.ratings,
  };
  
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="product-container">
            <div>
              {console.log()}
              {product.image &&
                product.image.map((image) => (
                  <img
                    key={product._id}
                    className="product-image"
                    src={image.url_id}
                    alt={image.alt}
                  />
                  ))}
            </div>

            <div>
              <div className="product-details">
                <h1>{product.NameProducts}</h1>
                <p>ID: {product._id}</p>
              </div>

              <div className="product-rating">
                <Rating {...option} value={product.ratings} />
                <span>({product.numofReview} Review)</span>
              </div>

              <div className="product-price">
                <h2>Price: {product.PriceProduct}</h2>

                <div className="product-quantity">
                  <div className="product-quantity-1">
                    <Button onClick={handleQuantityChangedecrease}>-</Button>
                    <input value={curretinput} type="number" readOnly />
                    <Button onClick={handleQuantityChangeINcrease}>+</Button>
                  </div>

                  <Button onClick={handleAddToCart}>ADD TO CART</Button>
                </div>

                <div>
                  status: {}
                  <p
                    className={`product-status ${
                      product.stock < 1 ? "out-of-stock" : "in-stock"
                    }`}
                  >
                    {product.stock < 1 ? "Out of stock" : "In stock"}
                  </p>
                </div>
              </div>

              <div className="product-description">
                <h2>Description:</h2>
                <p>{product.description}</p>
              </div>

              <Button
                onClick={submitReviewTogge}
                className="product-submit-review"
              >
                Submit Review
              </Button>
            </div>
          </div>

          <h3 className="reviewshandling">Reviews</h3>
          <Dialog
            aria-labelledby="simple-dialog-title"
            open={open}
            onClose={submitReviewTogge}
          >
            <DialogTitle>Reviews Comment</DialogTitle>
            <DialogContent className="submitDialog">
              <Rating
                onChange={(e) => setRating(e.target.value)}
                value={Ratings}
                size="large"
              />
              <textarea
                className="submitDialogTextArea"
                cols="50"
                rows="5"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
              <DialogActions>
                <Button
                  onClick={submitReviewTogge}
                  style={{ backgroundColor: "red", color: "white" }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={SubmitReview}
                  style={{ backgroundColor: "Green", color: "white" }}
                >
                  Submit
                </Button>
              </DialogActions>
            </DialogContent>
          </Dialog>

          {product.review && product.review[0] ? (
            <div className="reviews">
              {product.review &&
                product.review.map((review) => <ReviewCard review={review} />)}
            </div>
          ) : (
            <p className="nonreview">No Reviews yet</p>
          )}
        </>
      )}
    </>
  );
};

export default ProductDetails;
