import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../reduxbox/action/UserAction";

import "./login.css";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [cnum, setnum] = useState({
    username: "",
    password: "",
  });

  const { isAuthenticated , Error } = useSelector((state) => state.loginsignUp);

  const setvalueschange = (e) => {
    const { value, name } = e.target;

    setnum((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  };

  const onchanges = (e) => {
    e.preventDefault();
    dispatch(login(cnum.username, cnum.password));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }

    if (Error) {
      alert(Error)
    }
  }, [isAuthenticated, navigate , Error]);

  return (
    <div className="img_center">
      <div className="login-page">
        <h1 className="login-page_h1">Login</h1>
        <form method="POST" onSubmit={onchanges} className="login-page_from">
          <label className="login-page_label" htmlFor="username">
            Username
          </label>
          <input
            className="login-page_input"
            type="email"
            id="username"
            name="username"
            value={cnum.username}
            onChange={setvalueschange}
          />

          <label className="login-page_label" htmlFor="password">
            Password
          </label>
          <input
            className="login-page_input"
            type="password"
            id="password"
            name="password"
            value={cnum.password}
            onChange={setvalueschange}
          />

          <button className="login-page_button" type="submit">
            Log in
          </button>
          <Link to="/signUps" style={{ backgroundColor: "blue" }}>
            SignUp
          </Link>
          <p>
            <Link to="/ForgetPassword"> ForgetPassword </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
