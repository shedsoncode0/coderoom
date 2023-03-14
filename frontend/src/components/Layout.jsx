import React from 'react'
import Headre from './Headre'
import Navbar from './Navbar'

function Layout({ children }) {
  return (
    <div className='h-screen w-screen flex relative font-poppins'>
      <Navbar />
      <div className='w-full h-full flex flex-col overflow-y-scroll relative'>
        <Headre />
        { children }
      </div>
    </div>
  )
}

export default Layout