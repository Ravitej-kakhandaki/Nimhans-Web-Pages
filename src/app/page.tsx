 import Image from 'next/image'
import React from 'react'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import Members from './Components/Members'
import FeatureSection from './Components/FeatureSection'
import TestimonialSection from './Components/TestimonialSection'
import AppointmentSection from './Components/AppointmentSection'
import Footer from './Components/Footer'
import CopyrightSection from './Components/CopyrightSection'

 const Page = () => {
   return (
     <div>
      <img src="Oval.png" alt="" className='Oval'/>
        <Header/>
        <HeroSection/>
        <Members/>
        <FeatureSection/>
        <div className='Circle'></div>
        <TestimonialSection/>
        <AppointmentSection/>
        <div className='ColoredCircle'></div>
        <Footer/>
        <CopyrightSection/>
     </div>
   )
 }
 
 export default Page
 