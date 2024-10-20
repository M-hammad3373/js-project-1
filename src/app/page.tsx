'use client'
import FeaturedCourses from '@/components/FeaturedCourses'
import FeaturedWebinars from '@/components/FeaturedWebinars'
import Herosection from '@/components/Herosection'
import WhyChooseUs from '@/components/WhyChooseUs'
import People from '@/components/People'
import WavyBackgroundDem from '@/components/WavyBackgroundDem'



import React from 'react'

const page = () => {
  return (
    <main className='min-h-screen bg-black/[0.96] bg-grid-white/[0.07]'>

      <Herosection/> 
      <FeaturedCourses/>
      <WhyChooseUs/>
      <FeaturedWebinars/>
      <People />
      <WavyBackgroundDem />
  
      
    
    
      
      </main>
  )
}

export default page