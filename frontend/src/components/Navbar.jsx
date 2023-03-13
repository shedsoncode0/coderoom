import React from 'react'

import gridAlt from '../assets/Icons/grid-alt.svg'

function Navbar() {
  return (
    <>
        <aside className="w-[300px] h-full bg-Dark px-6">
            <header className='py-7 text-2xl text-center font-semibold text-white'>
                <h1>Coderoom</h1>
            </header>
            <div className='w-full flex space-y-2 flex-col'>
                <h2 className='text-DarkTextColor2 px-5'>MENU</h2>
                <ul className='w-full space-y-3'>
                    <li className='px-5 py-2 bg-[#333A48] rounded-md text-lg text-DarkTextColor1 flex gap-3'>
                        <img src={gridAlt} alt="gridIcon" />
                        Dashboard
                    </li>
                    <li className='p-2 bg-[#333A48] rounded-md text-lg text-DarkTextColor1'>Lab</li>
                    <li className='p-2 bg-[#333A48] rounded-md text-lg text-DarkTextColor1'>Messages</li>
                </ul>
            </div>
        </aside>
    </>
  )
}

export default Navbar