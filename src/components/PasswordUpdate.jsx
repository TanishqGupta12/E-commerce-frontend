import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updatePassword } from "../reduxbox/action/UserAction";
import "./Styledata.css";

export const PasswordUpdate =()=>{

  const {  error, isUpdated } = useSelector((state) => state.ProfileUPdate);

    const dispatch = useDispatch();

  
    const [cnum, setnum] = useState({
      oldPassword: "",
      newPassword: "",
      comfirmPassword: "",
    });
  
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
      const formData = new FormData();
      formData.set("oldPassword", cnum.oldPassword);
      formData.set("newPassword", cnum.newPassword);
      formData.set("comfirmPassword", cnum.comfirmPassword);
      
      dispatch( updatePassword (formData));
    };
  
    useEffect(() => {
      if (isUpdated) {
        alert("Sccussfully pasword");
      }
      alert(error)
    }, [isUpdated , error]);

    return (
        <div className="img_center">
          <div className="login-page">
            <h1 className="login-page_h1"> UPDATE PASSWORD </h1>
            <form method="POST" onSubmit={onchanges} className="Paswwordpage_from">
              
                <label className="Password_page_label" htmlFor="OldPassword">
                OldPassword
                </label>
                <input
                  className="login-page_input"
                  type="password"
                  id="username"
                  name="oldPassword"
                  value={cnum.oldPassword}
                  onChange={setvalueschange}
                />
    
                <label className="Password_page_label" htmlFor="password">
                 New Password
                </label>
                <input
                  className="login-page_input"
                  type="password"
                  id="password"
                  name="newPassword"
                  value={cnum.newPassword}
                  onChange={setvalueschange}
                />
                <label className="Password_page_label" htmlFor="password">
                 Confirm Password
                </label>
                <input
                  className="login-page_input"
                  type="password"
                  id="password"
                  name="comfirmPassword"
                  value={cnum.comfirmPassword}
                  onChange={setvalueschange}
                />
    
                <button className="login-page_button" type="submit">
                  update Password
                </button>
              
            </form>
          </div>
        </div>
      );
}