import React from "react";
import Image from "next/image";

const Mp_sec3inside_page2 = ({ title2, description2, imagesrc2 }) => {
  return (
    <div>
      <div className="container  relative bg-orange-50 rounded-2xl grid grid-cols-1 md:grid-cols-2 px-20 py-16  w-full mx-auto my-11 xl:w-3/4 max-xl:w-4/5 max-sm:px-8  max-sm:ml-20 max-[320px]:w-full">
        <figure className="wp-block-media-text__media  ">
          <Image
            src={imagesrc2}
            className="rounded-2xl"
            width={500}
            height={498}
          />
        </figure>
        <div className="wp-block-media-text__content text-wrap font-fontbody md:mx-0   md:pl-8 xl:py-10  max-sm:pl-8 max-sm:mx-0 max-sm:w-full ">
          <h1
            className="xl:text-4xl font-semibold mb-8 top-8 md:text-base lg:text-3xl sm:text-xl sm:py-5 max-sm:text-3xl   max-sm:pt-7 min-[375px]:text-2xl "
            style={{ maxWidth: "calc(100% - 4rem)", wordWrap: "break-word" }}
          >
            {title2}
          </h1>
          <p
            className="xl:text-xl mb-6 md:text-xs lg:text-base sm:text-base "
            style={{ maxWidth: "calc(100% - 4rem)" }}
          >
            {description2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mp_sec3inside_page2;
