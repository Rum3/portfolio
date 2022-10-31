import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import sert1 from "../../img/sert1.png";
import sert2 from "../../img/sert2.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import RumenHristov from './RumenHristov.docx';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My skills</span>
        <spane>
        I have obtained two courses in Progress academy. 
        I can perfectly work with HTML and CSS. 
          <br />
        I have gained knowledge in JavaScript, React and TypeScript.
        </spane>
        <a href={RumenHristov} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={sert1}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={sert2}
          />
        </motion.div>
        {/* 3rd */}
  
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;