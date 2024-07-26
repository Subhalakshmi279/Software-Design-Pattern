import React from 'react';
import { HiLogout, HiUser } from 'react-icons/hi'; // Importing icons
import { Link } from 'react-router-dom'; // Importing Link for navigation
import { ModeToggle } from '../mode-toggle';

const Topbar = () => {
    return (
        <div className='h-[6vh] w-full flex justify-center items-center' style={{ boxShadow: '0 1px 2px 0 rgba(50, 44, 34, 0.7)' }}>
            <div className='w-[95%] h-full flex items-center justify-end gap-8'>
                <Link to="/profile" className='flex items-center '>
                    <HiUser className='text-xl' /> User
                </Link>
                <ModeToggle />
                <button className='flex items-center '>
                 <Link to='/'><HiLogout className='text-xl' /></Link>   
                </button>
            </div>
        </div>
    );
}

export default Topbar;
