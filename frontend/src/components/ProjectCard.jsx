import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function ProjectCard() {
  return (
    <div className='max-w-[300px] rounded-md shadow1 p-5 space-y-3 relative'>
        <div className='absolute p-2 bg-white -top-7 right-0 rounded-t-md'>
            <h1 className='font-medium text-Dark'>Fullstack</h1>
        </div>
        <div className='absolute p-2 bg-white -top-10 left-0 rounded-t-md'>
            <h1 className='font-medium text-Dark'>$22.99</h1>
        </div>
        <div>
            {/* <div className='flex itmes-center space-x-2'>
                <div className='w-[50px] h-[50px] bg-Gray rounded-full'></div>
                <div className='flex flex-col justify-center'>
                    <h1 className='font-medium'>Shedrack Aigbe</h1>
                    <p className='text-sm '>Developer</p>
                </div>
            </div> */}
        </div>
        <Splide
                options={ {
                  rewind: true,
                } }
                aria-label="My Favorite Images"
            >
                <SplideSlide>
                <div className='bg-Green rounded-md w-full h-[170px]'></div>
                </SplideSlide>
                <SplideSlide>
                <div className='bg-Red rounded-md w-full h-[170px]'></div>
                </SplideSlide>
                <SplideSlide>
                <div className='bg-Yellow rounded-md w-full h-[170px]'></div>
                </SplideSlide>
            </Splide>
            <div>
                <h1 className='font-bold text-dark text-xl truncate'>Movie-App</h1>
                <p className="truncate">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     molestias corrupti aliquid rerum quisquam
                </p>
            </div>
            <div>
                <h1 className='underline text-Dark font-medium'>Technologys</h1>
                <div className='flex flex-wrap gap-1 max-w-[170px]'>
                    <span className='text-sm font-semibold'>ReactJS</span>
                    <span className='text-sm font-semibold'>NextJS</span>
                    <span className='text-sm font-semibold'>Vue</span>
                    <span className='text-sm font-semibold'>Node</span>
                </div>
            </div>
    </div>
  )
}

export default ProjectCard