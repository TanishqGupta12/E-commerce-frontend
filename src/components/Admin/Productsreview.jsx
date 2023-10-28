import React, { Fragment, useEffect ,useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";

import SilderDashboard from "./SilderDashboard";
import { GetReview, DeleteReview } from "../../reduxbox/action/ProductsAction";

const Productsreview = () => {
  const dispatch = useDispatch();

  const [Products, setProducts] = useState("");

  const { error, DELETE_REVIEW, GET_REVIEW } = useSelector(
    (state) => state.GetandDeleteReview
  );

//   const deleteOrderHandler = ( Products , ids) => {

//     console.log( Products , ids);
//     dispatch(DeleteReview(Products , ids));
//   };

  useEffect(() => {
    if (error) {
      alert(error);
    }

    if (DELETE_REVIEW) {
      alert("REVIEW Deleted Successfully");
    }

  
  }, [dispatch, error, DELETE_REVIEW]);

  const columns = [
    // { field: "id", headerName: "Order ID", minWidth: 215, flex: 0.2 },
    { field: "id", headerName: "Review_ID", minWidth: 215, flex: 0.2 },

    {
      field: "Name",
      headerName: "Name",
      type: "number",
      minWidth: 200,
      flex: 0.1,
    },

    {
      field: "Comment",
      headerName: "Comment",
      minWidth: 350,
      flex: 1,
    },
    {
      field: "rating",
      headerName: "rating",
      minWidth: 100,
      sortable: false,
      flex: 0.1,
    },
    // {
    //   field: "Action",
    //   headerName: "Action",
    //   minWidth: 200,
    //   sortable: false,
    //   flex: 0.3,
    //   renderCell: (params) => {
    //     const ids = params.id;
    //     return (
    //       <>
    //         <Button onClick={() => deleteOrderHandler( Products , ids)}>
    //           <DeleteIcon />
    //         </Button>
    //       </>
    //     );
    //   },
    // },
  ];

  const rows = [];

  GET_REVIEW && 
    GET_REVIEW.forEach((item) =>
    
    rows.push({
        id: item._id,
        USER_ID: item.user,
        Name: item.name,
        rating: item.rating,
        Comment: item.Comment,
    })
    );
  

    const SubmitHandleProducts = (e) =>{
        e.preventDefault();
        dispatch(GetReview(Products));
    }

  return (
    <Fragment>
      <div className="dashboard">
        <SilderDashboard />
        <div className="dashboardContainer">
          <Typography component="h1">REVIEW</Typography>
          <div className="newProductsContainer">
            <form
              className="createProductionForm"
              onSubmit={SubmitHandleProducts}
            >
              <div>
                <input
                  type="text"
                  placeholder="Product Id"
                  required
                  name="NameProducts"
                  value={Products}
                  onChange={(e) => setProducts(e.target.value)}
                />
              </div>
              <Button type="Submit">Search</Button>
            </form>
          </div>
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

export default Productsreview;
