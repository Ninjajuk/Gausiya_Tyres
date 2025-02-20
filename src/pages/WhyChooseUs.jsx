import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function WhyChooseUs() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl text-center"
                >
                    <h1 className="text-3xl font-bold text-yellow-400 mb-6">Why Choose Us?</h1>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        At <span className="text-yellow-300 font-semibold">TyreCare Solutions</span>, we go the extra mile to ensure top-notch tyre services
                        with unmatched quality and convenience. Here's why we stand out:
                    </p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="mt-8 bg-gray-800 p-6 rounded-2xl shadow-lg"
                    >
                        <h2 className="text-2xl font-semibold text-yellow-400">✔ Home Pickup & Delivery</h2>
                        <p className="text-gray-300 mt-4">
                            We understand your busy schedule. That’s why we offer convenient home pickup
                            and delivery for tyre repairs, ensuring a hassle-free experience.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="mt-8 p-6 border-l-4 border-yellow-400"
                    >
                        <h2 className="text-2xl font-semibold text-yellow-400">✔ Wide Range of Tyre Options</h2>
                        <p className="text-gray-300 mt-4">
                            Whether you're looking for brand-new tyres, retreaded tyres, or high-quality used tyres,
                            we offer a variety of options to suit your needs and budget.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="mt-8 bg-gray-800 p-6 rounded-2xl shadow-lg"
                    >
                        <h2 className="text-2xl font-semibold text-yellow-400">✔ Expert Technicians</h2>
                        <p className="text-gray-300 mt-4">
                            Our team consists of highly skilled professionals who ensure precise wheel alignment,
                            balancing, and repair services for your safety and comfort.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </>

    );
}
