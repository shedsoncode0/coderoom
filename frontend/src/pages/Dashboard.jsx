import React from 'react'

function Dashboard() {
  return (
    <section className='w-full flex-1 bg-Gray p-5 flex flex-col items-col items-center'>
        <div className='max-w-[90%] w-full flex justify-between space-x-5'>
            <div className='shadow1 rounded-md max-w-[400px] w-full h-[150px] p-5 flex flex-col justify-between'>
                <h1 className='w-full text-2xl font-bold text-Dark'>187</h1>
                <div className='space-y-2'>
                    <h2 className='text-TextColor text-xl'>complited Projects</h2>
                    <div className='p-1 bg-Green text-white rounded-md'>+2.5%</div>
                </div>
            </div>
            <div className='shadow1 rounded-md max-w-[400px] w-full h-[150px] p-5 flex flex-col justify-between'>
                <h1 className='w-full text-2xl font-bold text-Dark'>187</h1>
                    <div className='space-y-2'>
                        <h2 className='text-TextColor text-xl'>onComplited Projects</h2>
                        <div className='p-1 bg-Red text-white rounded-md'>-2.5%</div>
                    </div>
                </div>
            <div className='shadow1 rounded-md max-w-[400px] w-full h-[150px]'></div>
        </div>
    </section>
  )
}

export default Dashboard