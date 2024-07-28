import React, { useState } from 'react';
import { HiHome, HiUser, HiCog } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const SidebarLinks = [
    {
      title: "Timetable",
      path: "/admin/dashboard/timetable",
      icon: <HiHome className="text-2xl" />,
    },
    {
      title: "Details",
      icon: <HiCog className="text-2xl" />,
      subLinks: [
        {
          title: "Subject",
          path: "/admin/dashboard/timetable/SubDetails",
        },
        {
          title: "Staff",
          path: "/admin/dashboard/timetable/StaffDetails",
        },
      ],
    },
    {
      title: "Contact",
      path: "/admin/users",
      icon: <HiUser className="text-2xl" />,
    },
  ];

  return (
    <div className={`flex flex-col h-screen bg-gray-800 text-white ${isOpen ? 'w-64' : 'w-20'} transition-width duration-300`}>
      <button onClick={toggleSidebar} className="p-4">
        {isOpen ? '<' : '>'}
      </button>
      <nav className="flex flex-col mt-4">
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
    </div>
  );
};

export default Sidebar;
