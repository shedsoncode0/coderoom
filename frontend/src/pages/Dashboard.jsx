import React from 'react'
import RecentProjects from '../components/RecentProjects'

function Dashboard() {
  return (
    <section className='w-full flex-1 bg-Gray p-5 overflow-y-scroll'>
        <div className='w-full flex flex-col items-col items-center'>
            <div className='max-w-[90%] w-full flex flex-col justify-between'>


                <div className='w-full flex justify-between py-5'>
                    <h1 className='font-bold text-Dark text-2xl'>This Week's Overview</h1>
                    <div>
                        <h1 className='font-medium text-Dark'>SHORT BY:</h1>
                    </div>
                </div>


                <div className='w-full flex justify-between space-x-5'>
                    <div className='shadow1 rounded-md max-w-[400px] w-full h-[150px] p-5 flex flex-col justify-between'>
                        <h1 className='w-full text-2xl font-semibold text-Dark'>187</h1>
                        <div className='space-y-2'>
                            <h2 className='text-TextColor text-lg'>complited Projects</h2>
                            <div className='p-1 bg-Green text-white rounded-md max-w-[100px]'>+2.5%</div>
                        </div>
                    </div>
                    <div className='shadow1 rounded-md max-w-[400px] w-full h-[150px] p-5 flex flex-col justify-between'>
                        <h1 className='w-full text-2xl font-semibold text-Dark'>187</h1>
                            <div className='space-y-2'>
                                <h2 className='text-TextColor text-lg text-semibold'>onComplited Projects</h2>
                                <div className='p-1 bg-Red text-white rounded-md max-w-[100px]'>-2.5%</div>
                            </div>
                        </div>
                    <div className='shadow1 rounded-md max-w-[400px] w-full h-[150px]'></div>
                </div>
            </div>

            <div className='shadow1 rounded-md max-w-[90%] w-full max-h-[400px] p-5 flex flex-col mt-20'>
                <h1 className='w-full text-xl font-semibold text-Dark'>Recent Projects</h1>
                <div className='w-full mt-4'>
                    <RecentProjects />
                </div>  
            </div>
        </div>
    </section>
  )
}

export default Dashboard