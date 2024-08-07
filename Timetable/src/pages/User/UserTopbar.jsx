import React from 'react';
import { HiLogout, HiUser } from 'react-icons/hi'; // Importing icons
import { Link } from 'react-router-dom'; // Importing Link for navigation



const UserTopbar = () => {
    return (
        <div className='h-[6vh] w-full flex justify-between items-center px-4' style={{ boxShadow: '0 1px 2px 0 rgba(50, 44, 34, 0.7)' }}>
            <div className='flex items-center gap-4'>
                <span className='text-2xl font-bold text-[#367588]'>TIMETABLE</span> {/* Heading with color and font style */}
            </div>
            <div className='flex items-center gap-8'>
                <Link to="/login" className='flex items-center '>
                    <HiUser className='text-xl' /> User
                </Link>
                {/* <ModeToggle /> */}
                <button className='flex items-center '>
                    <Link to='/'><HiLogout className='text-xl' /></Link>   
                </button>
            </div>
        </div>
    );
}

export default UserTopbar;
