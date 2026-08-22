import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import ProfilePic from '../public/assets/my.jpeg'

function About() {
  return (
    <section id='about' className='w-full scroll-mt-24 bg-slate-950/5 py-20'>
      <div className='mx-auto grid max-w-[1240px] gap-10 px-4 md:grid-cols-[1.2fr_0.8fr] md:items-center'>
        <div className='space-y-8 rounded-[2rem] bg-white p-10 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.25)]'>
          <div className='inline-flex items-center gap-3 rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700'>
            <span className='h-2.5 w-2.5 rounded-full bg-indigo-600' /> About Me
          </div>

          <div>
            <h2 className='text-4xl font-bold text-slate-900 sm:text-5xl'>A developer who builds polished products with clarity and confidence.</h2>
            <p className='mt-4 max-w-2xl text-lg leading-8 text-slate-600'>
              I design thoughtful web applications with strong visual systems, clean interactions, and performance-first implementation. My work is built to look premium while remaining intuitive and reliable.
            </p>
          </div>

            <div className='grid gap-4 sm:grid-cols-3'>
            <div className='rounded-3xl bg-slate-900 p-5 text-white shadow-sm'>
              <p className='text-sm uppercase tracking-[0.2em] text-slate-300'>Experience</p>
              <p className='mt-4 text-2xl font-semibold'>Rookie (Entry-level)</p>
            </div>
            <div className='rounded-3xl bg-slate-900 p-5 text-white shadow-sm'>
              <p className='text-sm uppercase tracking-[0.2em] text-slate-300'>Focus</p>
              <p className='mt-4 text-2xl font-semibold'>Web Apps</p>
            </div>
            <div className='rounded-3xl bg-slate-900 p-5 text-white shadow-sm'>
              <p className='text-sm uppercase tracking-[0.2em] text-slate-300'>Approach</p>
              <p className='mt-4 text-2xl font-semibold'>Clean UI</p>
            </div>
          </div>

          <div className='rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6'>
            <p className='text-sm uppercase tracking-[0.25em] text-indigo-600'>What I do</p>
            <h3 className='mt-4 text-3xl font-semibold text-slate-900'>High quality experiences with performance and polish.</h3>
            <p className='mt-3 text-slate-600 leading-7'>I create modern web pages and applications that are responsive, accessible, and built to grow. Every project gets focused attention to spacing, typography, and interaction details.</p>
          </div>

          <Link href='/#projects'>
            <a className='inline-flex rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-slate-800'>See my projects</a>
          </Link>
        </div>

        <div className='relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_-40px_rgba(15,23,42,0.25)]'>
          <div className='relative h-64 sm:h-80 md:h-96 lg:h-[520px] w-full'>
              <Image
                src={ProfilePic}
                alt='Samuel portrait'
                layout='fill'
                objectFit='cover'
                className='rounded-[2rem]'
                unoptimized
              />
              <div className='absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black/28 via-transparent to-transparent mix-blend-overlay pointer-events-none' />
            </div>
        </div>
      </div>
    </section>
  )
}

export default About;
