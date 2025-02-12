


import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const messages = [
    {
        name: "Samsuddin Ansari",
        title: "Sacred Heart Secondary ",
        message:
            "The School aims to create a supportive and inclusive environment where every student is encouraged to explore their potential and achieve their personal best in all aspects of their life.",
        img: "https://avatars.githubusercontent.com/u/108830220?v=4",
        href: "/principal-message",
    },
    {
        name: "Ms. Jane Smith",
        title: "Headmistress, Sacred Heart Secondary School",
        message:
            "Education is a lifelong journey, and we strive to make it as enriching and inspiring as possible.",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        href: "/headmistress-message",
    },
];

const TwoDivwithCarousel = () => {
    const [index, setIndex] = useState(0);
    // const navigate = useNavigate();

    const nextMessage = () => {
        setIndex((prev) => (prev + 1) % messages.length);
    };

    const prevMessage = () => {
        setIndex((prev) => (prev - 1 + messages.length) % messages.length);
    };

    const handleNavigate = (msg) => {
        navigate(msg.href);
    };

    return (
        <div className="bg-white  min-h-[500px]  py-2 lg:px-[5rem]">
            <div className="container mx-auto py-2 px-4 ">
                <h2 className="text-3xl md:text-4xl font-extrabold text-center  mb-4">
                    Testimonial 
                </h2>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Div - Carousel */}
                    <div className="relative h-[500px] w-full overflow-hidden rounded-2xl shadow-md hover:shadow-2xl border border-gray-300 hover:border-primary bg-white">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                className="absolute inset-0 flex flex-col items-center justify-center p-8"
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                            >
                                <img
                                    src={messages[index].img}
                                    alt={messages[index].name}
                                    className="w-40 h-40 object-cover rounded-full border-4 border-purple-200 shadow-lg"
                                />
                                <h2 className="text-2xl font-bold text-primary mt-6">
                                    {messages[index].name}
                                </h2>
                                <p className="text-md text-blue-800 font-semibold">
                                    {messages[index].title}
                                </p>
                                <p className="mt-4 text-sm lg:text-base text-gray-600 text-center max-w-md">
                                    "{messages[index].message}"
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => handleNavigate(messages[index])}
                                    className="mt-6 px-6 py-2 bg-primary text-white rounded-full hover:bg-purple-800 transition-colors"
                                >
                                    Read More
                                </motion.button>
                            </motion.div>
                        </AnimatePresence>

                        <button
                            onClick={prevMessage}
                            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-primary p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
                        >
                            <FiChevronLeft size={24} className="text-white" />
                        </button>
                        <button
                            onClick={nextMessage}
                            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-primary p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
                        >
                            <FiChevronRight size={24} className="text-white" />
                        </button>
                    </div>

                    {/* Right Div - School Mission and Values */}
                    <div className="h-[500px] w-full rounded-2xl shadow-md hover:shadow-2xl bg-white p-8 flex flex-col justify-center items-center border border-gray-300 hover:border-primary ">
                        <h2 className="text-lg lg:text-3xl font-bold mb-4">Our Mission & Values</h2>
                        <p className="text-sm lg:text-lg text-center mb-6">
                            At Sacred Heart Secondary School, we are committed to fostering a culture of excellence, integrity, and compassion.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-md lg:text-lg">
                            <li>Empowering students to achieve their full potential.</li>
                            <li>Promoting a culture of respect and inclusivity.</li>
                            <li>Encouraging innovation and critical thinking.</li>
                            <li>Building strong character and leadership skills.</li>
                        </ul>
                        <button
                            className="mt-auto px-6 py-2  text-white bg-primary rounded-full hover:bg-blue-800 transition-colors cursor-pointer"
                        >
                            Discover More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TwoDivwithCarousel;