import Image from "next/image";
import React from "react";
import Link from "next/link";

const Mp_sec2inside_page3 = ({
  imagesrc3,
  title3,
  description3,
  linkHref3,
  buttonText3,
  imagewidth3,
  imageheight3
}) => {
  return (
    <>
      <div className="relative pr-4 mb-4">
        <div className="border-purple-700 border-2 absolute top-28 left-4 md:left-24 right-10 md:right-24 bottom-6 rounded-xl ">
         
        </div>
        <div className="bg-white-100 rounded-lg gap-8 md:p-8 md:flex md:items-center md:justify-between">
          <figure className="wp-block-media-text__media relative md:mr-24 mb-4 md:-mb-8 md:w-1/2 md:order-last">
            <div className="-mt-4 md:-mt-0  drop-shadow-2xl">
              <Image
                src={imagesrc3}
                className="rounded-2xl"
                width={imagewidth3}
                height={imageheight3}
              />
            </div>
          </figure>
          <div className="w-full font-fontbody md:w-1/2 py-10 md:py-28 pl-10 pr-10 md:pl-36 ">
            <h1 className="text-4xl font-bold mb-8">{title3}</h1>
            <p className="text-lg mb-8">{description3}</p>
            <div className={`bg-white py-2 px-4  relative rounded-full border border-purple-900 font-bold text-purple-900 hover:bg-purple-900 hover:ring-purple-900 hover:text-white w-36 mx-auto md:mx-0 `}>
              <Link href={linkHref3}>{buttonText3}</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mp_sec2inside_page3;
