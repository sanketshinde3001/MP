'use client'

import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";

const Mp_hero = () => {
  return (
    <>
      <div className="w-full xl:h-screen relative mt-3">
        <div className=" mx-auto  container w-full flex-col xl:flex-row flex  justify-center xl:max-xl:gap-2 gap-16 xl:items-start items-center ">
          <div className=" absolute bg-yellow-50 rounded-[5%] h-4/5 max-xl:h-screen top-0 z-[-11] w-[96%]"></div>
          {/* Column  1 */}
          <div className="w-[95%] ">
            <div className="w-full xl:pl-10 md:pl-16 pl-4 ">
              <Image
                src="https://pros.weddingpro.com/wp-content/themes/weddingpro-theme/dist/images/knot-ww-combined.png"
                width={527}
                height={47}
                alt="Picture of the author"
                className="xl:mb-16 xl:mt-12 mb-6 mt-12 "
              />

              <h2 className="xl:text-5xl text-4xl font-bold mb-16 ">
                Grow your wedding business with the&nbsp;
                <span className="relative xl:text-5xl text-4xl font-bold">
                  industry&nbsp;
                  <span className="absolute bottom-0 left-0 w-full h-6 bg-yellow-400 -z-10"></span>
                </span>
                <span className="relative xl:text-5xl text-4xl font-bold">
                  leaders&nbsp;
                  <span className="absolute bottom-0 left-0 w-full h-6 bg-yellow-400 -z-10"></span>
                </span>
                <span className="relative xl:text-5xl text-4xl font-bold">
                  couples&nbsp;
                  <span className="absolute bottom-0 left-0 w-full h-6 bg-yellow-400 -z-10"></span>
                </span>
                <span className="relative xl:text-5xl text-4xl font-bold">
                  love
                  <span className="absolute bottom-0 left-0 w-full h-6 bg-yellow-400 -z-10"></span>
                </span>
              </h2>
              <h3 className="text-2xl mb-5 w-4/5 leading-10">
                WeddingPro combines The Knot and WeddingWire, two of the best
                wedding advertising marketplaces, to give you access to more
                couples in your area and increase your booking opportunities
              </h3>
              <Link
                to="footerSection" // Replace with the ID of your footer section
                smooth={true}
                duration={1000}
              >
              <button className="px-6 py-3 bg-purple-700 text-white rounded-3xl font-semibold cursor-pointer  xl:mb-60">
                Let's Partner Together
              </button>
              </Link>


            </div>
          </div>

          {/* Column  2 */}
          <div className="xl:w-[80%] w-full flex justify-between  gap-4 xl:h-screen ">
            <div className="w-[48%] justify-evenly  flex flex-col gap-12 mt-12 xl:max-2xl:mt-2 ">
              <div className="w-full relative">
                <div className=" bg-purple-300 px-8 py-3 font-bold absolute text-xl xl:bottom-10 xl:-left-20 max-xl:top-40 max-sm:-right-28 max-xl:-right-16 max-sm:top-16 max-sm:text-sm max-sm:px-2 ">
                  Passionate professionals
                </div>

                <Image
                  src="https://pros.weddingpro.com/wp-content/uploads/2023/10/1_HP_Hero1.png"
                  width={500}
                  height={500}
                  className="rounded-xl "
                  alt="Picture of the author"
                />
              </div>
              <div className="w-full relative">
                <div className=" bg-purple-300 px-8 py-3 font-bold absolute text-xl xl:bottom-10 xl:-left-40 -right-28 bottom-10 w-full text-center max-md:bottom-2 max-md:px-2 max-sm:text-sm">
                  Countless beautiful weddings
                </div>

                <Image
                  src="https://pros.weddingpro.com/wp-content/uploads/2023/10/2_HP_Hero2-1.png"
                  width={500}
                  height={500}
                  className="rounded-xl "
                  alt="Picture of the author"
                />
              </div>
            </div>

            <div className="w-[47%]">
              <div className="w-full relative h-full">
                <div className=" bg-purple-300 px-10 xl:max-2xl:px-2 py-3 font-bold absolute text-xl bottom-52 2xl:-right-12 w-full xl:max-xl:w-3/4 text-center z-10 xl:max-2xl:-right-10 max-xl:-left-7 max-xl:px-1 max-sm:text-sm max-sm:-left-16">
                  Millions of happy couples
                </div>
                <img
                  src="https://pros.weddingpro.com/wp-content/uploads/2023/10/3_HP_Hero3.png"
                  className="rounded-xl absolute bottom-28 "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full container mx-auto max-sm:pl-4">
          <div className="xl:absolute xl:-bottom-40 max-xl:mt-5">
            <h2 className="text-4xl xl:max-2xl:pl-5 w-[30%] max-sm:w-[80%] max-xl:w-[45%] leading-relaxed font-bold">
              Let WeddingPro help your business thrive
            </h2>
            <p className="w-[35%] xl:max-2xl:pl-5 max-xl:mt-2 max-sm:w-[80%] max-xl:w-[55%] mt-6 leading-8 text-xl">
              The Knot and WeddingWire attract up to 21 million unique visitors
              every month, so there are always new couples in your area looking
              for a business just like yours.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mp_hero;
