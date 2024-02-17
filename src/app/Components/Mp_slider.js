'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Mp_slider_card from "./Mp_slider_card";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "hidden", background: "red"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "hidden", background: "green" }}
        onClick={onClick}
      />
    );
  }

function Mp_slider() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay :true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
       

      <div className="w-full bg-yellow-300 py-16 px-5 ">
        <div className="max-xl:w-full container mx-auto xl:w-2/3">
        <Slider {...settings} >
        <div>
        <Mp_slider_card/>
        </div>
        <div>
        <Mp_slider_card/>
        </div>
        <div>
        <Mp_slider_card/>
        </div>
        <div>
        <Mp_slider_card/>
        </div>
        <div>
        <Mp_slider_card/>
        </div>
        <div>
        <Mp_slider_card/>
        </div>
      </Slider>
        </div>

      </div>
   
  );
}

export default Mp_slider;
