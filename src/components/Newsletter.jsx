import { motion } from "framer-motion";

const Newsletter = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.2,
      },
    },
  };

  return (
    <div className="bg-gradient-to-br from-gray-500 to-gray-900 text-white py-16 flex justify-center items-center ">
      <motion.div
        className="max-w-3xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <h2 className="text-4xl font-extrabold mb-5 text-white drop-shadow-lg">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-300 mb-8 text-lg">
          Stay updated with the latest news and offers delivered straight to your inbox.
        </p>
        <motion.form className="flex justify-center items-center gap-4" variants={containerVariants}>
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 w-72 sm:w-96 bg-gray-100 text-gray-800 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
          />
          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded-lg shadow-lg hover:bg-hoverPrimary transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            Subscribe
          </button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Newsletter;