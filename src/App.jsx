
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import './App.css'

import Booking from './pages/Booking'
import Tools from './pages/Home'
import OurStory from './pages/OurStory'
import WhyChooseUs from './pages/WhyChooseUs'
import FAQs from './pages/FAQs'

import ContactUs from './pages/Contactus'
import TyreRepairHomePickup from './pages/TyreRepairHomePickup'
import TyreRetreading from './pages/TyreRetreading'
import ComingSoon from './components/ComingSoon'
import Homepage from './pages/Home'




function App() {

  return (
    <>

      <Router>
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/tyre-repair-home-service" element={<TyreRepairHomePickup />} />
        <Route path="/tyre-retreading" element={<TyreRetreading />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact-us" element={<ContactUs />} />
            {/* Wildcard route for undefined paths */}
            <Route path="*" element={<ComingSoon />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
