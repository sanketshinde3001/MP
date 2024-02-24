"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Mp_slider_card from "./Mp_slider_card";

function Arrow(props) {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";

  const arrowStyle = {
    textAlign: "center",
    cursor: 'pointer',
    fontSize: '20px',
    color: '#333',
    position: "absolute"
  };

  const nextArrowStyle = {
    top: "50%",
    right: "-55px",
    padding: "5px",
    backgroundColor: "white",
    borderRadius: "50%"


  };

  const prevArrowStyle = {
    top: "50%",
    left: "-55px",
    padding: "5px",
    backgroundColor: "white",
    borderRadius: "50%"
  };




  // const char = props.type === "next" ? ">" : "<";
  const char = props.type === "next" ? (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
  ) : (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
  );
  
  return (
      <span className={className} style={{ ...arrowStyle, ...(props.type === "next" ? nextArrowStyle : prevArrowStyle) }} onClick={props.onClick}>
        {char}
      </span>

  );
}


function Mp_slider() {

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="w-full bg-yellow-300 py-16 px-5 overflow-hidden mt-5">
      <div className="max-xl:w-full container mx-auto xl:w-2/3">
        <Slider
          {...settings}
          nextArrow={<Arrow type="next" />}
          prevArrow={<Arrow type="prev" />}
        >
          <div>
            <Mp_slider_card />
          </div>
          <div>
            <Mp_slider_card />
          </div>
          <div>
            <Mp_slider_card />
          </div>
          <div>
            <Mp_slider_card />
          </div>
          <div>
            <Mp_slider_card />
          </div>
          <div>
            <Mp_slider_card />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Mp_slider;
