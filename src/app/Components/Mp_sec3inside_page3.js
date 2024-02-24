'use client'

import React from "react";
import Image from "next/image";
import {Link} from "react-scroll";

const Mp_sec3inside_page3 = ({ imagesrc3, title3, description3 }) => {
  return (
    <div className="container relative mb-4  w-full  mx-auto my-auto p-1/5 md:w-full  max-sm:ml-10 ">
      <div
        className="border-purple-700 border-2 absolute top-24 left-24 right-24 bottom-0 xl:bottom-10 rounded-lg lg:h-2/3  md:h-2/3 max-sm:w-3/4 max-sm:left-10 "
        style={{
          marginBottom: "20px",
          marginLeft: "10px",
          paddingRight: "2rem",
        }}
      ></div>
      <div className="bg-white-100 rounded-lg  gap-8 p-8 flex items-center font-fontbody justify-between align-center w-full max-md:flex-col-reverse min-[320px]:w-full ">
        <div className=" content align-middle w-1/3 h-auto m-auto px-10 lg:py-20 md:py-20 max-md:w-3/4 max-sm:w-full  max-sm:px-16">
          <h1
            className=" text-3xl font-semibold mb-8 top-8 xl:2xl:text-3xl lg:text-xl   md:text-base  "
            style={{ wordWrap: "break-word" }}
          >
            {title3}
          </h1>
          <p className="text-lg mb-8   xl:2xl:text-lg lg:text-base md:text-xs  ">
            {description3}
          </p>
          <Link
        to="footerSection"  // Replace with the ID of your footer section
        smooth={true}
        duration={500}
    >
          <button className="bg-white relative py-2 text-center rounded-full border border-purple-900 font-semibold  text-purple hover:bg-purple-900 hover:ring-purple-900 hover:text-white w-36">
           
            Get started
          </button>
          </Link>
        </div>

        <figure className="wp-block-media-text__media relative right-24  md:w-5/12 max-md:w-full max-md:right-0   lg:pl-16    ">
          <Image
            src={imagesrc3}
            className="rounded-2xl "
            width={620}
            height={500}
          />
        </figure>
      </div>

    </div>
  );
};

export default Mp_sec3inside_page3;
