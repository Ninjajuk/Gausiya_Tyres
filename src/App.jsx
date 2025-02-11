
import './App.css'
import FeaturedServices from './components/FeatureServices'
import CopyRightFooter from './components/footer/CopyRightFooter'
import ImageCompressor from './components/ImageCompressor'
import ImageConverter from './components/ImageConverter'


import Navbar from './components/Navbar'
import BannerSlider from './components/Slider/BannerSlider'
import TwoDivwithCarousel from './components/TwoDivWithCarouselItems'
import TyreBrand from './components/TyreBrand'

function App() {

  return (
    <>
      <section className='flex flex-col min-h-screen'>
        <Navbar />
        <div className='flex-1'>
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
            <TyreBrand />
          </div>
          
          <FeaturedServices/>
          <TwoDivwithCarousel/>

        </div>
        <div className='mt-auto'> <CopyRightFooter /></div>

      </section>

    </>
  )
}

export default App
