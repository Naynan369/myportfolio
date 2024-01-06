import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NetflixImg from '../public/assets/projects/Netflix.png'
import PaypalImg from '../public/assets/projects/Paypal.png'
import CalculatorImg from '../public/assets/projects/Calculator.png'
import GameImg from '../public/assets/projects/Game.png'
import WeatherImg from '../public/assets/projects/Wather.png'
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
          <ProjectItem
            title='Calculator'
            backgroundImg={CalculatorImg}
            projectUrl='/Calculator'
          />
          <ProjectItem
            title='Weather App'
            backgroundImg={WeatherImg}
            projectUrl='/Weather'
          />
          <ProjectItem
            title='Game'
            backgroundImg={GameImg}
            projectUrl='/Game'
          />
        </div>
      </div>

    </div>
  )
}

export default Projects