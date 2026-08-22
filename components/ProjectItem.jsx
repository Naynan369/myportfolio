import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({ title, backgroundImg, projectUrl }) => {
  return (
    <div className='group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl'>
      <div className='relative h-56 sm:h-72 md:h-80 lg:h-96 overflow-hidden'>
        <Image src={backgroundImg} alt={title} layout='fill' objectFit='cover' className='transition duration-500 group-hover:scale-105' />
      </div>
      <div className='p-6'>
        <p className='text-sm uppercase tracking-[0.25em] text-indigo-600'>Featured Project</p>
        <h3 className='mt-4 text-2xl font-semibold text-slate-900'>{title}</h3>
        <p className='mt-3 text-sm text-slate-600'>Well-crafted project with a clean interface and modern functionality.</p>
        <Link href={projectUrl}>
          <a className='mt-6 inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800'>
            More Info
          </a>
        </Link>
      </div>
    </div>
  )
}

export default ProjectItem