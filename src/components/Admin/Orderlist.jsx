import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";

import SilderDashboard from "./SilderDashboard";
import {
  deleteOrder,
  getAllOrders,
  clearErrors,
} from "../../reduxbox/action/OrderDetailAction";

const OrderList = () => {
  const dispatch = useDispatch();

  const { error, orders } = useSelector((state) => state.allOrders);

  const { error: deleteError, isDeleted } = useSelector((state) => state.order);

  const deleteOrderHandler = (id) => {
    dispatch(deleteOrder(id));
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert("Order Deleted Successfully");
    }

    dispatch(getAllOrders());
  }, [dispatch, error, deleteError,  isDeleted]);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 300, flex: 1 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 150,
      flex: 0.5,
      cellClassName: (params) => {
        const status = params.value;

        if (status === "Delivered") {
          return "greenColor";
        } else {
          return "redColor";
        }
      },
    },

    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 150,
      flex: 0.4,
    },

    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      minWidth: 270,
      flex: 0.5,
    },
    {
      field: "Action",
      headerName: "Action",
      type: "Number",
      minWidth: 250,
      sortable: false,
      flex: 0.3,
      renderCell: (params) => {
        const ids = params.id;
        return (
          <>
            <Link to={`/admin/orders/edit/${ids}`}>
              <EditIcon />
            </Link>

            <Button onClick={() => deleteOrderHandler(ids)}>
              <DeleteIcon />
            </Button>
          </>
        );
      },
    },
  ];
  
  const rows = [];

  orders &&
    orders.forEach((item) => {
      rows.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        amount: item.totalPrice,
        status: item.orderStatus,
      });
    });

  return (
    <Fragment>
      <div className="dashboard">
        <SilderDashboard />
        <div className="dashboardContainer">
          <Typography component="h1">Dashboard</Typography>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="ProductListTable"
            autoHeight
          />
        </div>
      </div>
    </Fragment>
  );
};

export default OrderList;
