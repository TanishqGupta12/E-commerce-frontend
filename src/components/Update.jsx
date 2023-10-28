import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../reduxbox/action/UserAction";
import "./Styledata.css";
import { UPDATE_FAIL } from "../reduxbox/constant/UserConstants";


import { useNavigate } from "react-router-dom";

export const Update = () => {
  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  const user = useSelector((state) => state.loginsignUp);
  const { isUpdated } = useSelector((state) => state.ProfileUPdate);

  const [cdata, setdata] = useState({
    Name: user.loginsignUp.Name,
    Email: user.loginsignUp.Email,
    Address: user.loginsignUp.Address,
    PhoneNumber: user.loginsignUp.PhoneNumber,
    
  });

  
  const onchanges = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Name", cdata.Name);
    formData.append("Email", cdata.Email);
    formData.append("Address", cdata.Address);
    formData.append("PhoneNumber", cdata.PhoneNumber);
    // formData.append("Avatar" ,cdata.Avatar , cdata.Avatar.name  );
    dispatch(update(formData));
  };
  
  const setvalueschange = (e) => {
    const { value, name } = e.target;
    setdata((data) => ({
      ...data,
      [name]: value,
    }));
  };


  useEffect(() => {
    if (isUpdated) {
      alert("Successfully Update Profile");
      navigate("/")

    }
    dispatch({ type: UPDATE_FAIL }); // Corrected dispatch call

    
  }, [isUpdated, dispatch ,navigate]);

  return (
    <>
      <div className="updatecontainer">
        <h1>Update Profile</h1>
        <form onSubmit={onchanges} method="POST" encType="multipart/form-data">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="Name"
            name="Name"
            value={cdata.Name}
            onChange={setvalueschange}
          />

          <label htmlFor="Email">Email</label>
          <input
            type="email"
            id="Email"
            name="Email"
            value={cdata.Email}
            onChange={setvalueschange}
          />

          <label htmlFor="Address">Address</label>
          <input
            type="text"
            id="Address"
            name="Address"
            value={cdata.Address}
            onChange={setvalueschange}
          />

          <label htmlFor="Phone Number">Phone Number</label>
          <input
            type="number"
            id="PhoneNumber"
            name="PhoneNumber"
            value={cdata.PhoneNumber}
            onChange={setvalueschange}
          />
        
          <button type="submit">Update Profile</button>
        </form>
      </div>
    </>
  );
};
