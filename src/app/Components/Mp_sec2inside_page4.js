import Image from "next/image";
import React from "react";
import Link from "next/link";

const Mp_sec2inside_page4 = ({
  imagesrc4,
  title4,
  description4,
  linkHref4,
  buttonText4,
  imageheight4,
  imagewidth4
}) => {
  return (
    <>
      <div className="relative  mt-20 ">
        <div className={`border-purple-700 border-2 absolute top-16 left-2 md:left-28 right-10 md:right-24 bottom-6 md:bottom-20 rounded-xl`}></div>
        <div className="bg-white-100 rounded-lg gap-8 p-0 md:flex md:items-center md:justify-between">
        <figure className="wp-block-media-text__media relative mb-4 pl-0 md:mb-0 md:w-1/2 md:order-first">
            <div className="md:pl-40 md:-mt-0 drop-shadow-2xl"> 
              <Image
                src={imagesrc4}
                className="rounded-2xl " 
                width={imagewidth4}
                height={imageheight4}
              />
            </div>
          </figure>

          
          <div className=" text-wrap font-fontbody w-full md:w-1/2 py-10 md:py-28 pl-14 md:pl-20 pr-20 md:pr-40 z-20 ">
            <h1 className="text-4xl font-bold mb-8">{title4}</h1>
            <p className="text-lg mb-6">{description4}</p>
            <div className={`bg-white py-2 px-4 relative rounded-full border border-purple-900 font-bold text-purple-900 hover:bg-purple-900 hover:ring-purple-900 hover:text-white w-36 mx-auto md:mx-0`}>
              <Link href={linkHref4}>{buttonText4}</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mp_sec2inside_page4;
