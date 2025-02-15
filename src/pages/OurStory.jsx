import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function OurStory() {
  return (
    <>
     <Navbar/>
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center"
      >
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">Our Story</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Welcome to <span className="text-yellow-300 font-semibold">TyreCare Solutions</span>, your trusted partner in tyre services. 
          Our journey began with a simple goal: to provide reliable, efficient, and top-quality 
          tyre solutions to customers across the region. 
        </p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-8 bg-gray-800 p-6 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-yellow-400">Why We Started?</h2>
          <p className="text-gray-300 mt-4">
            We noticed that tyre-related issues often caused unnecessary stress and delays. 
            From unexpected punctures to worn-out tyres, getting reliable service was a challenge. 
            That's why we introduced convenient home pickup & delivery repair services, a wide selection 
            of new and retreaded tyres, and professional wheel alignment solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 p-6 border-l-4 border-yellow-400"
        >
          <h2 className="text-2xl font-semibold text-yellow-400">Our Commitment</h2>
          <p className="text-gray-300 mt-4">
            At <span className="text-yellow-300 font-semibold">TyreCare Solutions</span>, we prioritize customer satisfaction. 
            Whether you're looking to buy a new set of tyres, get your old ones retreaded, or need emergency 
            repair services, we’re here to help. Our team of experts ensures high-quality service 
            with quick turnaround times.
          </p>
        </motion.div>
      </motion.div>
    </div>
    </>
   
  );
}
