import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./SignUp.css";

import { signUp } from "../reduxbox/action/UserAction";

import { useDispatch, useSelector } from "react-redux";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setdata] = useState({
    Name: "",
    Email: "",
    Password: "",
    Address: "",
    PhoneNumber: "",
  });
  const { isAuthenticated, Error } = useSelector((state) => state.loginsignUp);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
    if (Error) {
      alert(Error);
    }
  }, [isAuthenticated, navigate, Error]);

  const onchanges = async (e) => {
    e.preventDefault();

    dispatch(
      signUp(
        data.Name,
        data.Email,
        data.Password,
        data.Address,
        data.PhoneNumber
      )
    );
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata((values) => ({ ...values, [name]: value }));
    
  };

  return (
    <>
      <div className="img_center">
        <div className="sign-page">
          <h1>Sign up</h1>
          <form
            onSubmit={onchanges}
            method="POST"
            encType="multipart/form-data"
          >
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="Name"
              value={data.Name}
              onChange={handleChange}
            />

            <label htmlFor="Email">Email</label>
            <input
              type="email"
              id="Email"
              name="Email"
              value={data.Email}
              onChange={handleChange}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="Password"
              value={data.Password}
              onChange={handleChange}
            />

            <label htmlFor="Address">Address</label>
            <input
              type="text"
              name="Address"
              value={data.Address}
              onChange={handleChange}
            />

            <label htmlFor="Phone Number">Phone Number</label>
            <input
              type="number"
              name="PhoneNumber"
              value={data.PhoneNumber}
              onChange={handleChange }
            />
            <button type="submit">Sign up</button>
            <Link to="/Login" style={{ backgroundColor: "blue" }} type="submit">
              Login
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
