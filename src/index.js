import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import App from "./App";

import reportWebVitals from "./reportWebVitals";

import Nav from "./navbar/navbar";
import Footer from "./footer/footer";

import MetaData from "../src/MetaData";

import { Provider } from "react-redux";
import store from "./Redux";

import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

// window.addEventListener("contextmenu",(e)=>e.preventDefault());
root.render(
  <React.StrictMode>
    <MetaData title="Happening Souls store" />
    <Router>
      <Nav></Nav>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
