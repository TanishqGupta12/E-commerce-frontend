import React from "react";
import Nav_logo from "./nav_logo.png";

import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

import PeopleIcon from "@mui/icons-material/People";
import CallIcon from '@mui/icons-material/Call';

import InfoIcon from '@mui/icons-material/Info';
import "./navbar.css";

import { Outlet, Link } from "react-router-dom";

const nav = () => {
  return (
    <>
      <header className="harder_navs">
        <div className="Nav_logos">
          <img src={Nav_logo} alt="e-coomceri" />
          <h2>          
            Castro <span> Store </span>
          </h2>
        </div>

        <div className="navbars">
          <Link to="/">
            <Button className="btn">
              <HomeIcon />
            </Button>
          </Link>

          <Link to="/Login">
            <Button className="btn">
              <PeopleIcon />
            </Button>
          </Link>

          <Link to="/Contact">
            <Button className="btn">
              <CallIcon />
            </Button>
          </Link>
          <Link to="/about">
            <Button className="btn">
              <InfoIcon/>
            </Button>
          </Link>
        </div>
      </header>

      <Outlet />
    </>
  );
};
export default nav;
