import React from 'react'
import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

function Main() {
  return (
    <section id='home' className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center'>
      <div className='mx-auto grid w-full max-w-[1240px] gap-10 px-4 py-24 lg:grid-cols-[1.1fr_0.95fr] lg:items-center'>
        <div className='space-y-8'>
          <div className='inline-flex items-center gap-3 rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700 shadow-sm'>
            <span className='h-2.5 w-2.5 rounded-full bg-indigo-600' /> Premium Web Experience
          </div>

          <h1 className='max-w-3xl text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl'>
            Thoughtful digital products that feel modern, polished, and effortless.
          </h1>

          <p className='max-w-2xl text-base leading-8 text-slate-600 sm:text-lg'>
            I build premium websites and web applications using React, Next.js, Tailwind CSS, and modern tooling. My work focuses on clean layouts, fast performance, and a confident user experience.
          </p>

          <div className='flex flex-col gap-4 sm:flex-row sm:items-center'>
            <Link href='/#projects'>
              <a className='inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-200 transition hover:bg-slate-800'>
                View Projects
              </a>
            </Link>
            <Link href='/resume'>
              <a className='inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50'>
                View Resume
              </a>
            </Link>
          </div>

          <div className='grid gap-4 sm:grid-cols-3'>
            {['React', 'Next.js', 'Tailwind', 'Firebase', 'API', 'UX'].map((skill) => (
              <span key={skill} className='rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm'>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className='relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_60px_-30px_rgba(15,23,42,0.35)]'>
          <div className='absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-pink-500/10' />
          <div className='relative space-y-6 p-8 sm:p-10'>
            <div className='rounded-[2rem] border border-slate-200 bg-slate-950/5 p-6'>
              <p className='text-sm uppercase tracking-[0.3em] text-indigo-600'>Featured Delivery</p>
              <h2 className='mt-4 text-3xl font-semibold text-slate-900'>Clean interfaces, responsive layouts, and polished interactions.</h2>
            </div>

            <div className='grid gap-4 sm:grid-cols-2'>
              <div className='rounded-3xl border border-slate-200 bg-white p-5 shadow-sm'>
                <p className='text-sm uppercase tracking-[0.2em] text-slate-500'>Design</p>
                <p className='mt-3 text-slate-700'>Elegant, minimal pages that prioritize clarity and a strong visual hierarchy.</p>
              </div>
              <div className='rounded-3xl border border-slate-200 bg-white p-5 shadow-sm'>
                <p className='text-sm uppercase tracking-[0.2em] text-slate-500'>Performance</p>
                <p className='mt-3 text-slate-700'>Fast-loading experiences that feel smooth on every device.</p>
              </div>
            </div>

            <div className='grid gap-3 rounded-[1.75rem] bg-slate-50 p-5 text-slate-700 shadow-sm'>
              <div className='flex items-center justify-between'>
                <span className='font-semibold'>Smart architecture</span>
                <span className='text-sm text-slate-500'>Reusable, maintainable code</span>
              </div>
              <div className='flex items-center justify-between'>
                <span className='font-semibold'>Modern tooling</span>
                <span className='text-sm text-slate-500'>Next.js, React, Tailwind</span>
              </div>
            </div>

            <div className='flex flex-wrap items-center gap-3 text-sm text-slate-600'>
              <a href='https://www.linkedin.com/in/samuel-zewge-a47a03271' target='_blank' rel='noreferrer' className='inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 transition hover:bg-slate-50'>
                <FaLinkedinIn /> LinkedIn
              </a>
              <a href='https://github.com/Naynan369' target='_blank' rel='noreferrer' className='inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 transition hover:bg-slate-50'>
                <FaGithub /> GitHub
              </a>
              <a href='mailto:hello@example.com' className='inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 transition hover:bg-slate-50'>
                <AiOutlineMail /> Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main
