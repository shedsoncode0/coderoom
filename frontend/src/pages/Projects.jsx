import React from 'react'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  return (
    <section className='w-full flex-1 bg-Gray p-5 overflow-y-scroll'>
        <div className='w-full flex justify-center'>
            <div className='flex max-w-[90%] flex-wrap justify-between gap-x-10 gap-y-20 mt-20'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    </section>
  )
}

export default Projects