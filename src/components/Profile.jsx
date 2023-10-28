import React, { useEffect } from "react";
import Meta from "../MetaData.js";
import { Link, useNavigate } from "react-router-dom";
import "./Styledata.css";

// import a from "../images/img/people/1.png"
import pic from "../images/default.jpg";

import { useSelector } from "react-redux";
const Profile = () => {
  const navigate = useNavigate();
  const { isAuthenticated, loginsignUp } = useSelector(
    (state) => state.loginsignUp
  );
  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
  }, [navigate, isAuthenticated]);
  return (
    <>
      <Meta title={`${loginsignUp.Name} 's Profile `} />

      <div className="ProfileContainer">
        
        <div>
          <h1> MY Profile </h1>
          <h4> id:{loginsignUp._id }</h4>
          <img
            src={!loginsignUp.Avatar ? pic : (loginsignUp.Avatar)}
            alt="Profile"
            />
            {/* <img src={loginsignUp.Avatar} /> */}
          

          <Link to="/photo/pic">Edit Photo</Link>
        </div>

        <div>

          <div>
            <h4> Full Name </h4>
            <p>{loginsignUp.Name}</p>
          </div>

          <div>
            <h4> Enmail</h4>
            <p> {loginsignUp.Email} </p>
          </div>

          <div>
            <h4> PhoneNUmber</h4>
            <p> {loginsignUp.PhoneNumber} </p>
          </div>

          <div>
            <Link to="/me/update">Edit Profile</Link>
            <Link to="/Password/Update">Change Password</Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default Profile;
