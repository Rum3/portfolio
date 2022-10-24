import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>rum3n1992@gmail.com</span>
        <span>contact: 0897 90 80 28</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/rumen.the.bartender/nnm"> <Insta color="white" size={"3rem"} /></a>
          <a href="https://github.com/Rum3?tab=repositories"><Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;