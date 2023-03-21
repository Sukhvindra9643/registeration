import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>Best Coaching Center</h1>
        <p>Best Education is our first priority</p>

        <p>Copyrights 2022 &copy; SukhvindraSingh</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/coder0208">Instagram</a>
        <a href="https://www.linkedin.com/in/sukhvindra-singh-42b3b3219/">LinkedIn</a>
        <a href="https://github.com/Sukhvindra9643">Github</a>
      </div>
    </footer>
  );
};

export default Footer;
