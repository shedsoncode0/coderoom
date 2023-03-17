import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import EditProfile from '../components/SettingsPages/EditProfile'

function Settings() {
  return (
    <section className='w-full flex-1 bg-Gray p-5 overflow-y-scroll'>
        <div className='w-full h-full flex rounded-md overflow-hidden'>
            <div className='h-full w-full max-w-[300px] bg-white border-r-[2px] border-Stroke flex p-5'>
                <ul className='w-full'>
                    <li className='py-3 text-lg font- text-Dark font-medium border-b-[2px] border-Stroke flex items-center space-x-3'>
                        <AiOutlineUser size={20}/>
                        <h1>Edit Profile</h1>
                    </li>
                    <li className='py-3 text-lg font- text-Dark font-medium border-b-[2px] border-Stroke'>Language</li>
                    <li className='py-3 text-lg font- text-Dark font-medium border-b-[2px] border-Stroke'>Blocking</li>
                    <li className='py-3 text-lg font- text-Dark font-medium border-b-[2px] border-Stroke'>Notification</li>
                    <li className='py-3 text-lg font- text-Dark font-medium border-b-[2px] border-Stroke'>Password & Security</li>
                    <li className='py-3 text-lg font- text-Dark font-medium border-b-[2px] border-Stroke'>Activity Log</li>
                </ul>
            </div>
            <div className='h-full bg-white flex-1'>
                <EditProfile />
            </div>
            
        </div>
    </section>
  )
}

export default Settings