import { motion } from "framer-motion";
import Navbar from "./Navbar";

export default function ComingSoon() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold text-yellow-400 mb-4">Coming Soon</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          We're working on something amazing. Stay tuned for updates!
        </p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 bg-gray-800 p-6 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-yellow-400">🚀 Stay Updated</h2>
          <p className="text-gray-300 mt-4">Follow us on social media or subscribe to our newsletter to be the first to know.</p>
        </motion.div>
      </motion.div>
    </div>
    </>

  );
}
