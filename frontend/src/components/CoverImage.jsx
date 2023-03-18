import React from 'react'

import coverImage from '../assets/images/R.jpg'

function ProfileImage() {
  return (
        <img src={coverImage} alt="Profile_Picture" className='object-cover w-[100%] h-[100%]' />
  )
}

export default ProfileImage