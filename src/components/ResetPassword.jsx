import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Resetpassword } from "../reduxbox/action/UserAction";

// import "../components/styledata.css";
import { useNavigate ,useParams } from "react-router-dom";


const ResetPassword = () => {
  const dispatch = useDispatch();
    const { token } = useParams()
  const navigate = useNavigate();

  const [cnum, setnum] = useState({
    password: "",
    confirmPassword: "",
  });

  const { success ,Error } = useSelector((state) => state.forget);

  const setvalueschange = (e) => {
    const { value, name } = e.target;

    setnum(data => ({...data,[name]: value}));
  };

  const onchanges = (e) => {
    e.preventDefault();
   
   
    dispatch(Resetpassword( cnum.password ,cnum.confirmPassword ,token ));
    
  };

  useEffect(() => {
    if (success) {
      navigate("/login");
    }
    if (Error) {
      alert(Error)
    }
  }, [success, navigate , Error]);

  return (
    <div className="img_center">
      <div className="login-page">
        <h1 className="login-page_h1">Reset Password </h1>
        <form method="POST" onSubmit={onchanges} className="login-page_from">
          <label className="login-page_label" htmlFor="username">
          Password
          </label>
          <input
            className="login-page_input"
            type="password"
            name="password"
            value={cnum.password}
            onChange={setvalueschange}
          />

          <label className="login-page_label" htmlFor="password">
          confirmPassword
          </label>
          <input
            className="login-page_input"
            type="password"
            name="confirmPassword"
            value={cnum.confirmPassword}
            onChange={setvalueschange}
          />

          <button className="login-page_button" type="submit">
            UPDATE 
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
