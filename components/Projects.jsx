import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NetflixImg from '../public/assets/projects/Netflix.png'
import PaypalImg from '../public/assets/projects/Paypal.png'
import ProjectItem from './ProjectItem'
const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
        <h1 className='py-4'>What Ive Built</h1>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Movie Finder'
            backgroundImg={NetflixImg}
            projectUrl='/Netflix'
          />
          <ProjectItem
            title='Payment App'
            backgroundImg={PaypalImg}
            projectUrl='/Paypal'
          />
        </div>
      </div>

    </div>
  )
}

export default Projects