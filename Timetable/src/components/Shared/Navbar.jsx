import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// import { ModeToggle } from '../mode-toggle'

const Navbar = () => {
  const NavLinks = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Login",
      path: "/login"
    },
    {
      title: "Register",
      path: "/register"
    },
    {
      title: "Logout",
      path: "/logout"
    }
  ]
  return (
    <div className="fixed top-0 left-0 w-full h-[8vh] flex flex-row justify-center items-center shadow-sm shadow-primary/50 ">
      <div className="w-full h-full font-bold flex justify-start items-center text-lg ml-5 text-gray-700"> Timetable</div>
      <div className='h-full font-bold flex flex-row justify-end items-center gap-8 mr-5'>

        {
          NavLinks.map((links, index) => (
            <li key={index} className='list-none'>
              <NavLink to={links.path}>
                {links.title}
              </NavLink>
            </li>
          ))
        }
        {/* <ModeToggle /> */}
      </div>
    </div>
  )
}

export default Navbar