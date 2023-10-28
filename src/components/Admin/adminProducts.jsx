import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  getAdminProducts,
  DeleteProducts
} from "../../reduxbox/action/ProductsAction";

import SilderDashboard from "./SilderDashboard";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { useEffect } from "react";

export default function AdminProducts() {
  const dispatch = useDispatch();

  const { Error, Products } = useSelector((state) => state.products);

  const { success } = useSelector((state) => state.UpdateandDeleteProducts);

  const deleteProductsHandle = (ids) => {
    alert(ids)
    dispatch(DeleteProducts(ids))
  };

  const columns = [
    {
      field: "id",
      headerName: "Products Id",
      flex: 3,
      minWidth: 60,
    },
    {
      field: "Name",
      headerName: "Name",
      flex: 1,
      minWidth: 250,
    },

    {
      field: "Stock",
      headerName: "Stock",
      type: "Number",
      minWidth: 250,
      flex: 0.3,
    },
    {
      field: "Price",
      flex: 0.3,
      headerName: "Price",
      type: "Number",
      minWidth: 250,
    },

    {
      field: "Action",
      headerName: "Action",
      type: "Number",
      minWidth: 250,
      sortable: false,
      flex: 0.3,
      renderCell: (params) => {
        const ids = params.id
        return (
          <>
             <Link to={`/admin/product/edit/${ids}`}>
              <EditIcon />
            </Link>

            <Button onClick={()=>{deleteProductsHandle(ids)}}>
              <DeleteIcon />
            </Button>
          </>
        );
      },
    },
  ];

  const rows = [];

  Products &&
    Products.forEach((element, index) => {
      rows.push({
        id: element._id,
        Name: element.NameProducts,
        Stock: element.stock,
        Price: element.PriceProduct,
      });
    });

  useEffect(() => {
    dispatch(getAdminProducts());

    if (Error) {
      alert(Error);
    }

    if (success) {
      alert("DELETE PRODUCTS")
    }
  }, [dispatch, Error , success]);

  return (
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

    // <Button/>
  );
}
