import React from "react";
import Image from 'next/image';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import Link from "next/link";

const Mp_footer = () => {
  return (
    <div>
    <div>
      <p className="text text-center italic text-sm m-5">Photo: Terri Baskin Photography |  Sarah Khan Event Styling, Amilye Saunders, Elegance By Roya; Iris Mannings Photography | Angelica & Co. Weddings, She Loves Me; Caroline Lima Photography;<br/> Arevalo & Co</p>
    </div>
    {/* footer */}
    <footer className="footer p-8 sm:p-12 lg:p-16 bg-white">


  <aside className="aside">
    <div className="img">
  <Image
      src="https://pros.weddingpro.com/wp-content/themes/weddingpro-theme/dist/svg/logo-with-knot.svg"
      width="200"
      height="200"
      alt="Picture of the author"
    />
    </div>

 
 <div className="flex space-x-7 py-10">
  <Link href="/temp" className=" w-12 h-12 border border-gray-300 p-2 rounded-full flex items-center justify-center hover:border-black transition duration-500">
    <FaFacebook />
  </Link> 
  <Link href="/temp" className="w-12 h-12 border border-gray-300 p-2 rounded-full flex items-center justify-center hover:border-gray-600 transition  duration-500">
    <FaInstagram />
  </Link>
  <Link href="/temp" className="w-12 h-12 border border-gray-300 p-2 rounded-full flex items-center justify-center hover:border-gray-600 transition duration-500">
    <FaXTwitter />
  </Link>
  <Link href="/temp" className="w-12 h-12 border border-gray-300 p-2 rounded-full flex items-center justify-center hover:border-gray-600 transition duration-500">
    <FaPinterest/>
  </Link>
  
</div>



  <div class="content  flex space-x-4 ">
  <Link href="/temp">
    <img src="https://pros.weddingpro.com/wp-content/themes/weddingpro-theme/dist/svg/weddingpro-app-logo.svg" alt="" width="50" height="50"/>
    </Link>
           
            <div class="item-body text-lg space-y-5">
            Get the WeddingPro for<br/> Vendors App
            </div>
          </div>

  <div className="flex space-x-5 ">
  <Link href="/temp">
    <img src="https://pros.weddingpro.com/wp-content/themes/weddingpro-theme/dist/svg/app-store.svg" alt="" width="120" height="120"/>
  </Link>

  <Link href="/temp">
    <img src="https://pros.weddingpro.com/wp-content/themes/weddingpro-theme/dist/svg/play-store.svg" alt="" width="120" height="120"/>
    </Link>
  
  </div>

  </aside> 
  

  <nav className="space-y-4">
    <h6 className="footer-title">Product</h6> 
    <Link href="/temp" className="link link-hover underline hover:no-underline font-semibold">How it Works </Link>
    <Link href="/temp"className="link link-hover underline hover:no-underline font-semibold">Storefront</Link>
    <Link href="/temp"className="link link-hover underline hover:no-underline font-semibold">Inbox</Link>
    <Link href="/temp"className="link link-hover underline hover:no-underline font-semibold">Insights</Link>
    <Link href="/temp"className="link link-hover underline hover:no-underline font-semibold">Reviews</Link>
  </nav> 
  <nav className="space-y-4">
    <h6 className="footer-title">Resources</h6> 
    <Link href="/temp"className="link link-hover underline hover:no-underline font-semibold">Email Templates</Link>
    <Link href="/temp"className="link link-hover underline hover:no-underline font-semibold">Blog</Link>
    <Link href="/temp"className="link link-hover underline hover:no-underline font-semibold">Reports</Link>
    <Link href="/temp"className="link link-hover underline hover:no-underline font-semibold">Webinars</Link>
    <Link href="/temp"className="link link-hover underline hover:no-underline font-semibold">Events</Link>
    <Link href="/temp"className="link link-hover underline hover:no-underline font-semibold">YouTube</Link>
    <Link href="/temp"className="link link-hover underline hover:no-underline font-semibold">How to Use Our App</Link>
  </nav> 
  <nav className="space-y-4">
    <h6 className="footer-title">About WeddingPro</h6> 
    <Link href="/temp"className="link link-hover underline hover:no-underline font-semibold">The Knot Worldwide</Link>
    <Link href="/temp"className="link link-hover underline hover:no-underline font-semibold">Vendor Support</Link>
    <Link href="/temp"className="link link-hover underline hover:no-underline font-semibold">Fellowship for Change</Link>
    <Link href="/temp"className="link link-hover underline hover:no-underline font-semibold">Educator Program</Link>
    <Link href="/temp"className="link link-hover underline hover:no-underline font-semibold">Careers</Link>
    <Link href="/temp"className="link link-hover underline hover:no-underline font-semibold">International</Link>
    <Link href="/temp"className="link link-hover underline hover:no-underline font-semibold">Privacy Policy</Link>
    <Link href="/temp"className="link link-hover underline hover:no-underline font-semibold">Terms & Conditions</Link>
  </nav>

 
</footer>


<div>
   <hr />
<footer className="footer items-center footer-center p-10 bg-base-950 text-base-content justify-center">

  <copyright className="flex items-center justify-evenly flex-wrap">
  <p className="mr-4 mb-2 sm:mb-0">© 2024 WeddingPro</p>
  <Link href="/temp"className="link link-hover mr-4">1-888-934-0949</Link>
  <Link href="/temp"className="link link-hover mr-4"> Web Accessibility</Link>
  <Link href="/temp"className="link link-hover"> CA Privacy</Link>
{/*  */}

  </copyright>

  </footer>
  </div>
      
    </div>
  );
};

export default Mp_footer;