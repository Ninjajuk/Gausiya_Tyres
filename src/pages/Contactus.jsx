import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function ContactUs() {
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
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">Contact Us</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Have any questions or need assistance? Feel free to reach out to us.
        </p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-8 bg-gray-800 p-6 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-yellow-400">📍 Our Address</h2>
          <p className="text-gray-300 mt-4">14 KM Umrangso, Dima Hasao, India</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 p-6 border-l-4 border-yellow-400"
        >
          <h2 className="text-2xl font-semibold text-yellow-400">📞 Contact Number</h2>
          <p className="text-gray-300 mt-4">+91 75420 67763</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-8 bg-gray-800 p-6 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-yellow-400">✉ Email Us</h2>
          <p className="text-gray-300 mt-4">gausiyatyreworks@gmail.com</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-8 p-6 border-l-4 border-yellow-400"
        >
          <h2 className="text-2xl font-semibold text-yellow-400">🕒 Working Hours</h2>
          <p className="text-gray-300 mt-4">Mon - Sat: 9 AM - 7 PM</p>
          <p className="text-gray-300">Sunday: Closed</p>
        </motion.div>
      </motion.div>
    </div>
    </>

  );
}
