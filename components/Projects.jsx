import React from 'react'
import NetflixImg from '../public/assets/projects/Netflix.png'
import PaypalImg from '../public/assets/projects/Paypal.png'
import GameImg from '../public/assets/projects/Game.png'
import EcommerceImg from '../public/assets/projects/Ecommerce.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <section id='projects' className='w-full scroll-mt-24 bg-slate-950/5 py-20'>
      <div className='mx-auto max-w-[1140px] px-4'>
        <div className='mx-auto max-w-3xl space-y-4 text-center'>
          <p className='text-sm uppercase tracking-[0.35em] text-indigo-600'>Projects</p>
          <h2 className='text-4xl font-extrabold text-slate-900'>Recent work with polished visual systems.</h2>
          <p className='text-slate-600'>Each project showcases modern design, responsive interaction, and a refined user experience.</p>
        </div>

        <div className='grid gap-8 pt-12 md:grid-cols-2'>
          <ProjectItem title='Movie Finder' backgroundImg={NetflixImg} projectUrl='/Netflix' />
          <ProjectItem title='Payment App' backgroundImg={PaypalImg} projectUrl='/Paypal' />
          <ProjectItem title='Game' backgroundImg={GameImg} projectUrl='/Game' />
          <ProjectItem title='Ecommerce' backgroundImg={EcommerceImg} projectUrl='/Ecommerce' />
        </div>
      </div>
    </section>
  )
}

export default Projects