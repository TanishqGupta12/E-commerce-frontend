import React from "react";
import SilderDashboard from "./SilderDashboard";
import "./admin.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
// import { Doughnut, Line } from "react-chartjs-2";
import { useSelector } from "react-redux";

import { getAllOrders } from "../../reduxbox/action/OrderDetailAction";
import { getalluser } from "../../reduxbox/action/UserAction";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


export default function Dashboard() {
  const { Products } = useSelector((state) => state.products);
  const { orders } = useSelector((state) => state.allOrders);
  const { count } = useSelector((state) => state.Allusers);

  const dispatch = useDispatch();
  // const lineState = {
  //   labels: ["Initial Amount", "Amount Earned"],
  //   datasets: [
  //     {
  //       label: "TOTAL AMOUNT",
  //       backgroundColor: ["tomato"],
  //       hoverBackgroundColor: ["rgb(197, 72, 49)"],
  //       data: [0, 50000],
  //     },
  //   ],
  // };
  let totalAmount = 0;
  orders.forEach((element) => {
    totalAmount += element.totalPrice;
  });

  useEffect(() => {
    dispatch(getalluser);
    dispatch(getAllOrders);
    // dispatch(getProductDetails);
  }, [dispatch]);
  return (
    <div className="dashboard">
      <SilderDashboard />
      <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>
        <div className="dashboardSummary">
          <div>
            <p>
              Total <br /> {totalAmount}
            </p>
          </div>
        </div>
        <div className="dashboardSummaryBOX">
          <Link to="/admin/ALLproducts">
            <p>Product</p>
            <p>{Products.length}</p>
          </Link>
          <Link to="/admin/orders">
            <p>Orders</p>
            <p>{orders.length}</p>
          </Link>
          <Link to="/admin/users">
            <p>Users</p>
            <p>{count}</p>
          </Link>
        </div>
        {/* <div className="lineChart">
          <Line data={lineState} />
        </div> */}
      </div>
    </div>
  );
}
