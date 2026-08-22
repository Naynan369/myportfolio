import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import NavLogo from '../public/assets/logo.png'
import ProfilePic from '../public/assets/my.jpeg'

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)
  const [shadow, setShadow] = useState(false)

  useEffect(() => {
    const handleShadow = () => setShadow(window.scrollY >= 90)
    window.addEventListener('scroll', handleShadow)
    return () => window.removeEventListener('scroll', handleShadow)
  }, [])

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/#skills', label: 'Skills' },
    { href: '/resume', label: 'Resume' },
    { href: '/#projects', label: 'Projects' },
    { href: '/#contact', label: 'Contact' },
  ]

  const headerClass = shadow
    ? 'fixed left-0 top-0 z-50 w-full transition duration-300 bg-white/95 shadow-2xl backdrop-blur-xl'
    : 'fixed left-0 top-0 z-50 w-full transition duration-300 bg-white/80 backdrop-blur-lg'

  return (
    <>
      <header className={headerClass}>
        <div className='mx-auto flex h-20 max-w-[1240px] items-center justify-between px-4 sm:px-6 lg:px-8'>
          <Link href='/'>
            <a className='flex items-center gap-3 text-slate-900'>
              <Image src={NavLogo} alt='Samuel logo' width={48} height={48} className='rounded-full' />
              <div>
                <p className='text-base font-semibold'>Samuel Zewge</p>
                <p className='text-xs uppercase tracking-[0.25em] text-slate-500'>Full Stack</p>
              </div>
            </a>
          </Link>

          <nav className='hidden items-center gap-8 text-sm uppercase text-slate-700 md:flex'>
            {menuItems.map((item) => (
              <Link href={item.href} key={item.href}>
                <a className='relative transition duration-200 hover:text-slate-900 hover:before:absolute hover:before:-bottom-2 hover:before:left-0 hover:before:h-0.5 hover:before:w-full hover:before:bg-indigo-600'>
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>

          <div className='hidden items-center md:flex md:gap-4'>
            <Link href='/#about'>
              <a className='inline-flex items-center rounded-full ring-1 ring-slate-100 hover:ring-indigo-300'>
                <Image src={ProfilePic} alt='Samuel' width={40} height={40} className='rounded-full object-cover' />
              </a>
            </Link>
          </div>

          {!navOpen && (
            <button
              type='button'
              onClick={() => setNavOpen(true)}
              className='md:hidden rounded-full border border-slate-200 bg-white p-2 text-slate-900 shadow-sm transition duration-200 hover:bg-slate-50'
              aria-label='Open menu'
            >
              <AiOutlineMenu size={24} />
            </button>
          )}
        </div>

        {navOpen && (
          <div className='fixed inset-0 z-50 md:hidden'>
            <div className='absolute inset-0 bg-slate-950/50' onClick={() => setNavOpen(false)} />
            <button
              type='button'
              onClick={() => setNavOpen(false)}
              aria-label='Close menu'
              className='absolute right-4 top-5 z-30 rounded-full border border-slate-200 bg-white p-2 text-slate-900 shadow-sm transition duration-200 hover:bg-slate-50'
            >
              <AiOutlineClose size={24} />
            </button>

            <div className='relative h-full w-4/5 max-w-sm bg-white p-6 shadow-2xl border-r border-slate-200'>
              <div className='flex items-center justify-between'>
                <Link href='/'>
                  <a className='flex items-center gap-3 text-slate-900'>
                    <Image src={NavLogo} alt='Samuel logo' width={42} height={42} className='rounded-full' />
                    <span className='text-lg font-semibold'>Samuel</span>
                  </a>
                </Link>
              </div>

              <div className='mt-10 space-y-4'>
                {menuItems.map((item) => (
                  <Link href={item.href} key={item.href}>
                    <a
                      onClick={() => setNavOpen(false)}
                      className='block rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-100'
                    >
                      {item.label}
                    </a>
                  </Link>
                ))}
              </div>

              <div className='mt-10 border-t border-slate-200 pt-6'>
                <p className='text-sm uppercase tracking-[0.3em] text-slate-500'>Connect</p>
                <div className='mt-4 flex items-center gap-3'>
                  <a
                    href='https://www.linkedin.com/in/samuel-zewge-a47a03271'
                    target='_blank'
                    rel='noreferrer'
                    className='rounded-full bg-slate-100 p-3 text-slate-700 transition hover:bg-slate-200'
                  >
                    <FaLinkedinIn size={18} />
                  </a>
                  <a
                    href='https://github.com/Naynan369'
                    target='_blank'
                    rel='noreferrer'
                    className='rounded-full bg-slate-100 p-3 text-slate-700 transition hover:bg-slate-200'
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href='mailto:hello@example.com'
                    className='rounded-full bg-slate-100 p-3 text-slate-700 transition hover:bg-slate-200'
                  >
                    <AiOutlineMail size={18} />
                  </a>
                  <a
                    href='https://www.youtube.com/'
                    target='_blank'
                    rel='noreferrer'
                    className='rounded-full bg-slate-100 p-3 text-slate-700 transition hover:bg-slate-200'
                  >
                    <FaYoutube size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Navbar
