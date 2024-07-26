import React from 'react'
import Sidebar from '@/components/Shared/Sidebar'
import Topbar from '@/components/Shared/Topbar'
import table from '@/components/ui/table';

const AdminDashboard = () => {
    return (
        <>
       <div>
        <Topbar/>
        <Sidebar/>
        <table/>
       </div>
        </>
    )
}

export default AdminDashboard