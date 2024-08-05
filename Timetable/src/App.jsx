import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Shared/Home'
import Login from './pages/Shared/Login'
import Register from './pages/Shared/Register'
import UserLayout from './layout/UserLayout'
import AdminLayout from './layout/AdminLayout'
import AdminDashboard from './pages/Admin/AdminDashboard'
import NotFound from './pages/Shared/NotFound'
import HomeLayout from './layout/HomeLayout'
import Timetable from './pages/Admin/Timetable';
import UserDashboard from './pages/User/UserDashboard'
import SubjectTab from './pages/Admin/SubjectTab'
import StaffTab from './pages/Admin/StaffTab';
import Help from '@/pages/User/Help';


const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<HomeLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/logout' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                    </Route>

                    <Route element={<UserLayout />}>
                        <Route path='/dashboard' element={<UserDashboard />} />
                        <Route path='/contact' element={<Help />} />
                    </Route>
                    
                    <Route element={<AdminLayout />}>

                        <Route path='/admin/dashboard' element={<AdminDashboard/>} />
                        <Route path='/admin/timetable' element={<Timetable/>}/>
                        <Route path='/admin/subject' element={<SubjectTab/>}/>
                        <Route path='/admin/staff' element={<StaffTab/>}/>
                    
                    </Route>
                    

                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>


        </>
    )
}

export default App