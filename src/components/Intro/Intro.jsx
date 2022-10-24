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
          Започнах с писането на код по време на първата карантина - като на шега .
Имах много свободно време и просто изгледах един клип за самообучение ,беше върху HTML и CSS. Доста ми допадна и  резултата ми хареса. Само след един едночасов клип можех да направя сайт и това ме вдъхнови, започнах постепенно да гледам още и още с нарастващ интерес. В един момент вече ми стана ясно ,че няма как да продължа да уча сам ефективно и се записах да изкарам курс по JavaScript ,след което записах още един - по React. Със сигурност има още много какво да науча ,но най- силната ми черта е желанието да се развивам и да обогатявам знанията си.

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