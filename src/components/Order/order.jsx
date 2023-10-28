import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

import "./orderstyle.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, myOrders } from "../../reduxbox/action/OrderDetailAction";
import Loader from "../../Loader/Loader";
import { Link } from "react-router-dom";

import MetaData from "../../MetaData";
import LaunchIcon from "@mui/icons-material/Launch";

export default function Order() {

  const { loading , error, orders } = useSelector((state) => state.Myorder);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
    
    dispatch(myOrders());
  }, [dispatch, error]);
  
  
  const columns = [
    {
      field: "SNO",
      headerName: "S.NO",
      flex : 0.2,
      minWidth :60
    },
    {
      field: "id",
      headerName: " Order Id",
      flex : 1,
      minWidth : 250
    },
    {
      field: "Status",
      headerName: "Status",
      flex: 0.3,
      minWidth: 250,
      cellClassName: (params) => {
        const status = params.value; 
    
        if (status === "Delivered") {
          return "out-of-stock"; 
        } else {
          return "in-stock"; 
        }
      },
    },
    {
      field: "itemsQty",
      headerName: "itemsQty",
      type: "Number",
      minWidth : 250,
      flex : 0.3
    },
    {
      flex : 0.3,
      field: "Amount",
      headerName: "Amount",
      type: "Number",
      minWidth : 250
    },
    {
      field: "Action",
      headerName: "Action",
      type: "Number",
      minWidth : 250,
      sortable: false,
      flex : 0.3,
      renderCell: (params) => {
        return (
          <Link to={`/orders/${params.id}`}>
            <LaunchIcon />
          </Link>
        );
      },
    },
  ];

  const rows = [];

  orders && orders.forEach((items , index) => {
    rows.push({
      SNO : index+1,
      itemsQty : items.orderItems.length,
      id : items._id,
      Status :items.orderStatus,
      Amount :items.totalPrice ,
      // Action : ,

    })

  });

  return (
    <>
      <MetaData title ="Order" />
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="myOrdersPage">
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              disableSelectionOnClick
              className="myOrdersTable"
              autoHeight
            />
          </div>
          
        </>
      )}
    </Fragment>
    </>
  );
}
