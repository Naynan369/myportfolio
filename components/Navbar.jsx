import Link from 'next/link'
import { useEffect, useState } from 'react'

const links = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#projects', label: 'Selected work' },
  { href: '/#skills', label: 'Capabilities' },
  { href: '/resume', label: 'Résumé' },
  { href: '/#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme || 'dark')
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const closeOnEscape = (event) => { if (event.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [open])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = nextTheme
    window.localStorage.setItem('portfolio-theme', nextTheme)
    setTheme(nextTheme)
  }

  return (
    <header className={open ? 'site-header menu-active' : 'site-header'}>
      <div className='container nav-inner'>
        <Link href='/'><a className='brand' onClick={() => setOpen(false)} aria-label='Samuel Z. Tadesse, home'><span className='brand-mark'>ST.</span><span className='brand-copy'><strong>Samuel Z. Tadesse</strong><small>Developer &amp; data analyst</small></span></a></Link>
        <div className='nav-signature' aria-hidden='true'><span className='nav-signal' />Web / Data / Interaction</div>
        <div className='nav-actions'>
          <button className='theme-toggle' type='button' onClick={toggleTheme} aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} aria-pressed={theme === 'dark'} title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
            <svg className='theme-sun' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.7' aria-hidden='true'><circle cx='12' cy='12' r='4' /><path d='M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42' /></svg>
            <svg className='theme-moon' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.7' aria-hidden='true'><path d='M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5 8.5 8.5 0 1 0 20.5 15.5Z' /></svg>
          </button>
          <button className={open ? 'menu-toggle is-open' : 'menu-toggle'} type='button' aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls='primary-navigation' onClick={() => setOpen(!open)}><span className='menu-label'>{open ? 'Close' : 'Menu'}</span><span className='hamburger-lines' aria-hidden='true'><i /><i /><i /></span></button>
        </div>
      </div>
      <nav id='primary-navigation' className={open ? 'site-nav is-open' : 'site-nav'} aria-label='Main navigation' aria-hidden={!open}>
        <div className='container menu-layout'>
          <div className='menu-links'>{links.map(link => <Link href={link.href} key={link.href}><a onClick={() => setOpen(false)}>{link.label}</a></Link>)}</div>
          <div className='menu-aside'><p className='eyebrow'>A little more</p><div className='menu-art'><span>Code with character.<br />Data with direction.</span></div><div className='menu-aside-bottom'><span>Samuel Z. Tadesse<br />Developer &amp; data analyst</span><a href='https://www.linkedin.com/in/samuel369' target='_blank' rel='noopener noreferrer'>Connect</a></div></div>
        </div>
      </nav>
    </header>
  )
}
