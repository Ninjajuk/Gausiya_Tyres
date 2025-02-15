import { useState } from "react";
import { FaUser, FaCog, FaSignOutAlt, FaBell, FaQuestionCircle } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";

export default function UserProfile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative mt-auto bg-gray-50 h-16 flex items-center justify-center text-primary-color">
      <div
        className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-100 text-primary rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaUser className="w-6 h-6" />
        <span className="font-semibold">Samsuddin Ansari</span>
        <MdExpandMore className="w-5 h-5" />
      </div>
      {isOpen && (
        <div className="absolute bottom-16 bg-white shadow-lg rounded-md w-48 py-2 text-gray-800">
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2">
            <FaCog className="w-4 h-4" />
            <span>Settings</span>
          </div>
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2">
            <FaBell className="w-4 h-4" />
            <span>Notifications</span>
          </div>
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2">
            <FaQuestionCircle className="w-4 h-4" />
            <span>Help</span>
          </div>
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2 border-t">
            <FaSignOutAlt className="w-4 h-4 text-red-500" />
            <span className="text-red-500">Logout</span>
          </div>
        </div>
      )}
    </div>
  );
}
