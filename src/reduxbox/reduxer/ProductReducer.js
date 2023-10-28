import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_REQUEST,
  CLEAR_ERRORS,
} from "../constant/ProductsConstants";
import {
  PRODUCT_DEATILS_REQUEST,
  PRODUCT_DEATILS_SUCCESS,
  PRODUCT_DEATILS_FAIL,
} from "../constant/ProductsConstants";
import {
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  NEW_REVIEW_FAIL,
  NEW_REVIEW_RESET,
} from "../constant/ProductsConstants";
import {
  ALL_ADMIN_PRODUCT_REQUEST,
  ALL_ADMIN_PRODUCT_SUCCESS,
  ALL_ADMIN_PRODUCT_FAIL,
  // ALL_ADMIN_PRODUCT_RESET,
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
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_RESET,
} from "../constant/ProductsConstants";

import {
  GET_REVIEW_REQUEST,
  GET_REVIEW_SUCCESS,
  GET_REVIEW_FAIL,

  DELETE_REVIEW_REQUEST,
  DELETE_REVIEW_SUCCESS,
  DELETE_REVIEW_FAIL,
  DELETE_REVIEW_RESET
} from "../constant/ProductsConstants";

export const ProductReducer = (state = { Products: [] }, action) => {
  switch (action.type) {
    case ALL_PRODUCT_REQUEST:
    case ALL_ADMIN_PRODUCT_REQUEST:
      return {
        loading: true,
        Products: [],
      };
    case ALL_PRODUCT_SUCCESS:
      return {
        loading: false,
        Products: action.payload.products,
        ProductsCount: action.payload.products.length,
      };
    case ALL_ADMIN_PRODUCT_SUCCESS:
      return {
        loading: false,
        Products: action.payload.products,
      };
    case ALL_PRODUCT_FAIL:
    case ALL_ADMIN_PRODUCT_FAIL:
      return {
        loading: false,
        Error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        Error: null,
      };
    default:
      return state;
  }
};

export const productDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DEATILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case PRODUCT_DEATILS_SUCCESS:
      return {
        loading: false,
        product: action.payload.product,
      };
    case PRODUCT_DEATILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const newReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_REVIEW_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case NEW_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_REVIEW_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
export const newProductsReducer = (state = {Product : {}}, action) => {
  switch (action.type) {
    case NEW_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_PRODUCT_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        Product : action.payload.Product
      };
    case NEW_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_PRODUCT_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
export const UpdateandDeleteProductsReducer = (state = { }, action) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
    case PRODUCT_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
      case PRODUCT_UPDATE_SUCCESS:
    case PRODUCT_DELETE_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,

      };
      case PRODUCT_UPDATE_FAIL:
    case PRODUCT_DELETE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case PRODUCT_UPDATE_RESET:
    case PRODUCT_DELETE_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};


export const GetandDeleteReviewReducer = (state = { }, action) => {
  switch (action.type) {
    case GET_REVIEW_REQUEST:
    case DELETE_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_REVIEW_SUCCESS:
      return {
        loading: false,

        GET_REVIEW: action.payload.reviews,
        success: action.payload.success,

      };
      case DELETE_REVIEW_SUCCESS:
      return {
        loading: false,
        DELETE_REVIEW: action.payload.reviews,
        success: action.payload.success,

      };
      case DELETE_REVIEW_FAIL:
    case   GET_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_REVIEW_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};