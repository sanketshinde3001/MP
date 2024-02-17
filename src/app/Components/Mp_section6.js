import React from "react";
import Image from "next/image";
import Link from "next/link";

const Mp_section6 = () => {
  return (
    <>
     <div className="relative w-screen">
      <div className=" max-w-full h-screen ">
        <div className="bg-purple-600 h-4/5 w-4/5 bottom-14 rounded-r-3xl absolute z-1 max-sm:h-3/5"></div>

        <div className="absolute w-4/5 z-10 right-0 top-4 max-xl:pr-0 max-sm:w-5/6 max-md:top-32  max-sm:top-48">
          <Image
            className="rounded-l-3xl"
            src="https://pros.weddingpro.com/wp-content/uploads/2023/10/8_HP_Build-relationships.png"
            width={1250}
            height={0}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="Picture of the author"
          />
        </div>

        <div className="absolute w-[58%] z-[11] bg-white bottom-0 left-12  border border-gray-300 p-10 rounded-xl  max-sm:w-[96%] max-sm:p-5 max-sm:left-3">
          <strong className="text-4xl font-semibold max-sm:text-3xl ">
            Build relationships with wedding pros and couples{" "}
          </strong>{" "}
          <br />
          <p className="mt-6 mr-2 text-lg max-md:text-base max-sm:text-sm">
            Build relationships with wedding pros and couples From showcasing
            your authentic brand and connecting with new clients to gaining
            access to exclusive industry events, there are countless
            opportunities to grow your network.{" "}
          </p>
          <button class=" text-purple-900 py-2 px-4 rounded-3xl mt-10 border border-purple-900 hover:bg-purple-900 hover:text-white">
            <Link href={"/"}>
            <strong>Join our community</strong>
            </Link>
            
          </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default Mp_section6;