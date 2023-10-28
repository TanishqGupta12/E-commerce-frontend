import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgetpassword } from "../reduxbox/action/UserAction";
import { useNavigate } from "react-router-dom";


import "./login.css";

const ForgetPassword = () => {
  const Dispatch = useDispatch();
  const { message, success } = useSelector((state) => state.forget);
  
  const [email, setEmail] = useState("");
  const navigate = useNavigate();


  const onchanges = (e) => {
    e.preventDefault();
    const myfrom = new FormData();
    myfrom.set("Email", email);
    Dispatch(forgetpassword(myfrom));
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    if (success) {
      alert(message);
      navigate('/')
    }
  }, [message, success ,navigate]);
  return (
    <>
      <div className="img_center">
        <div className="login-page">
          <h1 className="login-page_h1">forgetPassword </h1>
          <form method="POST" onSubmit={onchanges} className="login-page_from">
            <label className="login-page_label" htmlFor="username">
              EMAIL
            </label>
            <input
              className="login-page_input"
              type="email"
              name="Email"
              value={email}
              onChange={handleChange}
              // onChange={(e) => setEMAIL({ ...cEMAIL, Email: e.target.value })}
            />

            <button className="login-page_button" type="submit">
              GO.....
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
