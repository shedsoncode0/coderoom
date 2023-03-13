import React from 'react'
import Input from './Input'

import searchIcon from '../assets/Icons/search 2.svg'
import alarmIcon from '../assets/Icons/alarm.svg'
import chatIcon from '../assets/Icons/chat-alt-8.svg'

function Headre() {
  return (
    <header className='w-full p-7 border-b bg-white shadow-sm'>
        <div className='max-w-[400px] flex space-x-3'>
            <img src={searchIcon} alt="searchIcon" />
            <input placeholder="Type to search..." type="text" className='outline-none'/>
        </div>
        <div>
            <div>

            </div>
        </div>
    </header>
  )
}

export default Headre