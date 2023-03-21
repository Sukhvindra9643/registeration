import React from "react";
import {BiErrorCircle} from "react-icons/bi";
import "./NotFound.css";
// import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <BiErrorCircle size={80} className="icon"/>
    <div className="PageNotFound">

      <h1>Page Not Found </h1>
      <Link to="/">Home</Link>
    </div>
    </>
  );
};

export default NotFound;
