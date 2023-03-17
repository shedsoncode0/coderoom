import React from 'react'
import ProfileImage from '../ProfileImage'
import Input from '../Input'

function EditProfile() {
  return (
    <section className='w-full h-full p-5'>
        <div className=''>
            <h1 className='py-3 font-semibold text-xl text-Dark'>Edit Profile</h1>
            <div className='w-[90px] h-[90px] rounded-full overflow-hidden'>
                <ProfileImage />
            </div>
            <form action="#">
                <div className='flex space-x-10'>
                    <section className='flex-1 '>
                        <div className='mt-7'>
                            <label htmlFor="fullname" className='font-medium text-Dark'>Full Name</label>
                            <Input 
                            type="text" 
                            name="fullname" 
                            placeholder="John Doe"
                            y="2"
                            />
                        </div>
                        <div className='mt-7'>
                            <label htmlFor="email" className='font-medium text-Dark'>Email</label>
                            <Input 
                            type="email" 
                            name="email" 
                            placeholder="example@gmail.com"
                            y="2"
                            />
                        </div>
                        <div className='mt-7'>
                            <label htmlFor="FullName" className='font-medium text-Dark'>Phone Number</label>
                            <Input 
                            type="tel" 
                            name="FullName" 
                            placeholder="+1113 344 4567"
                            y="2"
                            />
                        </div>
                    </section>

                    <section className='flex-1'>
                        <div className='mt-7'>
                            <label htmlFor="birthday" className='font-medium text-Dark'>Birthday</label>
                            <Input 
                            type="text" 
                            name="birthday" 
                            placeholder="18/06/2001"
                            y="2"
                            />
                        </div>
                        <div className='mt-7'>
                            <label htmlFor="bio" className='font-medium text-Dark'>Bio</label>
                            <Input 
                            type="text" 
                            name="bio" 
                            placeholder="UI Designer"
                            y="2"
                            />
                        </div>
                        <div className='mt-7'>
                            <label htmlFor="website" className='font-medium text-Dark'>Website</label>
                            <Input 
                            type="text" 
                            name="website" 
                            placeholder="example.com"
                            y="2"
                            />
                        </div>
                    </section>
                </div>
            </form>
        </div>

        <div className='mt-5'>
            <h1 className='font-semibold text-xl text-Dark py-5'>Social Link</h1>
            <form action="#">
                <div className='flex space-x-10'>
                    <section className='flex-1 '>
                        <div className=''>
                            <label htmlFor="facebook" className='font-medium text-Dark'>Facebook</label>
                            <Input 
                            type="text" 
                            name="facebook" 
                            placeholder="Coderoom"
                            y="2"
                            />
                        </div>
                        <div className='mt-7'>
                            <label htmlFor="instagram" className='font-medium text-Dark'>Instagram</label>
                            <Input 
                            type="text" 
                            name="instagram" 
                            placeholder="Coderoom"
                            y="2"
                            />
                        </div>
                    </section>

                    <section className='flex-1'>
                        <div className=''>
                            <label htmlFor="twitter" className='font-medium text-Dark'>Twitter</label>
                            <Input 
                            type="text" 
                            name="twitter" 
                            placeholder="Coderoom"
                            y="2"
                            />
                        </div>
                        <div className='mt-7'>
                            <label htmlFor="github" className='font-medium text-Dark'>Github</label>
                            <Input 
                            type="text" 
                            name="bio" 
                            placeholder="Coderoom"
                            y="2"
                            />
                        </div>
                    </section>
                </div>
            </form>
        </div>
    </section>
  )
}

export default EditProfile