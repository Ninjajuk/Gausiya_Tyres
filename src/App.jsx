
import './App.css'
import FeaturedServices from './components/FeatureServices'
import CopyRightFooter from './components/footer/CopyRightFooter'


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
          <BannerSlider/>
          <div className='py-4 px-2 lg:px-[5rem]'><TyreBrand/></div>
          
          <FeaturedServices/>
          <TwoDivwithCarousel/>

        </div>
        <div className='mt-auto'> <CopyRightFooter /></div>

      </section>

    </>
  )
}

export default App
