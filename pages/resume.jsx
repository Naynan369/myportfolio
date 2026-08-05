import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Resume = () => {
  return (
    <>
      <Head>
        <title>Samuel | Resume</title>
        <meta name='description' content='Experienced web developer building professional and modern digital experiences.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='min-h-screen bg-slate-50 py-20'>
        <div className='mx-auto max-w-[960px] rounded-[2rem] border border-slate-200 bg-white px-6 py-10 shadow-2xl sm:px-10 sm:py-14'>
          <header className='text-center mb-12'>
            <h1 className='text-5xl font-extrabold text-slate-900'>Samuel Zewge</h1>
            <p className='mt-3 text-xl text-slate-600'>Front-End Web Developer</p>
            <div className='mt-6 flex justify-center gap-6 text-slate-600'>
              <a href='https://www.linkedin.com/in/samuel-zewge-a47a03271' target='_blank' rel='noreferrer' className='transition hover:text-blue-600'>
                <FaLinkedinIn size={28} />
              </a>
              <a href='https://github.com/Naynan369' target='_blank' rel='noreferrer' className='transition hover:text-slate-900'>
                <FaGithub size={28} />
              </a>
            </div>
          </header>

          <section className='mb-12'>
            <div className='mb-6 border-b border-slate-200 pb-4'>
              <h2 className='text-3xl font-semibold text-slate-900'>Summary</h2>
            </div>
            <p className='text-lg leading-8 text-slate-600'>
              Dedicated Front-End Developer with experience creating polished, responsive websites and web applications. I combine strong UI design awareness with practical development skills to deliver high-quality digital products for clients and teams.
            </p>
          </section>

          <section className='mb-12'>
            <div className='mb-6 border-b border-slate-200 pb-4'>
              <h2 className='text-3xl font-semibold text-slate-900'>Skills</h2>
            </div>
            <div className='grid gap-6 sm:grid-cols-2'>
              <div className='rounded-3xl bg-slate-50 p-6 shadow-sm'>
                <h3 className='text-xl font-semibold text-slate-900'>Technical Skills</h3>
                <ul className='mt-5 space-y-3 text-slate-600'>
                  <li>HTML5, CSS3, JavaScript (ES6+)</li>
                  <li>React.js, Next.js, Tailwind CSS</li>
                  <li>Responsive Web Design</li>
                  <li>Firebase, API Integration</li>
                </ul>
              </div>
              <div className='rounded-3xl bg-slate-50 p-6 shadow-sm'>
                <h3 className='text-xl font-semibold text-slate-900'>Development Expertise</h3>
                <ul className='mt-5 space-y-3 text-slate-600'>
                  <li>Modern UI / UX Implementation</li>
                  <li>Performance & Accessibility</li>
                  <li>Cross-Browser Reliability</li>
                  <li>Component-Based Architecture</li>
                </ul>
              </div>
            </div>
          </section>

          <section className='mb-12'>
            <div className='mb-6 border-b border-slate-200 pb-4'>
              <h2 className='text-3xl font-semibold text-slate-900'>Relevant Projects & Experience</h2>
            </div>

            <div className='grid gap-6 sm:grid-cols-2'>
              <div className='rounded-3xl bg-slate-50 p-6 shadow-sm'>
                <h3 className='text-xl font-semibold text-slate-900'>Movie Finder</h3>
                <p className='mt-2 text-slate-600'>Personal project built with React and Next.js to search movies and display details.</p>
                <Link href='/Netflix'>
                  <a className='mt-4 inline-block text-indigo-600 hover:underline'>View project</a>
                </Link>
              </div>

              <div className='rounded-3xl bg-slate-50 p-6 shadow-sm'>
                <h3 className='text-xl font-semibold text-slate-900'>Payment App</h3>
                <p className='mt-2 text-slate-600'>A UI-focused payment demo demonstrating form handling and responsive layout.</p>
                <Link href='/Paypal'>
                  <a className='mt-4 inline-block text-indigo-600 hover:underline'>View project</a>
                </Link>
              </div>

              <div className='rounded-3xl bg-slate-50 p-6 shadow-sm'>
                <h3 className='text-xl font-semibold text-slate-900'>Weather App</h3>
                <p className='mt-2 text-slate-600'>Small app that consumes a weather API to show current conditions and forecasts.</p>
                <Link href='/Weather'>
                  <a className='mt-4 inline-block text-indigo-600 hover:underline'>View project</a>
                </Link>
              </div>

              <div className='rounded-3xl bg-slate-50 p-6 shadow-sm'>
                <h3 className='text-xl font-semibold text-slate-900'>Interactive Game</h3>
                <p className='mt-2 text-slate-600'>A lightweight browser game showcasing UI state management and interactive feedback.</p>
                <Link href='/Game'>
                  <a className='mt-4 inline-block text-indigo-600 hover:underline'>View project</a>
                </Link>
              </div>
            </div>

            <p className='mt-6 text-sm text-slate-600'>Note: I am early in my professional development and focused on building strong, demonstrable projects and rapidly improving my skills.</p>
          </section>

          <div className='flex flex-col items-center gap-4 border-t border-slate-200 pt-8 text-center text-sm text-slate-500'>
            <p>© {new Date().getFullYear()} Samuel Zewge. All Rights Reserved.</p>
            <Link href='/#contact'>
              <a className='text-indigo-600 hover:underline'>Contact me for new opportunities</a>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default Resume
