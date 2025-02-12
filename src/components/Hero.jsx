import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export default function HeroSection() {
    const jobProfiles = [
        "Tyre Repair Experts",
        "Wheel Alignment Specialists",
        "Tyre Replacement Professionals",
        "Puncture Repair Masters",
        "Tyre Maintenance Gurus",
    ];

    const [headerText, setHeaderText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = jobProfiles[currentIndex];
        const typingSpeed = isDeleting ? 50 : 100; // Faster when deleting

        const timeout = setTimeout(() => {
            if (!isDeleting && charIndex < currentWord.length) {
                // Typing effect
                setHeaderText((prev) => prev + currentWord[charIndex]);
                setCharIndex(charIndex + 1);
            } else if (isDeleting && charIndex > 0) {
                // Deleting effect
                setHeaderText((prev) => prev.slice(0, -1));
                setCharIndex(charIndex - 1);
            } else if (!isDeleting && charIndex === currentWord.length) {
                // Pause before starting to delete
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && charIndex === 0) {
                // Move to the next word after deleting
                setIsDeleting(false);
                setCurrentIndex((prev) => (prev + 1) % jobProfiles.length);
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, currentIndex]);

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white overflow-hidden">
            {/* Dynamic Background Animation */}
            <motion.div
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            />

            {/* Floating Icons */}
            {/* {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute text-4xl pointer-events-none"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 20, opacity: 1 }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: Math.random() * 2 + 2,
                        delay: Math.random() * 2,
                    }}
                >
                    {["🚗", "🛞", "🔧", "⚙️", "🔩"][i % 5]}
                </motion.div>
            ))} */}

            {/* Title */}
            <motion.h1
                className="text-4xl md:text-6xl font-bold text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                Welcome to{" "}
                <span className="text-yellow-400">
                    {headerText}
                    <span className="ml-1 inline-block w-1 h-8 bg-yellow-400 animate-blink">|</span>
                </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                className="mt-4 text-lg text-center max-w-lg text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                Your trusted partner for all tyre services. We provide top-notch tyre repair, replacement, and maintenance to keep you moving safely.
            </motion.p>

            {/* CTA Buttons */}
            <div className="mt-6 flex space-x-4 z-50">
                <motion.a
                    href="/booking"
                    className="bg-yellow-400 text-black hover:bg-yellow-500 px-6 py-3 text-lg font-semibold rounded-lg cursor-pointer shadow-lg hover:shadow-xl transition-all"
                    whileTap={{ scale: 0.95 }}
                >
                    Book Now
                </motion.a>
                <motion.a
                    href="/services"
                    className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-6 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                    whileTap={{ scale: 0.95 }}
                >
                    Our Services
                </motion.a>
            </div>

            {/* Animated Sparkles */}
            <motion.div
                className="absolute bottom-10 right-10 text-yellow-400"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <SparklesIcon className="w-12 h-12" />
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
            >
                <div className="animate-bounce w-6 h-6 border-2 border-yellow-400 rounded-full flex items-center justify-center">
                    <svg
                        className="w-4 h-4 text-yellow-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>
            </motion.div>
        </div>
    );
}