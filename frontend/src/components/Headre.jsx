import React from 'react'

import searchIcon from '../assets/Icons/search 2.svg'
import alarmIcon from '../assets/Icons/alarm.svg'
import chatIcon from '../assets/Icons/chat-alt-8.svg'

function Headre() {
  return (
    <header className='w-full px-7 h-[70px] border-b bg-white shadow-sm flex items-center justify-between'>
        <div className='max-w-[400px] flex space-x-3'>
            <img src={searchIcon} alt="searchIcon"/>
            <input placeholder="Type to search..." type="text" className='outline-none'/>
        </div>
        <div className='flex space-x-10'>
            <div className='flex space-x-4 justify-center items-center'>
                <div className='p-2 bg-Gray rounded-full border-[1px] border-Stroke'>
                    <img src={alarmIcon} alt="alarmIcon" />
                </div>
                <div className='p-2 bg-Gray rounded-full border-[1px] border-Stroke'>
                    <img src={chatIcon} alt="chatIcon" />
                </div>
            </div>
            <div className='flex itmes-center space-x-2'>
                <div className='flex flex-col justify-center'>
                    <h1 className='font-medium'>Shedrack Aigbe</h1>
                    <p className='text-sm '>Developer</p>
                </div>
                <div className='w-[60px] h-[60px] bg-Gray rounded-full'></div>
            </div>
        </div>
    </header>
  )
}

export default Headre