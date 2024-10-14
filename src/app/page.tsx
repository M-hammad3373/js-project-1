'use client'
import FeaturedCourses from '@/components/FeaturedCourses'
import Herosection from '@/components/Herosection'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <main className='min-h-screen bg-black/[0.96] bg-grid-white/[0.07]'>
      <Herosection/>
      <Navbar/>
      <FeaturedCourses/>
      
      </main>
  )
}

export default page