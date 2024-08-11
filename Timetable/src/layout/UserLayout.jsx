import React from 'react';
import { Outlet } from 'react-router-dom';
import '@/assets/css/UserLayout.css'; // Ensure this path matches your project structure
import UserTopbar from '@/pages/User/UserTopbar';
import UserSidebar from '@/pages/User/UserSidebar';

const UserLayout = () => {
    return (
        <div className="user-layout">
            <UserTopbar />
            <div className="user-dashboard-body">
                <UserSidebar />
                <div className="user-main-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default UserLayout;
