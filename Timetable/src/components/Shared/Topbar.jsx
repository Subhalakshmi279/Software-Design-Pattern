import React from 'react';
import { HiLogout, HiUser } from 'react-icons/hi'; // Importing icons
import { Link } from 'react-router-dom'; // Importing Link for navigation
import { FaRegCalendarAlt } from 'react-icons/fa'; // Importing the calendar icon

const Topbar = () => {
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

  return (
    <div className='h-[6vh] w-full flex justify-between items-center px-4' style={{ boxShadow: '0 1px 2px 0 rgba(50, 44, 34, 0.7)' }}>
      <div className='flex items-center gap-4'>
        <span style={titleStyle}>
          <FaRegCalendarAlt style={iconStyle} /> {/* Icon added */}
          Timely
        </span>
      </div>
      <div className='flex items-center gap-8'>
        <Link to="/login" className='flex items-center '>
          <HiUser className='text-xl' /> User
        </Link>
        <button className='flex items-center '>
          <Link to='/'><HiLogout className='text-xl' /></Link>
        </button>
      </div>
    </div>
  );
}

export default Topbar;
