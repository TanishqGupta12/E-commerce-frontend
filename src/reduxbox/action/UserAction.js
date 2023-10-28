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
  UPDATE_FAIL,
} from "../constant/UserConstants";

import {
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  // UPDATE_PASSWORD_RESET,
  UPDATE_PASSWORD_FAIL,
} from "../constant/UserConstants";

import {
  PHOTOS_UPDATE_REQUEST,
  PHOTOS_UPDATE_SUCCESS,
  PHOTOS_UPDATE_FAIL,
} from "../constant/UserConstants";

import {
  forget_PASSWORD_REQUEST,
  forget_PASSWORD_SUCCESS,
  // forget_PASSWORD_RESET,
  forget_PASSWORD_FAIL,
} from "../constant/UserConstants";

import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
} from "../constant/UserConstants";

import {
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  ALL_USERS_FAIL,
  USERS_DELETE_REQUEST,
  USERS_DELETE_SUCCESS,
  USERS_DELETE_FAIL,
} from "../constant/UserConstants";

import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: User_REQUEST });
    const { data } = await axios.post(
      "/api/v1/login",
      {
        Email: email,
        Password: password,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    dispatch({ type: User_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: User_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const signUp =
  (Name, Email, Password, Address, PhoneNumber) => async (dispatch) => {
    try {
      dispatch({ type: Sign_REQUEST });

      const { data } = await axios.post(
        `/api/v1/SignUp`,
        {
          Name,
          Email: Email,
          Password: Password,
          Address: Address,
          PhoneNumber: parseInt(PhoneNumber),
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      dispatch({ type: Sign_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: Sign_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// load u   ser

export const loaduser = () => async (dispatch) => {
  try {
    dispatch({ type: Load_REQUEST });

    const { data } = await axios.get("/api/v1/me");
    // console.log(data);
    dispatch({ type: Load_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: Load_FAIL,
      payload: error.response
        ? error.response.data.message
        : "Unknown error occurred",
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    await axios.get("/api/v1/logout");

    dispatch({ type: Logout_SUCCESS });
  } catch (error) {
    const errorMessage = error.response
      ? error.response.data.message
      : "Unknown error occurred";
    dispatch({
      type: Logout_FAIL,
      payload: errorMessage,
    });
  }
};

export const updatePassword = (password) => async (dispatch) => {
  try {
    console.log(password);
    dispatch({ type: UPDATE_PASSWORD_REQUEST });

    const { data } = await axios.put("/api/v1//Password/update", password, {
      headers: { "Content-Type": "application/json" },
    });
    dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data });
  } catch (error) {
    if (error.response) {
      // The error has a response from the server
      dispatch({
        type: UPDATE_PASSWORD_FAIL,
        payload: error.response.data.message,
      });
    } else {
      // Network error or no response received
      dispatch({
        type: UPDATE_FAIL,
        payload: "An error occurred. Please try again later.",
      });
    }
  }
};

export const update = (formData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_REQUEST });

    const { data } = await axios.put("/api/v1/me/update", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    dispatch({ type: UPDATE_SUCCESS, payload: data });
  } catch (error) {
    if (error.response) {
      // The error has a response from the server
      dispatch({
        type: UPDATE_FAIL,
        payload: error.response.data.message,
      });
    } else {
      // Network error or no response received
      dispatch({
        type: UPDATE_FAIL,
        payload: "An error occurred. Please try again later.",
      });
    }
  }
};

export const Photosupdate = (fromdata) => async (dispatch) => {
  try {
    console.log(fromdata);
    dispatch({ type: PHOTOS_UPDATE_REQUEST });

    const { data } = await axios.post("/api/v1/me/update/pic", fromdata, {
      headers: { "Content-Type": "application/json" },
    });
    dispatch({ type: PHOTOS_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    if (error.response) {
      // The error has a response from the server
      dispatch({
        type: PHOTOS_UPDATE_FAIL,
        payload: error.response.data.message,
      });
    } else {
      // Network error or no response received
      dispatch({
        type: PHOTOS_UPDATE_FAIL,
        payload: "An error occurred. Please try again later.",
      });
    }
  }
};

export const forgetpassword = (Email) => async (dispatch) => {
  try {
    dispatch({ type: forget_PASSWORD_REQUEST });

    const { data } = await axios.post("/api/v1/password/forget", Email, {
      headers: { "Content-Type": "application/json" },
    });
    dispatch({ type: forget_PASSWORD_SUCCESS, payload: data });
  } catch (error) {
    if (error.response) {
      // The error has a response from the server
      dispatch({
        type: UPDATE_FAIL,
        payload: error.response.data.message,
      });
    } else {
      // Network error or no response received
      dispatch({
        type: forget_PASSWORD_FAIL,
        payload: "An error occurred. Please try again later.",
      });
    }
  }
};

export const Resetpassword =
  (Password, confirmPassword, token) => async (dispatch) => {
    try {
      dispatch({ type: RESET_PASSWORD_REQUEST });

      const { data } = await axios.put(
        `/api/v1/password/reset/${token}`,
        {
          Password: Password,
          ConfirmPassword: confirmPassword,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data });
    } catch (error) {
      // Network error or no response received
      dispatch({
        type: RESET_PASSWORD_FAIL,
        payload: "An error occurred. Please try again later.",
      });
    }
  };

// admin

export const getalluser = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_USERS_REQUEST });

    const { data } = await axios.get(`/api/v1/admin/users`);
    dispatch({ type: ALL_USERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ALL_USERS_FAIL,  payload : error.response.data.message });
  }
};

export const Deleteuser = (ids) => async (dispatch) => {
  try {
    dispatch({ type: USERS_DELETE_REQUEST });

    const { data } = await axios.delete(`/api/v1/admin/users/${ids}`);
    dispatch({ type: USERS_DELETE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USERS_DELETE_FAIL,  payload : error.response.data.message });
  }
};

export const CLEARERRORS = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
