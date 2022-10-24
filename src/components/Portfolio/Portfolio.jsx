import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import TODO from "../../img/TODO.png";
import calc from "../../img/calc.png";
import budedge from "../../img/budedge.png";
import calendar from "../../img/calendar.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={TODO} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={calc} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={calendar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={budedge} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;