import { motion } from 'framer-motion';
import { FaSmile, FaStar, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons from React Icons

const Statistics = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger the animation of children
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <div className="bg-primary text-white py-12">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Happy Customers */}
          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <FaSmile className="text-5xl mb-4" /> {/* Icon */}
            <motion.h3
              className="text-4xl font-bold"
              whileHover={{ scale: 1.1 }} // Hover animation
            >
              10,000+
            </motion.h3>
            <p className="text-lg">Happy Customers</p>
          </motion.div>

          {/* Rated Service */}
          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <FaStar className="text-5xl mb-4" /> {/* Icon */}
            <motion.h3
              className="text-4xl font-bold"
              whileHover={{ scale: 1.1 }} // Hover animation
            >
              5-Star
            </motion.h3>
            <p className="text-lg">Rated Service</p>
          </motion.div>

          {/* Service Centers */}
          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <FaMapMarkerAlt className="text-5xl mb-4" /> {/* Icon */}
            <motion.h3
              className="text-4xl font-bold"
              whileHover={{ scale: 1.1 }} // Hover animation
            >
              50+
            </motion.h3>
            <p className="text-lg">Service Centers</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Statistics;