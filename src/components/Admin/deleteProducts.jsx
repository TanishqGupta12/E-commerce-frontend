import React from 'react'

import { useSelector, useDispatch } from "react-redux";
import { Link , useParams} from "react-router-dom";

import {CLEARERROR,  DeleteProducts } from "../../reduxbox/action/ProductsAction";

import  SilderDashboard  from "./SilderDashboard";
import { Button } from '@mui/material';
import { Typography } from "@mui/material";
import { useEffect } from 'react';


export default function deleteProducts() {
  return (
    <div>deleteProducts</div>
  )
}
