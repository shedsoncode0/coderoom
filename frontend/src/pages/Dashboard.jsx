import React from 'react'
import Overview from '../components/Overview'
import ProjectCard from '../components/ProjectCard'
import RecentProjects from '../components/RecentProjects'

function Dashboard() {
  return (
    <section className='w-full flex-1 bg-Gray p-5 overflow-y-scroll'>
        <div className='w-full flex flex-col items-col items-center'>
            <Overview />
            <div className='shadow1 rounded-md max-w-[90%] w-full p-5 flex flex-col mt-20'>
                <h1 className='w-full text-xl font-semibold text-Dark'>Recent Projects</h1>
                <div className='w-full mt-4'>
                    <RecentProjects />
                </div>  
            </div>
            <div className='max-w-[90%] w-full justify-between items-center flex mt-20 space-5 flex-wrap'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    </section>
  )
}

export default Dashboard