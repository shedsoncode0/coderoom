import React from 'react'
import Headre from './Headre'
import Navbar from './Navbar'

function Layout({ children }) {
  return (
    <div className='h-screen w-screen flex'>
      <Navbar />
      <div className='w-full h-full flex flex-col'>
        <Headre />
        { children }
      </div>
    </div>
  )
}

export default Layout