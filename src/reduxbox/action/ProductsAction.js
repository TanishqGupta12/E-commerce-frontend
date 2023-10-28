// link = `/api/v1/products?keyword=${query}&PriceProduct[gte]=${PriceProduct[0]}&PriceProduct[lte]=${PriceProduct[1]}&ratings[gte]=${Rating}&category=${selectedCategory}`;

import axios from "axios";
import {
  PRODUCT_DEATILS_REQUEST,
  PRODUCT_DEATILS_SUCCESS,
  PRODUCT_DEATILS_FAIL,
} from "../constant/ProductsConstants";
import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_REQUEST,
  CLEAR_ERRORS,
} from "../constant/ProductsConstants";
import {
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  NEW_REVIEW_FAIL,
} from "../constant/ProductsConstants";

import {
  ALL_ADMIN_PRODUCT_REQUEST,
  ALL_ADMIN_PRODUCT_SUCCESS,
  ALL_ADMIN_PRODUCT_FAIL,
} from "../constant/ProductsConstants";

import {
  NEW_PRODUCT_REQUEST,
  NEW_PRODUCT_SUCCESS,
  NEW_PRODUCT_FAIL,
  NEW_PRODUCT_RESET,
} from "../constant/ProductsConstants";

import {
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_RESET,
} from "../constant/ProductsConstants";

import {
  GET_REVIEW_REQUEST,
  GET_REVIEW_SUCCESS,
  GET_REVIEW_FAIL,
  DELETE_REVIEW_REQUEST,
  DELETE_REVIEW_SUCCESS,
  DELETE_REVIEW_FAIL,
} from "../constant/ProductsConstants";

export const getAllProducts =
  (query = "", PriceProduct = [0, 50000], Rating = 0, selectedCategory) =>
  async (dispatch) => {
    try {
      // &PriceProduct[gte]=${PriceProduct[1]
      dispatch({ type: ALL_PRODUCT_REQUEST });
      let link = `/api/v1/products?keyword=${query}&ratings[gte]=${Rating}&PriceProduct[gte]=${PriceProduct[0]}&PriceProduct[lte]=${PriceProduct[1]}`;

      if (selectedCategory) {
        link = `/api/v1/products?keyword=${query}&ratings[gte]=${Rating}&category=${selectedCategory}&PriceProduct[gte]=${PriceProduct[1]}`;
      }
      // const { data } = await axios.get('/api/v1/products');
      const { data } = await axios.get(link);
      console.log(data);
      dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };
export const getAdminProducts = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_ADMIN_PRODUCT_REQUEST });

    const { data } = await axios.get(`/api/v1/getAdmin/products`);
    dispatch({
      type: ALL_ADMIN_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_ADMIN_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DEATILS_REQUEST });
    const { data } = await axios.get(`/api/v1/products/${id}`);
    dispatch({
      type: PRODUCT_DEATILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DEATILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// NEW REVIEW
export const newReview = (reviewData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_REVIEW_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(`/api/v1/review`, reviewData, config);

    dispatch({
      type: NEW_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const createProducts = (myfrom) => async (dispatch) => {
  try {
    dispatch({ type: NEW_PRODUCT_REQUEST });
    console.log(myfrom);
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(`/api/v1/products/new`, myfrom, config);

    dispatch({
      type: NEW_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const DeleteProducts = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DELETE_REQUEST });

    const { data } = await axios.delete(`/api/v1/admin/products/${id}`);
    dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data });
    dispatch({ type: PRODUCT_DELETE_RESET });
  } catch (error) {
    // Network error or no response received
    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload: "An error occurred. Please try again later.",
    });
  }
};

export const UPDATEsProducts = (id, myfrom) => async (dispatch) => {
  console.log(id, myfrom);
  try {
    dispatch({ type: PRODUCT_DELETE_REQUEST });
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v1/admin/products/${id}`,
      myfrom,
      config
    );
    dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data });
  } catch (error) {
    // Network error or no response received
    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload: "An error occurred. Please try again later.",
    });
  }
};
export const GetReview = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_REVIEW_REQUEST });

    const { data } = await axios.get(`/api/v1/reviews?id=${id}`);
    dispatch({ type: GET_REVIEW_SUCCESS, payload: data });
  } catch (error) {
    // Network error or no response received
    dispatch({
      type: GET_REVIEW_FAIL,
      payload: "An error occurred. Please try again later.",
    });
  }
};
// export const DeleteReview = (Products ,ids) => async (dispatch) => {
//   try {
//     dispatch({ type: DELETE_REVIEW_REQUEST });
//     console.log(Products ,ids);
//     const { data } = await axios.delete(`/api/v1/reviews?id=${Products}&productsId=${ids}`);
//     dispatch({ type: DELETE_REVIEW_SUCCESS, payload: data });
//   } catch (error) {
//     // Network error or no response received
//     dispatch({
//       type: DELETE_REVIEW_FAIL,
//       payload: "An error occurred. Please try again later.",
//     });
//   }
// };

export const CLEARERRORS = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
