
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Booking from './pages/Booking'
import Tools from './pages/Home'




function App() {

  return (
    <>

      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/booking" element={<Booking />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>

    </>
  )
}

export default App
