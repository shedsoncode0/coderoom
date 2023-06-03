import React, { useState } from 'react'
import {
    Link
  } from "react-router-dom";

import { FiSettings } from 'react-icons/fi'
import { AiOutlineCode, AiOutlineUser } from 'react-icons/ai'
import { GiDesk } from 'react-icons/gi'
import { FaRegSmileWink } from 'react-icons/fa'
import { VscTools } from 'react-icons/vsc'

import gridAlt from '../assets/Icons/grid-alt.svg'
// import { GiBigGear } from 'react-icons/gi'

function Navbar() {
    const [navbarRoute, setNavbeRoute] = useState("");
    const navbarActiveStatus = (value) => {
        setNavbeRoute(value)
    }
    const navbar = {
        active: "px-5 py-2 bg-[#333A48] rounded-md text-lg text-DarkTextColor1 flex gap-3 items-center",
        notActive: "px-5 py-2 rounded-md text-lg text-DarkTextColor1 flex gap-3 items-center",
    }
  return (
    <>
        <aside className="w-[300px] h-full bg-Dark px-6">
            <header className='py-7 text-2xl text-center font-semibold text-white flex items-end space-x-2'>
                <div className='bg-Primary p-2 rounded-md flex justify-center items-center'>
                    <GiDesk size={30}/>
                </div>
                <h1>DevRoom</h1>
            </header>
            <div className='w-full flex space-y-2 flex-col'>
                <h2 className='text-DarkTextColor2 px-5'>MENU</h2>
                <ul className='w-full space-y-3'>
                    <Link 
                     to="/myroom" 
                     onClick={() => navbarActiveStatus("room")} 
                     className={navbarRoute === "room" ? navbar.active : navbar.notActive}
                    >
                        <GiDesk size={23}/>
                        <h1>Room</h1>
                    </Link>

                    <Link 
                     to="/projects" 
                     onClick={() => navbarActiveStatus("project")} 
                     className={navbarRoute === "project" ? navbar.active : navbar.notActive}
                    >
                        <VscTools size={20} className="text-DarkTextColor1"/>
                        <h1>Project</h1>
                    </Link>

                    <Link 
                     to="/profile" 
                     onClick={() => navbarActiveStatus("quicklearn")} 
                     className={navbarRoute === "quicklearn" ? navbar.active : navbar.notActive}
                    >
                        <FaRegSmileWink size={20}/>
                        <h1>Quicklearn</h1>
                    </Link>

                    <Link 
                     to="/profile" 
                     onClick={() => navbarActiveStatus("profile")} 
                     className={navbarRoute === "profile" ? navbar.active : navbar.notActive}
                    >
                        <AiOutlineUser size={20}/>
                        <h1>Profile</h1>
                    </Link>

                    <Link 
                     to="/lab" 
                     onClick={() => navbarActiveStatus("lab")} 
                     className={navbarRoute === "lab" ? navbar.active : navbar.notActive}
                    >
                        <AiOutlineCode size={20}/>
                        <h1>Lab</h1>
                    </Link>

                    <Link 
                     to="/settings" 
                     onClick={() => navbarActiveStatus("settings")} 
                     className={navbarRoute === "settings" ? navbar.active : navbar.notActive}
                    >
                        <FiSettings size={20}/>
                        <h1>Settings</h1>
                    </Link>
                </ul>
            </div>
        </aside>
    </>
  )
}

export default Navbar