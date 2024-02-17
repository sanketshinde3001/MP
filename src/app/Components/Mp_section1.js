import React from "react";
import Image from "next/image";
import Link from "next/link";

const Mp_section1 = () => {
  return (
    <>
    <div className="relative w-screen mb-5">
      <div className="max-w-full h-screen ">
        <div className="bg-purple-600 h-4/5 w-4/5 bottom-14 rounded-r-3xl absolute z-1 max-sm:h-3/5"></div>

        <div className="absolute w-4/5 z-10 right-0 top-4 max-xl:pr-0 max-sm:w-5/6  max-md:top-32  max-sm:top-44 ">
          <Image
            className="rounded-l-3xl "
            src="https://pros.weddingpro.com/wp-content/uploads/2023/10/4_HP_elevate-pros.png"
            width={1250}
            height={0}
            alt="Picture of the author"
          />
        </div>

        <div className="absolute w-[58%] z-[11] bg-white bottom-0 left-12  border border-gray-300 p-10 rounded-xl max-sm:w-[96%] max-sm:p-5 max-sm:left-3">
          <strong className="text-5xl font-semibold max-md:text-4xl">
            We elevate top wedding pros
          </strong>{" "}
          <br />
          <strong className="text-5xl font-semibold max-md:text-4xl">(just like you!)</strong>
          <p className="mt-6 mr-2 text-lg max-md:text-base max-sm:text-sm">
            WeddingPro helps wedding pros like you reach their unique business
            goals. Let us help you reach yours. Some categories we work with
            include{" "}
            <span className="italic">
              Venues, Planners, Photographers, Officiants, DJs and so many more.
            </span>{" "}
          </p>
          <button class=" text-purple-900 py-2 px-4 rounded-3xl mt-10 border border-purple-900 hover:bg-purple-900 hover:text-white ">
            <Link href="/our-customers">
            <strong>Learn about our customers</strong>
            </Link>
            
          </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default Mp_section1;