import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import UserProfile from "./UserMenu";
import { MoonIcon, SunIcon } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleSubMenu = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  const [darkMode, setDarkMode] = useState(
    typeof window !== "undefined" ? localStorage.getItem("theme") === "dark" : false
  );

  const menuItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About Us",
      subMenuKey: "about-us",
      subMenuItems: [
        { label: "Our Story", href: "/our-story" },
        { label: "Why Choose Us?", href: "/why-choose-us" },
        { label: "Our Team", href: "/our-team" },
      ],
    },
    {
      title: "Services",
      subMenuKey: "services",
      subMenuItems: [
        { label: "Tyre Repair & Home Pickup", href: "/tyre-repair-home-service" },
        { label: "Wheel Alignment & Balancing", href: "/wheel-alignment-balancing" },
        { label: "Tyre Retreading", href: "/tyre-retreading" },
        { label: "Gettis Service", href: "/gettis-service" },
      ],
    },
    {
      title: "Buy Tyres & Accessories",
      subMenuKey: "buy",
      subMenuItems: [
        { label: "New Tyres", href: "/buy-new-tyres" },
        { label: "Old Tyres (Used)", href: "/buy-used-tyres" },
        { label: "Retreaded Tyres", href: "/buy-retreaded-tyres" },
        { label: "Tubes", href: "/buy-tubes" },
      ],
    },
    {
      title: "Gallery",
      href: "/gallery",
    },
    {
      title: "FAQs",
      href: "/faqs",
    },
    {
      title: "Contact Us",
      href: "/contact-us",
    },
  ];
  

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-2xl sticky top-0 w-full z-50 lg:px-[5rem]"
    >
      <div className="container mx-auto flex justify-between items-center py-4 ">
        {/* Logo */}
        <motion.h1 className="text-primary text-md lg:text-3xl px-2 lg:px-0  font-extrabold uppercase">
          <a href="/">Gausiya Tyre</a>
        </motion.h1>

        {/* Navigation Menu */}
        <nav className="relative flex items-center">
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-1">
            {menuItems.map((item, index) => (
              <li key={index} className="relative group">
                {item.subMenuItems ? (
                  <>
                    <button
                      onClick={() => toggleSubMenu(item.subMenuKey)}
                      className="flex items-center justify-between w-full md:w-auto py-2 px-2 hover:text-primary   transition-colors duration-300 cursor-pointer"
                    >
                      {item.title}
                      <motion.div
                        animate={{
                          rotate: openSubMenu === item.subMenuKey ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDownIcon className="w-5 h-5 ml-1" />
                      </motion.div>
                    </button>
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{
                        opacity: openSubMenu === item.subMenuKey ? 1 : 0,
                        y: openSubMenu === item.subMenuKey ? 0 : -10,
                      }}
                      transition={{ duration: 0.3 }}
                      className={`absolute left-0 mt-1 bg-white rounded-lg shadow-lg cursor-pointer w-48 ${
                        openSubMenu === item.subMenuKey ? "block" : "hidden"
                      } md:group-hover:block`}
                    >
                      {item.subMenuItems.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="px-4 py-2 mx-2 mb-2  text-base lg:text-sm text-secondary hover:bg-gray-100 hover:text-primary transition-colors duration-300 rounded-md overflow-hidden whitespace-nowrap truncate"
                        >
                          <a href={subItem.href}>{subItem.label}</a>
                        </li>
                      ))}
                    </motion.ul>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="block py-2 px-2 hover:text-primary transition-colors duration-300"
                  >
                    {item.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="hidden lg:block p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-400 cursor-pointer"
          >
            {darkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
          </button>
          
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="text-red-800 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 left-0 w-64 bg-white shadow-2xl z-50 flex flex-col"
          >
            <div className="w-full flex justify-between  p-4 border border-b-2 border-gray-300 ">
                {/* <img src='/images/logo.webp' alt="Gausiya Logo" className="w-full max-w-[150px] max-h-12 object-ontain"/> */}
                <h1 className=" px-2 text-lg text-primary font-semibold uppercase ">Gausiya Tyre</h1>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className=" focus:outline-none cursor-pointer text-red-800 cusor-pointer"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
  
            </div>
            <ul className="space-y-2 p-4">
              {menuItems.map((item, index) => (
                <li key={index}>
                  {item.subMenuItems ? (
                    <>
                      <button
                        onClick={() => toggleSubMenu(item.subMenuKey)}
                        className="flex items-center justify-between w-full py-1 px-4 hover:text-primary hover:rounded-md hover:bg-gray-100 transition-colors duration-300 cursor-pointer overflow-hidden whitespace-nowrap truncate"
                      >
                        {item.title}
                        <motion.div
                          animate={{
                            rotate: openSubMenu === item.subMenuKey ? 180 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDownIcon className="w-5 h-5 ml-1" />
                        </motion.div>
                      </button>
                      {openSubMenu === item.subMenuKey && (
                        <ul className="pl-4">
                          {item.subMenuItems.map((subItem, subIndex) => (
                            <li
                              key={subIndex}
                              className="text-sm hover:rounded-md hover:bg-gray-100 hover:text-primary transition-colors duration-300"
                            >
                              <a href={subItem.href} className="block w-full px-4 py-2 cursor-pointer overflow-hidden whitespace-nowrap truncate">{subItem.label}</a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="block py-1 px-4 hover:bg-gray-100 hover:rounded-md hover:text-primary transition-colors duration-300"
                    >
                      {item.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            {/* User Profile */}
            <div className="mt-auto  h-16">
              <UserProfile />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar