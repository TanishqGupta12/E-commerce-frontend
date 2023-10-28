import React from "react";
import "./admin.css";
import logo from "../../images/logo.png";

import { Link } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";

import { TreeView } from "@mui/lab";
import { TreeItem } from "@mui/lab";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PostAddIcon from "@mui/icons-material/PostAdd";
import AddIcon from "@mui/icons-material/Add";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import PeopleIcon from "@mui/icons-material/People";
import RateReviewIcon from "@mui/icons-material/RateReview";
import ListAltIcon from "@mui/icons-material/ListAlt";

export default function SilderDashboard() {
  return (
    // <div>Dashboard</div>
    <>
      <div className="Sidebar">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/admin/controller">
          <p>
            <DashboardIcon /> Dashboard
          </p>
        </Link>
        <Link>
          <TreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ImportExportIcon />}
          >
            <TreeItem nodeId="1" label="Products">
              <Link to="/admin/ALLproducts">
                <TreeItem
                  nodeId="2"
                  label="All"
                  icon={<PostAddIcon />}
                ></TreeItem>
              </Link>
              <Link to="/admin/CreateProducts">
                <TreeItem
                  nodeId="3"
                  label="Create"
                  icon={<AddIcon />}
                ></TreeItem>
              </Link>
            </TreeItem>
          </TreeView>
        </Link>
        <Link to="/admin/orders">
          <p>
            <ListAltIcon />
            Orders
          </p>
        </Link>
        <Link to="/admin/users">
          <p>
            <PeopleIcon />
            Users
          </p>
        </Link>
        <Link to="/admin/review">
          <p>
            <RateReviewIcon />
            review
          </p>
        </Link>
      </div>
    </>
  );
}
