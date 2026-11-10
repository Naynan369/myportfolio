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

const meshPoint = (row, column) => {
  const x = 18 + column * 12.8
  const baseY = 34 + row * 12.2
  const taper = Math.sin(Math.PI * x / 240)
  const rise = Math.exp(-Math.pow((x - 132) / 58, 2)) * Math.exp(-Math.pow((row - 7) / 5, 2)) * 23
  const wave = Math.sin(x / 29 + row * .27) * (8 + 10 * Math.exp(-Math.pow((row - 7) / 5, 2))) * taper
  return [x, baseY + wave - rise]
}

const meshRows = Array.from({ length: 15 }, (_, row) => Array.from({ length: 17 }, (_, column) => meshPoint(row, column)))
const meshColumns = Array.from({ length: 17 }, (_, column) => meshRows.map(row => row[column]))
const meshPath = points => points.map(([x, y], index) => `${index ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join('')

function MenuDataArt() {
  return (
    <svg className='menu-data-art' viewBox='0 0 240 240' aria-hidden='true' focusable='false'>
      <defs>
        <linearGradient id='menu-mesh-stroke' x1='0' y1='1' x2='1' y2='0'>
          <stop offset='0%' stopColor='#4f7484' />
          <stop offset='52%' stopColor='#b8a69b' />
          <stop offset='100%' stopColor='#e4b99a' />
        </linearGradient>
      </defs>
      <circle className='menu-data-halo' cx='120' cy='120' r='91' />
      <g className='menu-data-mesh'>
        {meshRows.map((points, index) => <path className='menu-data-thread' d={meshPath(points)} key={`row-${index}`} />)}
        {meshColumns.map((points, index) => <path className='menu-data-thread menu-data-thread--cross' d={meshPath(points)} key={`column-${index}`} />)}
      </g>
      <circle className='menu-data-beacon' cx={meshRows[5][12][0]} cy={meshRows[5][12][1]} r='3.5' />
      <circle className='menu-data-beacon-ring' cx={meshRows[5][12][0]} cy={meshRows[5][12][1]} r='10' />
      <text className='menu-data-caption' x='31' y='29'>DATA / CODE</text>
      <text className='menu-data-caption menu-data-caption--end' x='209' y='218' textAnchor='end'>SIGNAL / STRUCTURE</text>
    </svg>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState('dark')
  const [activeLink, setActiveLink] = useState(null)

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
          <button className={open ? 'menu-toggle is-open' : 'menu-toggle'} type='button' aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls='primary-navigation' onClick={() => { setActiveLink(null); setOpen(!open) }}><span className='menu-label'>{open ? 'Close' : 'Menu'}</span><span className='hamburger-lines' aria-hidden='true'><i /><i /><i /></span></button>
        </div>
      </div>
      <nav id='primary-navigation' className={open ? 'site-nav is-open' : 'site-nav'} aria-label='Main navigation' aria-hidden={!open}>
        <div className='container menu-layout'>
          <div className='menu-heading'><span className='eyebrow'>Navigation</span><span className='menu-heading-rule' aria-hidden='true' /><span>Software · Data · Interaction</span></div>
          <div className='menu-stage'>
            <div className='menu-intro'>
              <span className='menu-intro-kicker'>Samuel Z. Tadesse / Portfolio</span>
              <h2>Explore{' '}<br /><em>the work.</em></h2>
              <p>Software built with care.{' '}<br />Data made clear.</p>
              <div className='menu-intro-foot'>A closer look at the work and the thinking behind it.</div>
            </div>
            <div className={activeLink === null ? 'menu-orbit' : 'menu-orbit has-active'} style={{ '--active-angle': `${(activeLink || 0) * 60}deg` }} onMouseLeave={() => setActiveLink(null)}>
              <svg className='menu-orbit-trace' viewBox='0 0 100 100' aria-hidden='true' focusable='false'>
                <circle cx='50' cy='50' r='46' pathLength='100' />
              </svg>
              <span className='menu-orbit-marker' aria-hidden='true' />
              <div className='menu-core' aria-hidden='true'>
                <div className='menu-core-ring' />
                <div className='menu-core-media'><MenuDataArt /></div>
              </div>
              <div className='menu-links'>{links.map((link, index) => <Link href={link.href} key={link.href}><a onMouseEnter={() => setActiveLink(index)} onFocus={() => setActiveLink(index)} onBlur={() => setActiveLink(null)} onClick={() => { setActiveLink(null); setOpen(false) }}>{link.label}</a></Link>)}</div>
            </div>
          </div>
          <div className='menu-contact'><span>Open to internships and thoughtful projects</span><div><a href='mailto:samuel.zewge@icloud.com'>Email</a><a href='https://www.linkedin.com/in/samuel369' target='_blank' rel='noopener noreferrer'>LinkedIn</a></div></div>
        </div>
      </nav>
    </header>
  )
}
