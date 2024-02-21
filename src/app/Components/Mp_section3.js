import React from "react";
import Link from "next/link";
import Image from "next/image";

const Mp_section3 = () => {
  return (
    <div>
      <div className="flex justify-center ">
        <div className="container   h-auto w-3/5 bg-orange-50 rounded-2xl  flex flex-col md:flex-row sm:flex-col-reverse max-sm:flex-col-reverse justify-between align-center my-20 p-16  max-sm:p-10">
          <div className="content align-middle md:w-1/3 h-auto m-auto font-fontbody ">
            <h2 className="font-bold xl:text-4xl  lg:text-xl md:text-lg sm:text-xl max-sm:text-lg max-sm:pt-10 ">
              Streamline communication with couples
            </h2>
            <h4 className="mt-9 xl:text-xl lg:text-sm md:text-xs sm:text-xs max-sm:text-xs max-sm:pt-0">
              We know you’re busy, so our platform is designed to be a one-stop
              shop for all the client communications you get from The Knot and
              WeddingWire.
            </h4>
            <button className="mt-7 bg-purple-800 hover:bg-purple p-3 rounded-3xl text-white xl:text-lg lg:text-sm md:text-xs max-sm:text-xs sm:text-sm max-sm:w-full">
              <Link href="our-products/inbox"> Connect with your next booking</Link>
            </button>
          </div>
          <div className="img md:h-auto w-full xl:w-1/2 lg:w-3/5 md:w-1/2 sm:my-10 ">
            <Image
              className="rounded-3xl right-0"
              src="https://pros.weddingpro.com/wp-content/uploads/2023/10/5_HP_streamlined-comms.png"
              width={650}
              height={366}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Mp_section3;

