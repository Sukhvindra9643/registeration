import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="navbar">
  <input type="checkbox" id="nav-check"/>
  <div className="nav-header">
    <div className="nav-title">
      JoGeek
    </div>
  </div>
  <div className="nav-btn">
    <label htmlFor="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className="nav-links">
    <Link to="/" >Home</Link>
    <Link to="/center" >Center</Link>
    <Link to="/contact" >Contact Us</Link>
    <a href="https://forms.gle/fjjzGfUcrdi4wTFJA" target="_blank" rel="noreferrer">Registration</a>
  </div>
</div>
  );
};

export default Header;
