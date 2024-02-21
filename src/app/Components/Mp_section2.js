import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Section = ({ imageSrc,imagewidth,imageheight, topTag, title, description ,linkHref, buttonText , margintop}) => {
  return (
    <>
    <div className={`relative md:m-0 m-5 mb-8 md:mt-${margintop}`}>
      <div className={`border-purple-700 border-2 absolute top-6 md:top-12 left-6 md:left-36 right-8 md:right-28 md:bottom-14 bottom-0 rounded-2xl z-20`}>          
      {topTag && (
            <span className="media-tag bg-purple-700 top-60 md:top-3/4 font-bold text-white text-justify align-middle p-2 md:p-3 absolute left-0 font-fontbody" >{topTag}</span>
          )}</div>
      <div className="bg-white-100 rounded-lg gap-8 p-0 md:flex md:items-center md:justify-between">
        <figure className="wp-block-media-text__media relative mb-4 pl-0 md:mb-0 w-full md:w-7/12 md:order-first z-10">
<div className="md:pl-28 md:-mt-0 drop-shadow-2xl">
          <Image
            src={imageSrc}
            className="rounded-2xl"
            decoding='async'
            width={imagewidth}
            height={imageheight}

          />
          </div>
        </figure>
        <div className="text-wrap w-full md:w-1/2 py-2 md:py-28 pl-12 md:pl-14 pr-12 md:pr-40 font-fontbody color-black z-30">
          <h1 className="text-[40px] font-[705] leading-tight" >{title}</h1>
          <p className="text-lg mt-6 mb-8">
            {description}
          </p>
           
            <div className='bg-white py-2 px-4 relative rounded-full border border-purple-900 font-[700] text-lg  text-purple-900 hover:bg-purple-900 hover:ring-purple-900 hover:text-white w-60 mx-auto md:mx-0 z-40'>
              <Link href={linkHref}>
                {buttonText}
              </Link>
            </div>
          
        </div>
      </div>
    </div>
    
    
    </>
  );
};
export default Section;
