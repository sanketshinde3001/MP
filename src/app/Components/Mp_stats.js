import React from 'react'

const Mp_stats = () => {
  return (
    <div className='flex items-center xl:max-2xl:pl-5 justify-center container mx-auto mb-20 xl:mt-48 max-lg:flex-wrap max-sm:flex-col w-full'>
        <div className='flex items-center w-1/4 justify-between max-lg:w-1/2  mt-16  max-sm:mt-8 max-sm:w-5/6 max-sm:justify-evenly'>
            <div className='bg-[#d946ef] p-5 max-xl:p-4 rounded-[50%]  max-sm:p-6'> 
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-more"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h.01"/><path d="M12 10h.01"/><path d="M16 10h.01"/></svg>
            </div>
            <div className='flex flex-col w-2/3'>
                <h1 className='text-6xl max-xl:text-4xl max-md:text-3xl max-sm:text-2xl font-extrabold'>29M</h1>
                <p>leads delivered to pros annually</p>
            </div>
        </div>
        <div className='flex items-center w-1/4 justify-between max-lg:w-1/2 mt-16 max-sm:mt-8   max-sm:w-5/6 max-sm:justify-evenly'>
            <div className='bg-[#eab308] p-5 max-xl:p-4 rounded-[50%] max-sm:p-6'> 
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mouse-pointer"><path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/><path d="m13 13 6 6"/></svg>
            </div>
            <div className='flex flex-col w-2/3'>
                <h1 className='text-6xl max-xl:text-4xl max-md:text-3xl max-sm:text-2xl font-extrabold'>250K+</h1>
                <p>pros on The Knot and WeddingWire</p>
            </div>
        </div>
        <div className='flex items-center w-1/4 justify-between max-lg:w-1/2 mt-16 max-sm:mt-8  max-sm:w-5/6 max-sm:justify-evenly'>
            <div className='bg-[#14b8a6] p-5 max-xl:p-4 rounded-[50%] max-sm:p-6'> 
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <div className='flex flex-col w-2/3'>
                <h1 className='text-6xl max-xl:text-4xl max-md:text-3xl max-sm:text-2xl font-extrabold'>8K</h1>
                <p>new couples signing up daily</p>
            </div>
        </div>
        <div className='flex items-center w-1/4 justify-between max-lg:w-1/2 mt-16 max-sm:mt-8  max-sm:w-5/6 max-sm:justify-evenly'>
            <div className='bg-[#38bdf8] p-5 max-xl:p-4 rounded-[50%] max-sm:p-6'> 
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-party-popper"><path d="M5.8 11.3 2 22l10.7-3.79"/><path d="M4 3h.01"/><path d="M22 8h.01"/><path d="M15 2h.01"/><path d="M22 20h.01"/><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"/><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17"/><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7"/><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"/></svg>
            </div>
            <div className='flex flex-col w-2/3'>
                <h1 className='text-6xl max-xl:text-4xl max-md:text-3xl max-sm:text-2xl font-extrabold'>40+</h1>
                <p>years wedding industry experience</p>
            </div>
        </div>
    </div>
  )
}

export default Mp_stats
