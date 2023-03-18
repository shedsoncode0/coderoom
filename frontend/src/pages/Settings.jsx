import React, { useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { IoLanguage } from 'react-icons/io5'
import { TbBusinessplan } from 'react-icons/tb'
import { BsShieldLock } from 'react-icons/bs'
import alarmIcon from '../assets/Icons/alarm.svg'
import EditProfile from '../components/SettingsPages/EditProfile'
import Language from '../components/SettingsPages/language'

function Settings() {
    const [settingsType, setSettingsType] = useState("editprofile")

    const settingsComponent = () => {
        switch (settingsType) {
            case "editprofile":
                    return <EditProfile />
                break;
            case "language":
                    return <Language />
                break;
        
            default:
                break;
        }
    }


  return (
    <section className='w-full flex-1 bg-Gray p-5 overflow-y-scroll'>
        <div className='w-full h-full flex rounded-md overflow-hidden'>
            <div className='h-full w-full max-w-[300px] bg-white border-r-[2px] border-Stroke flex p-5'>
                <ul className='w-full'>
                    <li onClick={() => setSettingsType("editprofile")} className='py-3 cursor-pointer text-lg font- text-Dark font-medium border-b-[2px] border-Stroke flex items-center space-x-3'>
                        <AiOutlineUser size={20}/>
                        <h1>Edit Profile</h1>
                    </li>
                    <li onClick={() => setSettingsType("language")} className='py-3 text-lg font- text-Dark font-medium border-b-[2px] border-Stroke flex items-center space-x-3'>
                        <IoLanguage size={20}/>
                         <h1>Language</h1>
                    </li>
                    <li className='py-3 text-lg font- text-Dark font-medium border-b-[2px] border-Stroke flex items-center space-x-3'>
                        <TbBusinessplan size={20}/>
                        <h1>Plan</h1>
                    </li>
                    <li className='py-3 text-lg font- text-Dark font-medium border-b-[2px] border-Stroke flex items-center space-x-3'>
                        <img src={alarmIcon} alt="chatIcon" />
                         <h1>Notification</h1>
                    </li>
                    <li className='py-3 text-lg font- text-Dark font-medium border-b-[2px] border-Stroke flex items-center space-x-3'>
                        <BsShieldLock />
                        <h1>Password & Security</h1>
                    </li>
                    <li className='py-3 text-lg font- text-Dark font-medium border-b-[2px] border-Stroke flex items-center space-x-3'>Activity Log</li>
                </ul>
            </div>
            <div className='h-full bg-white flex-1'>
                {settingsComponent()}
            </div>
            
        </div>
    </section>
  )
}

export default Settings