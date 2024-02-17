import Link from 'next/link'
import React from 'react'

const Mp_cards = () => {
  return (
    <div className='flex justify-center gap-10 px-10 bg-white max-sm:px-1 max-md:flex-col max-md:items-center max-md:justify-center max-md:align-middle max-md:gap-10  hover:text-white md:max-lg:px-3 md:max-lg:gap-4 my-10'>
      <div className="card w-96 text-black shadow-xl max-md:w-[80%] max-sm:w-[94%]">
  <figure><img src="https://pros.weddingpro.com/wp-content/uploads/2023/09/Iris-Mannings-Photography-Kat-and-Amber-Vendor-With-Couple-Planner-076-1.png?w=1024" className=" object-cover h-[256px] w-full" alt="" /></figure>
  <div className="card-body top-44">
    <h2 className="card-title">
    WeddingPro Pricing Guide
    </h2>
    <p>Need help to establish pricing that will help you book more couples? Get wedding industry-insider advice and real-time statistics from The Knot and WeddingWire to help you navigate pricing and attract your ideal clients.</p>
   
  </div>
</div>     
<Link href='/temp'> 
<div className="card w-96 text-black shadow-xl max-md:w-[80%] max-sm:w-[94%]">
  <figure><img src="https://pros.weddingpro.com/wp-content/uploads/2023/10/shutterstock_1937050396.jpg?w=1024" className=" object-cover h-[256px] w-full" alt="" /></figure>
  <div className="card-body">
  <div className="badge badge-secondary rounded-sm bg-purple-300 border-none px-4 py-4 font-semibold mb-4 hover:bg-purple-600 hover:text-white">EVENTS</div>
    <h2 className="card-title">
    5 Reasons To Get Excited About WeddingMBA 2023
    </h2>
    <p>Here at WeddingPro, we're counting down the days to WeddingMBA, and we think
       you should be too! Here are our top 5 reasons to get excited for the event.</p>
   
  </div>
</div>
</Link>

<Link href="/temp">         
 <div className="card w-96 text-black shadow-xl max-md:w-[80%] max-sm:w-[94%] ">
  <figure ><img src="https://pros.weddingpro.com/wp-content/uploads/2021/05/Email-Series-Templates_ColorJoy-Stock.png?w=1024" className=" object-cover h-[256px] w-full"   /></figure>
  <div className="card-body">   
  <div className='flex flex-row gap-4 md:max-lg:flex-col md:max-lg:gap-0 '>
  <div className="badge badge-secondary rounded-sm bg-purple-300 border-none px-4 py-4 font-semibold mb-4 hover:bg-purple-600 hover:text-white">EMAIL</div>
  <div className="badge badge-secondary rounded-sm bg-purple-300 border-none px-4 py-4 font-semibold mb-4 hover:bg-purple-600 hover:text-white">MARKETING</div>
  </div> 
    <h2 className="card-title">
    Email Templates for Wedding Pros
      
    </h2>
    <p>We know you're busy, so we put together a few email templates you can use to reply
       back to leads, ask for reviews and deepen relationships with your couples.</p>
   
  </div>
</div></Link>
    </div>
  )
}

export default Mp_cards