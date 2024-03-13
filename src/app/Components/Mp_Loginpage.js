import React from "react";
import Image from "next/image";
import { LiaFacebook } from "react-icons/lia";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { ImPinterest2 } from "react-icons/im";
import { LuInstagram } from "react-icons/lu";
import Link from "next/link";

const Mp_Loginpage = () => {
  return (
    <div>
      <div className="h-[10.5vh] w-full flex justify-start pl-8 max-md:h-0">
        <Image
          className="max-w-full max-md:hidden "
          src="https://cdn1.weddingpro.com/assets/img/vendor-portal/logos/wp-logo.svg"
          width={200}
          height={100}
        />
      </div>

      <div className="w-full h-[480px]  relative flex flex-col justify-center items-center max-md:h-[640px]">
        <Image
          className="absolute -z-10"
          src="https://www.weddingpro.com/assets/img/vendor-portal/pages/session/wp-login-bgimage.jpg"
          layout="fill"
          objectFit="cover"
        />
        <Image
          src="https://cdn1.weddingpro.com/assets/img/vendor-portal/pages/session/weddingpro-lockup-logo.svg"
          width={1250}
          height={766}
          className="hidden max-md:block w-[64%] mt-14"
        />

        <div className="flex justify-center items-center h-[90vh] z-10 max-md:relative">
          <div className="h-[400px] w-[400px] bg-white flex flex-col justify-center items-center p-6 max-md:h-[450px] max-md:w-[300px]">
            <div className="text-3xl text-purple-800 font-bold">
              Log In to Your Account
            </div>
            <div className="text-sm mt-4 text-center">
              Enter your WeddingPro username and password (Use The Knot or
              WeddingWire credentials if you haven't created a WeddingPro
              account)
            </div>

            <div className="w-full mt-5">
              <input
                type="text"
                placeholder="Email"
                className="border border-gray-300 p-2 w-full rounded-md"
              />

              <div>
                <input
                  type="text"
                  placeholder="Password"
                  className="border border-gray-300 p-2 w-full rounded-md mb-5"
                />
              </div>
            </div>
            <button className="bg-purple-900 rounded-3xl pt-2 pb-2 text-white font-bold w-full">
              Log In
            </button>

            <div className="text-blue-400 mt-5 justify-center items-center align-middle">
              Forgot Password?
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col h-[360px] w-full px-6 py-0 max-md:h-fit">
        <div className="flex justify-center w-full">
          <Image
            className="h-32"
            src="https://cdn1.weddingpro.com/assets/img/vendor-portal/pages/session/WP-logo-lockup.svg"
            width={550}
            height={0}
          />
        </div>
        <div className="text-purple-900 font-bold flex justify-center text-center text-3xl -mt-4">
          An Easier Way to Access Your Accounts
        </div>
        <div className="flex flex-col justify-center items-center text-center  w-full mt-3">
          <div className=" text-base w-[50%] mt-0 max-md:w-full">
            Together, our brands help you reach the largest audience of engaged
            couples anywhere - and now your new WeddingPro credentials help you
            sign in to both accounts in one simple place.
            <span className="text-blue-400"> <Link href="/temp">Learn more</Link> </span>{" "}
          </div>
          <div className="mt-5">
            Not a member yet? Grow your business with WeddingPro.
          </div>

          <button className="bg-purple-900 text-white rounded-3xl pt-2 pb-2 w-[130px] mt-4 font-bold">
            Join Now
          </button>
        </div>

        <hr className="border-t-1 border-gray-300 mt-12" />
      </div>

      <div className="px-8 pt-10  max-ms:pt-0 max-md:pt-0 ">
        <div className="flex justify-evenly items-center mt-5 max-md:flex-col max-md:mt-4 ">
          <div className="h-[6vh] w-full flex justify-start ">
            <Image
              className="max-w-full max-md:hidden"
              src="https://cdn1.weddingpro.com/assets/img/vendor-portal/logos/wp-logo.svg"
              width={150}
              height={150}
            />
          </div>
         
            <div className="flex justify-center items-center h-6 gap-1 ">
              <button className="text-gray-500 ">
                <LiaFacebook size={48} />
              </button>
              <button className="text-gray-500 ">
                <TiSocialTwitterCircular size={52} />
              </button>
              <button className="text-gray-500 ">
                <ImPinterest2 size={36} />
              </button>
              <button className="text-gray-500 pl-3">
                <LuInstagram size={36} />
              </button>
            </div>
      </div>

          <div className=" flex justify-between w-full py-3 text-md max-md:text-sm  max-sm:py-3 max-md:flex-col max-md:justify-center max-md:items-center gap-2 ">
            <div className="max-sm:flex max-sm:justify-start">
              © 2006 - 2024 The Knot Worldwide Inc.
            </div>
            <div className="flex justify-evenly gap-4 max-sm:gap-1 ">
              <div>Terms & Conditions</div>
              <div>Privacy policy</div>
              <div>SMS Policy</div>
              <div>Help</div>
          </div>
          </div>
        </div>
        </div>
       
    
  );
};

export default Mp_Loginpage;