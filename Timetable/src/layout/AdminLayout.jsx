import React from 'react';
import Sidebar from '@/components/Shared/Sidebar';
import Topbar from '@/components/Shared/Topbar';
import { Outlet } from 'react-router-dom';
import '@/assets/css/AdminLayout.css';

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <Topbar />
      <div className="admin-dashboard-body">
        <Sidebar />
        <div className="admin-main-content">
          <div className="admin-content-wrapper">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
