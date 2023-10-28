import React from "react";
import ReactStars from "react-rating-stars-component";
import profit from "../images/img/people/3.png";

import { Rating } from "@mui/material";

export const ReviewCard = ({ review }) => {
  // const option = {
  //   edit: false,
  //   color: "rgba(20 , 20 , 20 ,0.1)",
  //   activeColor: "tomato",
  //   isHalf: true,
  //   value: review.rating,
  // };

  const option = {
    edit: false,
    color: "rgba(20, 20, 20, 0.1)",
    activeColor: "tomato",
    isHalf: true,
    value: review.rating,
  };
  return (
    <>
      <div className="reviewCard">
        <img src={profit} alt="Product review" />
        <p>{review.name}</p>
        <Rating {...option} />
        <span>{review.Comment}</span>
      </div>
    </>
  );
};
