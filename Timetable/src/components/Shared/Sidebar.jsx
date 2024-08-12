import React, { useState } from 'react';
import { HiHome, HiUser, HiCog, HiChevronLeft, HiChevronRight, HiLogout } from 'react-icons/hi';
import { NavLink, useNavigate } from 'react-router-dom';
import '@/assets/css/Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Perform any logout logic if needed (e.g., clearing auth tokens)
    navigate('/'); // Navigate to the root path
  };

  const SidebarLinks = [
    {
      title: "Dashboard",
      path: "/admin/dashboard",
      icon: <HiUser className="text-2xl" />,
    },
    {
      title: "Timetable",
      path: "/admin/timetable",
      icon: <HiHome className="text-2xl" />,
    },
    {
      title: "Details",
      icon: <HiCog className="text-2xl" />,
      subLinks: [
        {
          title: "Subject",
          path: "/admin/subject",
        },
        {
          title: "Staff",
          path: "/admin/staff",
        },
      ],
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
                `flex items-center p-4 hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
              }
            >
              {link.icon}
              {isOpen && <span className="ml-4">{link.title}</span>}
            </NavLink>
            {link.subLinks && (
              <div className="absolute left-full top-0 w-64 hidden group-hover:block bg-gray-800 z-50 shadow-lg">
                {link.subLinks.map((subLink, subIndex) => (
                  <NavLink
                    key={subIndex}
                    to={subLink.path}
                    className={({ isActive }) =>
                      `flex items-center p-4 hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
                    }
                  >
                    {isOpen && <span className="ml-4">{subLink.title}</span>}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      <div className="flex justify-center items-end p-4">
        <button className="logout" onClick={handleLogout}>
          <HiLogout className="text-2xl" />
          {isOpen && <span className="ml-2">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
