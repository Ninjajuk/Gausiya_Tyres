import React from 'react'
import Testimonial from '../components/Testimonial'
import CopyRightFooter from '../components/footer/CopyRightFooter'
import Navbar from '../components/Navbar'

import HeroSection from '../components/Hero'
import Marquee from '../components/Marquee'
import WhyChooseUs from '../components/WhyChooseUs'
import ServiceHighlights from '../components/ServiceHighlights'
import Statistics from '../components/Statistics'
import Newsletter from '../components/Newsletter'


const Homepage = () => {
  return (
    <>
          <section className='flex flex-col min-h-screen'>
            <Marquee/>
        <Navbar />
        <div className='flex-1'>
          <HeroSection/>
          {/* <BannerSlider/> */}
          {/* <ImageConverter/>
          <ImageCompressor/> */}
          <div className='py-4 px-2 lg:px-[5rem]'>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-center">
              Professional Tyre Services
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto py-4">
              Find the perfect tyres and services for your vehicle. Book online and get expert assistance from our nearest service center.
            </p>
   
          </div>
          <ServiceHighlights/>
          <WhyChooseUs />
          <Statistics />
          {/* <ImageCarousel /> */}
          <Testimonial />
          <Newsletter />     

        </div>
        <div className='mt-auto'> <CopyRightFooter /></div>

      </section>



    </>
  )
}

export default Homepage