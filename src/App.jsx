
import './App.css'
import FeaturedServices from './components/FeatureServices'
import CopyRightFooter from './components/footer/CopyRightFooter'


import Navbar from './components/Navbar'
import BannerSlider from './components/Slider/BannerSlider'

function App() {

  return (
    <>
      <section className='flex flex-col min-h-screen'>
        <Navbar />
        <div className='flex-1'>
          <BannerSlider/>
          <FeaturedServices/>
          <h1>Home Page</h1>
        </div>
        <div className='mt-auto'> <CopyRightFooter /></div>

      </section>

    </>
  )
}

export default App
