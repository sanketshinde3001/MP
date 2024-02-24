import Image from "next/image";
import React from "react";
import Link from "next/link";

const Mp_sec2inside_page4 = ({
  imagesrc4,
  title4,
  description4,
  buttonText4,
  imageheight4,
  imagewidth4
}) => {
  return (
    <>
      <div className="relative  mt-10 ">
        <div className={`border-purple-700 border-2 absolute top-16 xl:top-24 lg:top-16 md:top-4 left-2 xl:left-28 lg:left-10 md:left-10 right-10 xl:right-24 lg:right-16 md:right-16 bottom-6 xl:bottom-20 lg:bottom-20 rounded-xl`}></div>
        <div className="bg-white-100 rounded-lg gap-8 p-0 xl:flex xl:items-center xl:justify-between lg:flex md:flex">
        <figure className="wp-block-media-text__media relative mb-4  pl-0 md:mb-0 xl:w-1/2 lg:w-full md:w-full md:order-first xl:order-first lg:order-first">
            <div className="xl:pl-40 lg:pl-14 md:pl-10 md:mt-6 lg:mt-10 drop-shadow-2xl"> 
              <Image
                src={imagesrc4}
                className="rounded-2xl " 
                width={imagewidth4}
                height={imageheight4}
              />
            </div>
          </figure>

          
          <div className=" text-wrap font-fontbody w-full xl:w-1/2 lg:w-3/4 py-10 xl:py-28 lg:py-32 pl-14 xl:pl-20 md:pl-5 pr-20 xl:pr-40 md:pr-20 z-20 ">
            <h1 className="text-4xl font-bold mb-8">{title4}</h1>
            <p className="text-lg mb-6">{description4}</p>
            <div className={`bg-white py-2 px-4 relative rounded-full border border-purple-900 font-bold text-purple-900 hover:bg-purple-900 hover:ring-purple-900 hover:text-white w-36 mx-auto md:mx-0`}>
              <Link href={"/temp"}>{buttonText4}</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mp_sec2inside_page4;