import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// Import the timetable icon from a library or use an SVG
import { FaRegCalendarAlt } from 'react-icons/fa'; // Example using FontAwesome

const Navbar = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = "https://example.com/path/to/BelindaBC.css"; // Replace with the actual URL to the font
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const titleStyle = {
    fontFamily: "'Belinda BC', cursive",
    color: '#000000',
    fontSize: '24px',
    display: 'flex',
    alignItems: 'center',
  };

  const iconStyle = {
    marginRight: '8px', // Add space between icon and text
    fontSize: '28px',
  };

  const NavLinks = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Login",
      path: "/login"
    },
    {
      title: "Register",
      path: "/register"
    }
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-[8vh] flex flex-row justify-center items-center shadow-sm shadow-primary/50">
      <div style={titleStyle} className="w-full h-full flex justify-start items-center ml-5">
        <FaRegCalendarAlt style={iconStyle} />
        Timely
      </div>
      <div className="h-full font-bold flex flex-row justify-end items-center gap-8 mr-5">
        {NavLinks.map((links, index) => (
          <li key={index} className="list-none">
            <NavLink to={links.path}>
              {links.title}
            </NavLink>
          </li>
        ))}
        {/* <ModeToggle /> */}
      </div>
    </div>
  );
};

export default Navbar;
