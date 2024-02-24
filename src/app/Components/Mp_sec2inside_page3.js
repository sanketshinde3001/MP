'use client'

import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";

const Mp_sec2inside_page3 = ({
  imagesrc3,
  title3,
  description3,
  buttonText3,
  imagewidth3,
  imageheight3,
}) => {
  return (
    <>
      <div className="relative pr-4 mt-10 ">
        <div className="border-purple-700 border-2 absolute top-28 xl:top-28 lg:top-40 left-4 xl:left-24 md:left-10 right-10 xl:right-24 md:right-16 bottom-6 md:bottom-28 lg:bottom-44 xl:bottom-20 rounded-xl "></div>
        <div className="bg-white-100 rounded-lg gap-8 xl:p-8 xl:flex md:flex xl:items-center xl:justify-between">
          <figure className="wp-block-media-text__media relative xl:mr-24 lg:mr-20 md:mr-10 mb-4 xl:-mb-8 md:-mb-8 lg:-mb-3 xl:w-1/2 lg:w-full md:w-full xl:order-last md:order-last">
            <div className="-mt-4 xl:-mt-0 lg:mt-32 md:mt-32 drop-shadow-2xl">
              <Image
                src={imagesrc3}
                className="rounded-2xl"
                width={imagewidth3}
                height={imageheight3}
              />
            </div>
          </figure>
          <div className="w-full font-fontbody xl:w-1/2 lg:w-3/4 md:w-3/4 py-10 xl:py-28 lg:py-52 md:py-36 pl-10 pr-10 xl:pl-36 md:pl-20 lg:pl-24 ">
            <h1 className="text-4xl font-bold mb-8">{title3}</h1>
            <p className="text-lg mb-8">{description3}</p>
            <div
              className={`bg-white py-2 px-4 relative rounded-full border border-purple-900 font-bold text-purple-900 hover:bg-purple-900 hover:ring-purple-900 hover:text-white w-36 mx-auto md:mx-0 cursor-pointer`}
            >
              <Link
                to="footerSection" // Replace with the ID of your footer section
                smooth={true}
                duration={500}
              >
  
                  {buttonText3}
             
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mp_sec2inside_page3;
