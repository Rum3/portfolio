import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import snake from "../../img/snake.png"
import TODO from "../../img/TODO.png";
import math from "../../img/math.png"
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
          <a href="https://rum3.github.io/TODO_APP/"><img src={TODO} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://rum3.github.io/mathForKids/"><img src={math} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://rum3.github.io/calculator/"><img src={calc} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://rum3.github.io/calendar/"><img src={calendar} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://rum3.github.io/snake/"><img src={snake} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={budedge} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;