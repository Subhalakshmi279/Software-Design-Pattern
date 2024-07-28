// AdminDashboard.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import '@/assets/css/AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="dashboard-content">
       Dashboard
          <Outlet /> {/* This renders the nested routes */}
        
      </div>
    </div>
  );
}

export default AdminDashboard;
