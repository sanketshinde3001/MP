import Image from "next/image";
import React from "react";
import Link from "next/link";
 
const Mp_sec2inside_page2 = ({
  imagesrc2,
  title2,
  description2,
  linkHref2,
  buttonText2,
  imageheight2,
  imagewidth2,
}) => {
  return (
    <>
         <div className="relative m-8 mb-8">
        <div className="bg-orange-50 rounded-2xl gap-8 md:p-8 mb-24 md:m-24 md:flex md:items-center md:justify-between ">
        <figure className="wp-block-media-text__media relative mr-8 ml-8 md:ml-14  md:mt-8 -mb-8 md:mb-6 md:w-1/2 md:order-first">
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
          <div className=" text-wrap font-fontbody w-full md:w-1/2 py-14 md:py-20 pl-8 md:pl-20 pr-10 md:pr-14 z-20">
            <h1
              className="text-4xl font-bold mb-8"
            >
              {title2}
            </h1>
            <p className="text-lg mb-8">{description2}</p>
            <div className={`bg-white py-2 px-4 rounded-full border border-purple-900 font-bold text-purple-900 hover:bg-purple-900 hover:ring-purple-900 hover:text-white w-36 mx-auto md:mx-0`}>
              <Link href={linkHref2}>{buttonText2}</Link>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
};
export default Mp_sec2inside_page2;
