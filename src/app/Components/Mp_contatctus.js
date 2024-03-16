import React from 'react';
import Link from 'next/link';

const Mp_contatctus = () => {
  return (
     <div className=" bg-customBlue w-full  "  id="footerSection">
        {/* font-family: "Nunito Sans", "Helvetica", Arial, sans-serif */}
        <div className="container flex flex-col md:flex-row justify-center items-center md:mx-auto lg:mx-auto xl:mx-auto p-4 md:p-20 lg:p-20 xl:p-20 md:content-center">
          <div className="img--1">
      {/* flex items-center justify-center */}
          <img 
    className=" max-w-full max-h-full rounded-2xl" 
 
  
  src="https://pros.weddingpro.com/wp-content/uploads/2023/10/13_HP_Form-Field.png?w=1024" 
  alt=""
  
/>
   
          </div>
      
          <div className="heading text-white mx-4 md:mx-8 lg:mx-12 mt-4 md:mt-0">
            <h2 className="text-5xl md:text-3xl lg:text-3xl xl:text-4xl font-extrabold mb-3">Get started with us!</h2>
            <p className="my-2 md:my-6 lg:my-3 xl:my-3 font-semibold text-sm md:text-base lg:text-base xl:text-base">
              Fill out the form below, or call <span className="link link-hover underline hover:no-underline">1-877-331-7752</span> to get started.
            </p>
      
            <div className="flex flex-wrap gap-4 mb-4   md:mb-4 lg:mb-4 xl:mb-4 ">

            <input 
                type="text" 
                placeholder="First Name *" 
                className=" input rounded border bg-white border-gray-300  text-black w-full max-w-72 max-h-10" 
                required="true"/>
              
              <input 
                type="text" 
                placeholder="Last Name *" 
                className="input rounded border bg-white border-gray-300  text-black w-full max-w-72 max-h-10" 
                required="true"/>
            </div>
      
      
            <div className="flex flex-wrap gap-4 mb-4   md:mb-4 lg:mb-4 xl:mb-4 ">
            <input 
                type="text" 
                placeholder="Company *" 
                className="input rounded border bg-white border-gray-300  text-black w-full max-w-72 max-h-10 md:" 
                required="true"/>
                
              <select className="w-full max-w-72 rounded border max-h-10 font-semibold bg-white border-gray-300" required style={{ color: '#666666', width: '288px', height: '48px' }}>
                <option value=""style={{ color: '#999999' }}>Business Category *</option>
                <option value="US" style={{ color: '#666666' }}>Travel Agent</option>
                <option value="CA" style={{ color: '#666666' }}>Wedding Bands</option>
                <option value="UK" style={{ color: '#666666' }}>Wedding Cakes</option>
                <option value="UK" style={{ color: '#666666' }}>Wedding Dresses</option>
                <option value="UK" style={{ color: '#666666' }}>Wedding Planner</option>
                <option value="UK" style={{ color: '#666666' }}>Wedding Cakes</option>
                <option value="UK" style={{ color: '#666666' }}>Wedding Cakes</option>
                <option value="UK" style={{ color: '#666666' }}>Wedding Cakes</option>
                <option value="UK" style={{ color: '#666666' }}>Wedding Cakes</option>
                <option value="UK" style={{ color: '#666666' }}>Wedding Cakes</option>
                <option value="UK" style={{ color: '#666666' }}>Wedding Cakes</option>
                <option value="UK" style={{ color: '#666666' }}>Wedding Cakes</option>
                <option value="UK" style={{ color: '#666666' }}>Wedding Cakes</option>
                <option value="UK" style={{ color: '#666666' }}>Wedding Cakes</option>
                <option value="UK" style={{ color: '#666666' }}>Wedding Cakes</option>
                <option value="UK" style={{ color: '#666666' }}>DJ'S</option>
                <option value="UK" style={{ color: '#666666' }}>DJ'S</option>
              </select>
            </div>
      
            <div className="flex flex-wrap gap-4 mb-4   md:mb-4 lg:mb-4 xl:mb-4 ">
              <input
                className="input rounded border  max-h-10 bg-white border-gray-300  text-black w-full max-w-72"
                type="text"
                placeholder="Phone *"
                required="true"
              />
              <input
                className="input rounded border max-h-10 bg-white border-gray-300  text-black w-full max-w-72 md:gap-4"
                type="text"
                placeholder="Email *"
                required="true"
              />
            </div>
      
            <div>
            <select className="w-full max-w-72 bg-white rounded border-gray-300 text-black font-semibold text-start max-h-10" required style={{ color: '#666666', width: '288px', height: '48px', paddingTop: '5px' }}>
               
                <option value="" style={{ color: '#999999' }}>Country *</option>
                <option value="US" style={{ color: '#666666' }}>United States</option>
                <option value="CA" style={{ color: '#666666' }}>Canada</option>
                <option value="CA" style={{ color: '#666666' }}>Canada</option>
                <option value="CA" style={{ color: '#666666' }}>Canada</option>
                <option value="CA" style={{ color: '#666666' }}>Canada</option>
                <option value="CA" style={{ color: '#666666' }}>Canada</option>
                <option value="CA" style={{ color: '#666666' }}>Canada</option>
                <option value="CA" style={{ color: '#666666' }}>Canada</option>
                <option value="CA" style={{ color: '#666666' }}>Canada</option>
                <option value="CA" style={{ color: '#666666' }}>Canada</option>
                <option value="CA" style={{ color: '#666666' }}>Canada</option>
                <option value="CA" style={{ color: '#666666' }}>Canada</option>
                <option value="UK" style={{ color: '#666666' }}>United Kingdom</option>
              </select>
            </div>
      
            <div className="flex justify-start align-center">
              <input type="checkbox" name="" id="" className="mr-2" />
              <p className="mt-6 text-sm md:text-base lg:text-base xl:text-base">
                By submitting and sharing your information you agree to
                WeddingPro’s <span className="link link-hover underline hover:no-underline font-bold">terms of use</span> and <span className="link link-hover underline hover:no-underline font-bold">privacy policy.</span>
              </p>
            </div>
      
            <div className="flex items-center justify-center mt-6">
            <Link href="/temp" class="py-4 px-20 flex items-center  font-extrabold rounded-full border  bg-white text-purple-900 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
        <button 
          type="button" 
          className="focus:outline-none font-extrabold"
        >
          Get in touch
        </button>
      </Link>
      
      
      </div>
      
          </div>
        </div>
      </div>
      

  )
}

export default Mp_contatctus;