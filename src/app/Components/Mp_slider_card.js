import Image from 'next/image'
import React from 'react'

const Mp_slider_card = () => {
  return (
    <div className='h-[500px] max-sm:h-[700px] max-sm:flex-col  flex items-center justify-center max-sm:justify-start  relative  max-sm:gap-8'>
      <div className='border-2 border-white rounded-lg w-[95%] h-[460px] max-sm:h-[650px] absolute'></div>
      <div className='w-1/2 flex max-sm:w-[80%] items-center justify-center'>
        <div className='w-2/3 flex items-start justify-center flex-col max-sm:w-full max-sm:mt-5'>
        <h3 className='text-2xl max-lg:text-xl leading-relaxed mb-5'>What’s really incredible is about 47% of my inquiries come from either WeddingWire or The Knot. I get a sales meeting with about 90% of those that do inquire and right now, my current closing rate’s about 76%.</h3>
        <h2 className='text-md font-semibold'>
        KIMBERLY MORRILL
        </h2>
        <h2 className='text-sm'>
        Your Perfect Bridesmaid
        </h2>
        </div>
      </div>
      <div className='w-1/2 hidden sm:block max-sm:w-full rounded-3xl '>
        <Image src="https://pros.weddingpro.com/wp-content/uploads/2023/10/12_HP_Vendor-Testimonial-Your-Perfect-Bridesmaid-2.png" height={875} width={1024} alt='Card1' className='rounded-2xl '/>
      </div>
      <div className='w-1/2 sm:hidden flex items-center justify-center max-sm:w-full rounded-3xl '>
        <Image src="https://pros.weddingpro.com/wp-content/uploads/2023/10/12_HP_Vendor-Testimonial-Your-Perfect-Bridesmaid-2.png" height={400} width={500} alt='Card1' className='rounded-2xl '/>
      </div>

    </div>
  )
}

export default Mp_slider_card
