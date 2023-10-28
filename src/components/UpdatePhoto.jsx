import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";

import { Photosupdate } from "../reduxbox/action/UserAction";
import pic from "../images/default.jpg";
import "./Styledata.css";

export default function UpdatePhoto() {
  const dispatch = useDispatch();
  const { loginsignUp } = useSelector((state) => state.loginsignUp);
  const [Avasterdata, setAvasterdata] = useState([]);

  const setValuesChangePhoto = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
    
      setAvasterdata(reader.result);
    };
    reader.onerror = (error) => {
      console.log(error);
    };
  };

  const handleCode = async () => {
    const myfrom = new FormData();
    myfrom.append("Avaster", Avasterdata);
    dispatch(Photosupdate(myfrom));
  };

  return (
    <div className="avastermain">
      <img src={Avasterdata} alt="Avatar" />
      <form onSubmit={handleCode}  enctype="multipart/form-data" >
        <input accept="image/*" type="file" onChange={setValuesChangePhoto} />
        <Button onClick={handleCode}>Update Photos</Button>
      </form>
    </div>
  );
}
