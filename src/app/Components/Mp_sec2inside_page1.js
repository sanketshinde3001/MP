import Image from "next/image";
import React from "react";

const Mp_sec2inside_page1 = ({ imagesrc1, title1, description1 }) => {
  return (
    <>
      <div className="flex justify-center m-4 md:m-11 font-fontbody ">
        <div className="container bg-orange-50 rounded-2xl flex flex-col md:flex-row mb-24 ">
          <div className=" w-full md:w-9/12 lg:w-2/4 pl-12 pr-4 lg:pr-2 md:pl-0 md:m-10 my-14">
            <h1
              className="text-4xl font-bold mb-8"
            >
              {title1}
            </h1>
            <p className="text-lg">{description1}</p>
          </div>
          <figure className="wp-block-media-text__media relative top-5 left-0 lg:left-5 lg:w-auto md:left-11 md:top-80 lg:top-32 xl:top-16 ">
            <Image
              src={imagesrc1}
              className="rounded-2xl"
              decoding="async"
              width={970}
              height={900}
            />
          </figure>
        </div>
      </div>
    </>
  );
};

export default Mp_sec2inside_page1;