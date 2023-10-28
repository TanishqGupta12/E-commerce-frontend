import {
  User_REQUEST,
  User_SUCCESS,
  User_FAIL,
  CLEAR_ERRORS,
} from "../constant/UserConstants";

import {
  Sign_REQUEST,
  Sign_SUCCESS,
  Sign_FAIL,
} from "../constant/UserConstants";

import {
  Load_REQUEST,
  Load_SUCCESS,
  Load_FAIL,
} from "../constant/UserConstants";

import { Logout_SUCCESS, Logout_FAIL } from "../constant/UserConstants";

import {
  UPDATE_REQUEST,
  UPDATE_SUCCESS,
  UPDATE_RESET,
  UPDATE_FAIL,
} from "../constant/UserConstants";
import {
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_RESET,
  UPDATE_PASSWORD_FAIL,
} from "../constant/UserConstants";

import {
  forget_PASSWORD_REQUEST,
  forget_PASSWORD_SUCCESS,
  forget_PASSWORD_RESET,
  forget_PASSWORD_FAIL,
} from "../constant/UserConstants";

import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
} from "../constant/UserConstants";

import {
  PHOTOS_UPDATE_REQUEST,
  PHOTOS_UPDATE_SUCCESS,
  PHOTOS_UPDATE_RESET,
  PHOTOS_UPDATE_FAIL,
} from "../constant/UserConstants";

import {
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  ALL_USERS_FAIL,
  USERS_DELETE_REQUEST,
  USERS_DELETE_SUCCESS,
  USERS_DELETE_FAIL,
  USERS_DELETE_RESET,
} from "../constant/UserConstants";

export const userReducer = (state = { loginsignUp: {} }, action) => {
  switch (action.type) {
    case User_REQUEST:
    case Sign_REQUEST:
    case Load_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case User_SUCCESS:
    case Sign_SUCCESS:
    case Load_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        loginsignUp: action.payload.user,
      };

    case Logout_SUCCESS:
      return {
        loading: false,
        isAuthenticated: false,
        loginsignUp: null,
      };
    case User_FAIL:
    case Sign_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        loginsignUp: null,
        Error: action.payload.message,
      };
    case Load_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        loginsignUp: null,
      };

    case Logout_FAIL:
      return {
        ...state,
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

export const ProfileUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_REQUEST:
    case UPDATE_PASSWORD_REQUEST:
    case PHOTOS_UPDATE_REQUEST:
    case USERS_DELETE_REQUEST:
    
      return {
        ...state,
        loading: true,
      };
    case UPDATE_SUCCESS:
    case UPDATE_PASSWORD_SUCCESS:
    case PHOTOS_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload.success,
      };
    case USERS_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        isDelete: action.payload.success,
      };
    case UPDATE_FAIL:
    case UPDATE_PASSWORD_FAIL:
    case PHOTOS_UPDATE_FAIL:
    case USERS_DELETE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_RESET:
    case UPDATE_PASSWORD_RESET:
    case PHOTOS_UPDATE_RESET:
    case USERS_DELETE_RESET:
      return {
        ...state,
        isUpdated: false,
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

export const forgetReducer = (state = {}, action) => {
  switch (action.type) {
    case forget_PASSWORD_REQUEST:
    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case forget_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        success: action.payload.success,
      };

    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.success,
      };
    case forget_PASSWORD_FAIL:
    case RESET_PASSWORD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case forget_PASSWORD_RESET:
      return {
        ...state,
        isUpdated: false,
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

export const AlluserReducer = (state = { }, action) => {
  switch (action.type) {
    case ALL_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        ALLUSERS: action.payload.data,
        success: action.payload.success,
        count: action.payload.count,
      };    
    case ALL_USERS_FAIL:
      return {
        ...state,
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

