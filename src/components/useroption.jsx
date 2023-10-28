import React from "react";

import Backdrop from '@mui/material/Backdrop';

import pic from "../images/default.jpg";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import { useState } from "react";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { useNavigate } from 'react-router-dom';

import { logout } from "../reduxbox/action/UserAction";

import { useDispatch } from "react-redux";
const imgSzes = {
  height: "5vmax",
  width: "4vmax",
  borderRadius: "50px",
};

const UserOption = ({user}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Open, SetOpen] = useState(false);
  
  const options = [
    { icon: <ListAltIcon />, name: "orders", func: ()=> navigate('/orders') },
    { icon: <PersonIcon />, name: "Profile", func: ()=> navigate('/Profile') },
    { icon: <ExitToAppIcon />, name: "Logout", func: () => dispatch(logout()) },
    { icon: <AddShoppingCartIcon />, name: "Cart", func: () => navigate('/Cart') },
  ];
  
  if ( user.role === "Admin") {
    options.unshift({ icon: <DashboardIcon />, name: "Dashboard", func: ()=> navigate('/admin/controller')});
  }
  

  return (
    <>
    {/* <img src={user.Avatar}></img> */}
    <Backdrop
        sx={{ zIndex: "10"}}
        open={Open}
      ></Backdrop>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        onClose={() => SetOpen(false)}
        onOpen={() => SetOpen(true)}
        open={Open}
        sx={{ position: 'absolute', top: "7vmax", right: 15, zIndex: "15" , display : 'flex' }}
        icon={
          <img src={!user.Avatar ? user.Avatar : pic} alt="Profile"  style={imgSzes} />
           
          }
          direction="down"
      >
        {options.map((option) => (
          <SpeedDialAction
            key={option.name}
            icon={option.icon}
            tooltipTitle={option.name}
            onClick={option.func}
          />
        ))}
      </SpeedDial>
    </>
  );
};

export default UserOption;
