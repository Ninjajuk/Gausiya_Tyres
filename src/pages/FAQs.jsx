import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function FAQs() {
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
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Here are some of the most common questions our customers ask.
        </p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-8 bg-gray-800 p-6 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-yellow-400">✔ How can I book a tyre repair service?</h2>
          <p className="text-gray-300 mt-4">
            You can book our tyre repair service through our website by filling out the online booking form,
            or by calling our customer support for quick assistance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 p-6 border-l-4 border-yellow-400"
        >
          <h2 className="text-2xl font-semibold text-yellow-400">✔ Do you offer home pickup and delivery?</h2>
          <p className="text-gray-300 mt-4">
            Yes! We offer home pickup and delivery for tyre repairs to make the process hassle-free
            for you. Just select the pickup option while booking.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-8 bg-gray-800 p-6 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-yellow-400">✔ What types of tyres do you sell?</h2>
          <p className="text-gray-300 mt-4">
            We offer a variety of tyres including brand-new tyres, high-quality used tyres, retreaded tyres,
            and tubes. You can browse our catalog on our website.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-8 p-6 border-l-4 border-yellow-400"
        >
          <h2 className="text-2xl font-semibold text-yellow-400">✔ Do you provide wheel alignment services?</h2>
          <p className="text-gray-300 mt-4">
            Absolutely! Our expert technicians provide professional wheel alignment and balancing services
            to ensure a smooth and safe driving experience.
          </p>
        </motion.div>
      </motion.div>
    </div>
    </>

  );
}
