import React from 'react'
import Mp_hero from './Components/Mp_hero'
import Mp_stats from './Components/Mp_stats'
import Mp_cards from './Components/Mp_cards'
import Mp_section1 from './Components/Mp_section1'
import Mp_section6 from './Components/Mp_section6'
import Mp_contatctus from './Components/Mp_contatctus'
import Mp_footer from './Components/Mp_footer'
import Mp_slider from './Components/Mp_slider'
import Mp_Navbar from './Components/Mp_Navbar'

const page = () => {

  return ( 
    <div>
    <Mp_Navbar/>
    <Mp_hero/>
    <Mp_stats/>
    <Mp_section1/>
    <Mp_section6/>
    <Mp_cards/>
    <Mp_slider/>
    <Mp_contatctus/>
    <Mp_footer/>





    </div>
  )
}

export default page
