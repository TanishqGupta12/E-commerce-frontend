import React from "react";
import SilderDashboard from "./SilderDashboard";
import "./admin.css";
import { Typography } from "@mui/material";
import { getalluser, Deleteuser } from "../../reduxbox/action/UserAction";

import { useSelector, useDispatch } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";

import  Loader  from "../../Loader/Loader";

export default function Userlist() {
  const deleteOrderHandler = (ids) => {
    dispatch(Deleteuser(ids));
  };
  const { ALLUSERS, success, count, loading } = useSelector(
    (state) => state.Allusers
  );
  const { isDelete } = useSelector((state) => state.ProfileUPdate);

  const dispatch = useDispatch();
  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 100, flex: 0.5 },

    {
      field: "Name",
      headerName: "Name",
      minWidth: 50,
      flex: 0.3,
    },

    {
      field: "Email",
      headerName: "Email",
      minWidth: 50,
      flex: 0.5,
    },

    {
      field: "Address",
      headerName: "Address",
      type: "number",
      minWidth: 150,
      flex: 0.5,
    },
    {
      field: "PhoneNumber",
      headerName: "PhoneNumber",
      //   type: "number",
      minWidth: 150,
      flex: 0.5,
    },
    {
      field: "Action",
      headerName: "Action",
      type: "Number",
      minWidth: 100,
      sortable: false,
      flex: 0.1,
      renderCell: (params) => {
        const ids = params.id;
        return (
          <>
            <Button onClick={() => deleteOrderHandler(ids)}>
              <DeleteIcon />
            </Button>
          </>
        );
      },
    },
  ];

  const rows = [];

  ALLUSERS &&
    ALLUSERS.forEach((item) => {
      rows.push({
        id: item._id,
        Name: item.Name,
        Email: item.Email,
        Address: item.Address,
        PhoneNumber: item.PhoneNumber,
      });
    });

  useEffect(() => {
    dispatch(getalluser());

    if (isDelete) {
      alert(" user is Delete ");
    }
  }, [dispatch, isDelete]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="dashboard">
          {console.log({ ALLUSERS, success, count })}
          <SilderDashboard />
          <div className="dashboardContainer">
            <Typography component="h1">User LIST</Typography>
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
      )}
    </>
  );
}
