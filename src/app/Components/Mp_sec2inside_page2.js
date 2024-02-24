"use client"
import Image from "next/image";
import React from "react";

import { Link } from 'react-scroll';


 
const Mp_sec2inside_page2 = ({
  imagesrc2,
  title2,
  description2,
  buttonText2,
  imageheight2,
  imagewidth2,
}) => {  
  return (
    <>
         <div className="relative m-8 mb-8">
        <div className="bg-orange-50 rounded-2xl gap-8 xl:p-8 md:p-0 mb-24 xl:m-24 md:m-0 xl:flex md:flex xl:items-center md:items-center xl:justify-between ">
        <figure className="wp-block-media-text__media relative mr-8 ml-8 xl:ml-14  xl:mt-8 md:mt-0 -mb-8 xl:mb-6 xl:w-1/2 md:w-full lg:order-first md:order-first">
        <div className="">
            <Image
              src={imagesrc2}
              className="rounded-2xl"
              decoding="async"
              width={imagewidth2}
              height={imageheight2}
            />
             </div>
          </figure>
          <div className=" text-wrap font-fontbody w-full xl:w-1/2 py-14 xl:py-20 pl-8 xl:pl-20 pr-10 xl:pr-14 z-20">
            <h1
              className="text-4xl font-bold mb-8"
            >
              {title2}
            </h1>
            <p className="text-lg mb-8">{description2}</p>
            
    <Link
        to="footerSection"  // Replace with the ID of your footer section
        smooth={true}
        duration={500}
    >
    <button className={`bg-white py-2 px-4 rounded-full border border-purple-900 font-bold text-purple-900 hover:bg-purple-900 hover:ring-purple-900 hover:text-white w-36 mx-auto md:mx-0`}>
        {buttonText2}
         
    </button>
    </Link>
          </div>
         
        </div>
      </div>
    </>
  );
};
export default Mp_sec2inside_page2;
{/* <div className={`bg-white py-2 px-4 rounded-full border border-purple-900 font-bold text-purple-900 hover:bg-purple-900 hover:ring-purple-900 hover:text-white w-36 mx-auto md:mx-0`}>
              <Link href={linkHref2}>{buttonText2}</Link>
            </div> */}