import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Overview() {
    const circularProgressbarStyle = {
        root: {},
        path: {
          stroke: '#3C50E0',
          strokeLinecap: 'butt',
          transition: 'stroke-dashoffset 0.5s ease 0s',
          transformOrigin: 'center center',
        },
        trail: {
          stroke: '#E2E8F0',
          strokeLinecap: 'butt',
          transform: 'rotate(0.25turn)',
          transformOrigin: 'center center',
        },
          text: {
          fill: '#fff',
          fontSize: '16px',
        },
        background: {
          fill: '#3e98c7',
        },
    }
  return (
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
                <div className='w-full flex justify-between'>
                    <div className='space-y-2'>
                        <h2 className='text-TextColor text-md font-medium'>Completed Projects</h2>
                        <div className='p-1 bg-Green text-white rounded-md max-w-[100px]'>+2.5%</div>
                    </div>
                    <div className='w-[60px] h-[60px] '>
                        <CircularProgressbar 
                        value={40} 
                        strokeWidth={15} 
                        styles={circularProgressbarStyle}
                    />
                    </div>
                </div>
            </div>
            <div className='shadow1 rounded-md max-w-[400px] w-full h-[150px] p-5 flex flex-col justify-between'>
                <h1 className='w-full text-2xl font-semibold text-Dark'>187</h1>
                <div className='w-full flex justify-between'>
                    <div className='space-y-2'>
                        <h2 className='text-TextColor text-md font-medium'>Ongoing Projects</h2>
                        <div className='p-1 bg-Red text-white rounded-md max-w-[100px]'>-2.5%</div>
                    </div>
                    <div className='w-[60px] h-[60px] '>
                        <CircularProgressbar 
                        value={60} 
                        strokeWidth={15} 
                        styles={circularProgressbarStyle}
                    />
                    </div>
                </div>
                </div>
            <div className='shadow1 rounded-md max-w-[400px] w-full h-[150px]'></div>
        </div>
    </div>
  )
}

export default Overview