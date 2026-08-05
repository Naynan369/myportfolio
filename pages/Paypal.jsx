import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiRadioButtonFill } from 'react-icons/ri'
import PaypalImg from '../public/assets/projects/Paypal.png'

const Paypal = () => {
  return (
    <main className='min-h-screen bg-slate-50'>
      <section className='relative w-full overflow-hidden'>
        <div className='relative h-[35vh] sm:h-[45vh] lg:h-[55vh]'>
          <Image src={PaypalImg} alt='Payment App project' layout='fill' objectFit='cover' className='brightness-75' />
          <div className='absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60' />
          <div className='absolute bottom-8 left-1/2 right-1/2 mx-auto w-full max-w-[1240px] px-4 text-white sm:left-16 sm:right-auto'>
            <p className='text-sm uppercase tracking-[0.4em] text-indigo-300'>Payment App</p>
            <h1 className='mt-4 text-4xl font-semibold sm:text-5xl'>React / PayPal API Integration</h1>
          </div>
        </div>
      </section>

      <section className='mx-auto max-w-[1240px] px-4 py-16'>
        <div className='grid gap-10 lg:grid-cols-[2fr_1fr]'>
          <div className='space-y-6'>
            <span className='text-sm uppercase tracking-[0.3em] text-indigo-600'>Project Overview</span>
            <h2 className='text-3xl font-semibold text-slate-900'>Payment App</h2>
            <p className='text-slate-600 leading-8'>
              A clean payment experience with secure authentication and PayPal checkout support. The app is designed to make payments fast and intuitive for every user.
            </p>
            <div className='flex flex-wrap gap-4'>
              <a href='https://test-app-1mt.pages.dev/' target='_blank' rel='noreferrer' className='inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800'>
                View Demo
              </a>
              <a href='https://github.com/Naynan369/test-app' target='_blank' rel='noreferrer' className='inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50'>
                View Code
              </a>
            </div>
          </div>

          <aside className='rounded-3xl border border-slate-200 bg-white p-6 shadow-lg'>
            <p className='text-sm uppercase tracking-[0.3em] text-slate-500'>Technologies</p>
            <div className='mt-6 space-y-3'>
              {['React', 'PayPal API', 'CSS', 'Responsive UX'].map((tech) => (
                <p key={tech} className='flex items-center gap-2 text-slate-700'>
                  <RiRadioButtonFill className='text-indigo-500' /> {tech}
                </p>
              ))}
            </div>
          </aside>
        </div>

        <div className='mt-14'>
          <Link href='/#projects'>
            <a className='text-sm font-medium text-indigo-600 hover:underline'>← Back to projects</a>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Paypal