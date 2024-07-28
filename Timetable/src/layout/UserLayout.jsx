import React from 'react';
import Sidebar from '@/components/Shared/Sidebar';
import Topbar from '@/components/Shared/Topbar';
import { Outlet } from 'react-router-dom';
import '@/assets/css/UserLayout.css'; // Ensure this path matches your project structure

const UserLayout = () => {
    return (
        <div className="user-layout">
            <Topbar />
            <div className="user-dashboard-body">
                <Sidebar />
                <div className="user-main-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default UserLayout;
