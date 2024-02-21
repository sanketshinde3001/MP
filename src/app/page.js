import React from 'react'
import Mp_hero from './Components/Mp_hero'
import Mp_stats from './Components/Mp_stats'
import Mp_cards from './Components/Mp_cards'
import Mp_section1 from './Components/Mp_section1'
import Mp_section2 from './Components/Mp_section2'
import Mp_section3 from '@/app/Components/Mp_section3'
import Mp_section5 from '@/app/Components/Mp_section5'
import Mp_section6 from './Components/Mp_section6'
import Mp_contatctus from './Components/Mp_contatctus'
import Mp_footer from './Components/Mp_footer'
import Mp_slider from './Components/Mp_slider'

const page = () => {

  return ( 
    <div>
    <Mp_hero/>
    <Mp_stats/>
    <Mp_section1/>
    <Mp_section2 
    borderColor="purple-700"
    imageSrc="https://pros.weddingpro.com/wp-content/uploads/2023/10/Iris-Mannings-Photography-Ikem-and-Shae-Vendor-With-Couple-Venue-Yours-Truly-165-1.png?w=1024"
    imagewidth={1038}
    imageheight={1032}
    topTag="35M Couples love us!"
    title="Boost your business’ credibility"
    description="Build your reputation by investing in wedding advertising on The Knot and WeddingWire, two of the most trusted wedding marketplaces hosting more than 9 million couple reviews."
    linkHref="our-products/reviews"
    buttonText="Gain your Couple's trust"
   margintop={20}/>
    <Mp_section3/>
    <Mp_section2 
     borderColor="purple-700"
     imageSrc="https://pros.weddingpro.com/wp-content/uploads/2023/10/6_HP_Monitor-growth.png"
     imagewidth={1005}
     imageheight={820}
     topTag=""
     title="Monitor your business growth and advertising with ease&nbsp;"
     description="Our robust Insights tool measures your performance from every interaction to make it easy for you to view, track and understand the ROI of partnering with us."
     buttonText="Understand your ROI"
     linkHref="our-products/insights"
     
    />
    <Mp_section5/>
    <Mp_section6/>
    <Mp_cards/>
    <Mp_slider/>
    <Mp_contatctus/>
    <Mp_footer/>





    </div>
  )
}

export default page
