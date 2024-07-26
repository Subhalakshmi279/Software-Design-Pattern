import React, { useState } from 'react';
import { HiHome, HiUser, HiCog, HiDocumentText } from 'react-icons/hi'; // Example icons
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`flex flex-col h-screen bg-gray-800 text-white ${isOpen ? 'w-64' : 'w-20'} transition-width duration-300`}>
      <button onClick={toggleSidebar} className="p-4">
        {isOpen ? '<' : '>'}
      </button>
      <nav className="flex flex-col mt-4">
        <Link to="/admin/dashboard" className="flex items-center p-4 hover:bg-gray-700">
          <HiHome className="text-2xl" />
          {isOpen && <span className="ml-4">Edit</span>}
        </Link>
        <Link to="/admin/users" className="flex items-center p-4 hover:bg-gray-700">
          <HiUser className="text-2xl" />
          {isOpen && <span className="ml-4">Stafffs</span>}
        </Link>
        <Link to="/admin/settings" className="flex items-center p-4 hover:bg-gray-700">
          <HiCog className="text-2xl" />
          {isOpen && <span className="ml-4">Settings</span>}
        </Link>
        <Link to="/admin/reports" className="flex items-center p-4 hover:bg-gray-700">
          <HiDocumentText className="text-2xl" />
          {isOpen && <span className="ml-4">Timetable</span>}
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
