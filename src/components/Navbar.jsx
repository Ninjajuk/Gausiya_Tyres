import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import UserProfile from "./UserMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleSubMenu = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  const menuItems = [
    {
      title: "About Us",
      subMenuKey: "about-us",
      subMenuItems: [
        { label: "Introduction", href: "/introduction" },
        { label: "Administration & Jurisdiction", href: "/administration-jurisdiction" },
        { label: "Vision & Mission", href: "/vission-mission" },

      ],
    },
    {
      title: "Services",
      subMenuKey: "academics",
      subMenuItems: [
        { label: "Repair", href: "/academic-course" },
        { label: "Wheel Alignment", href: "/academic-fee-structure" },
        { label: "Old Tyre", href: "/academic-faculty" },
      ],
    },
    { title: "Rules", href: "/rules-regulations" },
    { title: "Gallary", href: "/gallary" },
    { title: "Contact Us", href: "/contact-us" },
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
        <motion.h1 className="text-primary text-md lg:text-3xl font-extrabold">
          <a href="/">Gausiya</a>
        </motion.h1>

        {/* Navigation Menu */}
        <nav className="relative">
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-1">
            {menuItems.map((item, index) => (
              <li key={index} className="relative group">
                {item.subMenuItems ? (
                  <>
                    <button
                      onClick={() => toggleSubMenu(item.subMenuKey)}
                      className="flex items-center justify-between w-full md:w-auto py-2 px-2 hover:text-yellow-400 transition-colors duration-300 cursor pointer"
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
                          className="px-4 py-2 hover:bg-yellow-400 hover:text-purple-900 transition-colors duration-300"
                        >
                          <a href={subItem.href}>{subItem.label}</a>
                        </li>
                      ))}
                    </motion.ul>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="block py-2 px-2 hover:text-yellow-400 transition-colors duration-300"
                  >
                    {item.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="text-blue-800 focus:outline-none"
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
            <div className="flex items-center p-4">
              <div className="px-4 text-lg font-extrabold">
                <h1>Gausiya</h1>
              </div>
              <div className="ml-auto">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="focus:outline-none cursor-pointer"
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
            </div>
            <ul className="space-y-2 p-4">
              {menuItems.map((item, index) => (
                <li key={index}>
                  {item.subMenuItems ? (
                    <>
                      <button
                        onClick={() => toggleSubMenu(item.subMenuKey)}
                        className="flex items-center justify-between w-full py-1 px-4 hover:text-yellow-400 transition-colors duration-300"
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
                              className="px-4 py-2 text-sm hover:rounded-md hover:bg-yellow-400 hover:text-purple-900 transition-colors duration-300"
                            >
                              <a href={subItem.href}>{subItem.label}</a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="block py-1 px-4 hover:text-yellow-400 transition-colors duration-300"
                    >
                      {item.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            {/* User Profile */}
            <div className="mt-auto bg-gray-400 h-16">
              <UserProfile />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar