import React, { useState } from 'react';
import { HiHome, HiUser, HiCog, HiChevronLeft, HiChevronRight, HiLogout } from 'react-icons/hi';
import { NavLink, useNavigate } from 'react-router-dom';
import '@/assets/css/UserSidebar.css'; // Ensure this CSS file contains the relevant styles

const UserSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Perform any logout logic if needed (e.g., clearing auth tokens)
    navigate('/'); // Navigate to the login page
  };

  const SidebarLinks = [
    {
      title: "Class",
      path: "/staff/class",
      icon: <HiHome className="text-2xl" />,
    },
    {
      title: "Subject",
      path: "/staff/subject",
      icon: <HiCog className="text-2xl" />,
    },
    {
      title: "Contact",
      path: "/contact",
      icon: <HiUser className="text-2xl" />,
    },
  ];

  return (
    <div className={`flex flex-col h-screen bg-gray-800 text-white ${isOpen ? 'w-64' : 'w-20'} transition-width duration-300`}>
      <button onClick={toggleSidebar} className="p-4">
        {isOpen ? <HiChevronLeft className="text-2xl" /> : <HiChevronRight className="text-2xl" />}
      </button>
      <nav className="flex flex-col mt-4 flex-1">
        {SidebarLinks.map((link, index) => (
          <div key={index} className="relative group">
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `nav-link flex items-center p-4 hover:bg-gray-700 ${isActive ? 'nav-link-active' : ''}`
              }
            >
              {link.icon}
              {isOpen && <span className="ml-4">{link.title}</span>}
            </NavLink>
          </div>
        ))}
        <div className="flex-1 flex items-end p-4">
          <button 
            onClick={handleLogout}
            className="logout"
          >
            <HiLogout className="text-2xl" />
            {isOpen && <span className="ml-2">Logout</span>}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default UserSidebar;
