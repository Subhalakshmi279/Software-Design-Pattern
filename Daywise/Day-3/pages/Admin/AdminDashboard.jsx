// AdminDashboard.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import '@/assets/css/AdminDashboard.css';
import DashboardCards from '@/components/ui/DashboardCards';
import RecentsCards from '@/components/ui/RecentCards';


const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="dashboard-content flex-col">
        <div className="flex justify-center">
          <DashboardCards />
        </div>
        <div className="flex justify-center mr-50 " style={{marginTop:"50px"}}> 
          <RecentsCards />
        </div>
        <Outlet /> {/* This renders the nested routes */}
      </div>
    </div>
  );
}

export default AdminDashboard;
