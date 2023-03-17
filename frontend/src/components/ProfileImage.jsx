import React from 'react'

import profileImage from '../assets/images/016.JPG'

function ProfileImage() {
  return (
        <img src={profileImage} alt="Profile_Picture" className='object-cover w-[100%] h-[100%]' />
  )
}

export default ProfileImage