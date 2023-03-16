import React from 'react'
import {
    Link
  } from "react-router-dom";

import { FiSettings } from 'react-icons/fi'
import { AiOutlineUser } from 'react-icons/ai'
import { GiDesk } from 'react-icons/gi'
import { FaRegSmileWink } from 'react-icons/fa'
import { VscTools } from 'react-icons/vsc'

import gridAlt from '../assets/Icons/grid-alt.svg'
// import { GiBigGear } from 'react-icons/gi'

function Navbar() {
    const percentage = 66;
  return (
    <>
        <aside className="w-[300px] h-full bg-Dark px-6">
            <header className='py-7 text-2xl text-center font-semibold text-white'>
                <h1>Coderoom</h1>
            </header>
            <div className='w-full flex space-y-2 flex-col'>
                <h2 className='text-DarkTextColor2 px-5'>MENU</h2>
                <ul className='w-full space-y-3'>
                    <Link to="/dashboard" className='px-5 py-2 bg-[#333A48] rounded-md text-lg text-DarkTextColor1 flex gap-3'>
                        <img src={gridAlt} alt="gridIcon" />
                        <h1>Dashboard</h1>
                    </Link>
                    <Link to="/projects" className='px-5 py-2 bg-[#333A48] rounded-md text-lg text-DarkTextColor1 items-center flex gap-3'>
                        <VscTools size={20} className="text-DarkTextColor1"/>
                        <h1>Project</h1>
                    </Link>
                    <Link to="/profile" className='px-5 py-2 bg-[#333A48] rounded-md text-lg text-DarkTextColor1 items-center flex gap-3'>
                        <FaRegSmileWink size={20}/>
                        <h1>Quicklearn</h1>
                    </Link>
                    <Link to="/profile" className='px-5 py-2 bg-[#333A48] rounded-md text-lg text-DarkTextColor1 items-center flex gap-3'>
                        <GiDesk size={20}/>
                        <h1>Room</h1>
                    </Link>
                    <Link to="/profile" className='px-5 py-2 bg-[#333A48] rounded-md text-lg text-DarkTextColor1 items-center flex gap-3'>
                        <AiOutlineUser />
                        <h1>Profile</h1>
                    </Link>
                    <Link to="/settings" className='px-5 py-2 bg-[#333A48] rounded-md text-lg text-DarkTextColor1 items-center flex gap-3'>
                        <FiSettings />
                        <h1>Lab</h1>
                    </Link>
                    <Link to="/settings" className='px-5 py-2 bg-[#333A48] rounded-md text-lg text-DarkTextColor1 items-center flex gap-3'>
                        <FiSettings />
                        <h1>Settings</h1>
                    </Link>
                </ul>
            </div>
        </aside>
    </>
  )
}

export default Navbar