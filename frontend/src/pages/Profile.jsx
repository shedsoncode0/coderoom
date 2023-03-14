import React from 'react'

function Profile() {
  return (
    <section className='w-full flex-1 flex justify-center pt-10 bg-Gray px-10'>
        <div className='max-w-[900px] w-full'> 
            <div className='py-7 flex justify-between w-full rounded-md font-medium text-lg'>
                <h1 className='text-2xl'>Profile</h1>
                <div>
                    <h2 className='text-TextColor'>Dashboard / <span className='text-Primary'> Profile</span></h2>
                </div>
            </div>
            <div className='shadow-xl w-full bg-white'>
                <div className='w-full flex flex-col items-center relative'>
                    <div className='w-full bg-Green h-[200px] rounded-md'></div>
                    <div className='w-36 h-36 bg-Yellow rounded-full relative -top-[70px] border-[7px]'></div>
                </div>
                <div className='w-full flex flex-col items-center space-y-2 relative'>
                    <h1 className='text-2xl font-semibold text-Dark'>Shedrack Aigbe</h1>
                    <p className='py-1 text-lg text-Dark font-medium text-TextColor'>Developer</p>
                    <div className='p-3 border-[2px] border-Stroke flex space-x-3 rounded-md'>
                        <h1 className='px-2 text-Dark text-xl font-medium'>259 <span className='text-TextColor text-lg font-normal'>Post</span></h1>
                        <h1 className='border-l-[2px] border-r-[2px] border-Stroke px-2 px-2 text-Dark text-xl font-medium'>259k <span className='text-TextColor text-lg font-normal'>Followers</span></h1>
                        <h1 className='px-2 px-2 text-Dark text-xl font-medium'>2k <span className='text-TextColor text-lg font-normal'>Following</span></h1>
                    </div>
                </div>
                <div className='w-full mt-5 flex justify-center'>
                    <div className='text-center space-y-2 max-w-[90%]'>
                        <h1 className='text-lg text-Dark font-semibold'>About me</h1>
                        <p className='text-TextColor text-lg font-normal'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore commodi ab illum mollitia perspiciatis officia 
                            quibusdam provident magnam? Tempora laboriosam similique aspernatur totam, facilis sed molestias
                            eum provident laudantium minus.
                        </p>
                    </div>
                </div>
                <div className='w-full py-7 flex justify-center'>
                    <h1 className='text-lg text-Dark font-semibold'>Follow me on</h1>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Profile