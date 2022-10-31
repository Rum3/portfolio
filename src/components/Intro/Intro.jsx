import React, { useContext } from "react";
import "./Intro.css";
import Rumen from "../../img/rumen.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>HI, I'm Rumen!</span>
          <span>Rumen Hristov</span>
          <span>
          I started coding during the first COVID19 quarantine – it was
           like a joke for me. I had plenty of free time and I watched a 
           single self-study video connected with HTML and CSS. I really 
           enjoyed the process and the final result was indeed satisfying 
           for me. After only an hour of watching a self-study video I was 
           able to create a website and this inspired me to continue further. 
           I kept watching more and more videos and my interest was constantly 
           increasing.  A time had come and I understood that I cannot self-educate
            myself anymore, that is why I decided to participate in JavaScript course 
            and then in another React course. However, I am absolutely sure that there 
            is plenty more things that I will thrive but the best feature that I own is my
             passion for gaining new knowledge and developing my professional skills. 
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/Rum3?tab=repositories"><img src={Github} alt="" /></a>
          <a href="https://www.instagram.com/rumen.the.bartender/"><img src={Instagram} alt=""/></a>
          
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Rumen} alt="" />
        {/* animation */}
        

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;