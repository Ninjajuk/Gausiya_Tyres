import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function TyreRepairHomePickup() {
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
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">Tyre Repair & Home Pickup</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Get your tyres repaired with ease! We offer **home pickup and delivery** for tyre repairs, so you don’t have to worry about a thing.
        </p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-8 bg-gray-800 p-6 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-yellow-400">✔ How It Works</h2>
          <p className="text-gray-300 mt-4">
            1️⃣ **Book a Pickup** – Schedule a tyre pickup online or call us.
          </p>
          <p className="text-gray-300 mt-2">
            2️⃣ **Tyre Repair** – Our expert technicians repair your tyre with precision.
          </p>
          <p className="text-gray-300 mt-2">
            3️⃣ **Home Delivery** – We deliver your repaired tyre right to your doorstep.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 p-6 border-l-4 border-yellow-400"
        >
          <h2 className="text-2xl font-semibold text-yellow-400">✔ Why Choose Our Service?</h2>
          <p className="text-gray-300 mt-4">
            🚗 **Convenience** – No need to visit a shop; we handle everything for you.
          </p>
          <p className="text-gray-300 mt-2">
            🛠 **Expert Technicians** – Your tyres are in safe hands with our professionals.
          </p>
          <p className="text-gray-300 mt-2">
            🕒 **Fast Service** – Get your tyres repaired and delivered in no time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-8 bg-gray-800 p-6 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-yellow-400">✔ Book Your Pickup Now</h2>
          <p className="text-gray-300 mt-4">
            Call us at **+91 98765 43210** or book online through our website.
          </p>
        </motion.div>
      </motion.div>
    </div>
    </>

  );
}
