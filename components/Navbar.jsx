import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { useMessages } from '../lib/i18n'
import { useTranslationBundle } from '../lib/TranslationContext'

export default function Navbar() {
  const router = useRouter()
  const translationBundle = useTranslationBundle()
  const t = useMessages().nav
  const links = [
    { href: '/#home', label: t.home }, { href: '/#projects', label: t.work },
    { href: '/#about', label: t.about }, { href: '/#skills', label: t.skills },
    { href: '/resume', label: t.resume }, { href: '/#contact', label: t.contact },
  ]
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState('light')
  const [activeLink, setActiveLink] = useState(null)
  const posterRef = useRef(null)
  const menuButtonRef = useRef(null)
  const headerRef = useRef(null)
  const displayWord = activeLink === null ? t.explore : t.displays[activeLink]

  useEffect(() => {
    const updateDocumentLanguage = () => {
      document.documentElement.lang = router.locale === 'it' && translationBundle?.source === 'google'
        ? 'it-x-mtfrom-en'
        : router.locale || 'en'
    }
    updateDocumentLanguage()
    router.events.on('routeChangeComplete', updateDocumentLanguage)
    return () => router.events.off('routeChangeComplete', updateDocumentLanguage)
  }, [router.locale, router.events, translationBundle])

  useEffect(() => {
    const frame = requestAnimationFrame(() => setTheme(document.documentElement.dataset.theme || 'light'))
    return () => cancelAnimationFrame(frame)
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const content = document.getElementById('page-content')
    const previousInert = content?.inert
    if (content) content.inert = true
    const header = headerRef.current
    const menuButton = menuButtonRef.current
    const focusable = () => Array.from(header.querySelectorAll('a[href], button:not([disabled])'))
      .filter(element => element.getClientRects().length > 0)
    header.querySelector('.menu-poster-links a')?.focus()
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setOpen(false)
      }
      if (event.key !== 'Tab') return
      const elements = focusable()
      const first = elements[0]
      const last = elements[elements.length - 1]
      if (event.shiftKey && (document.activeElement === first || !header.contains(document.activeElement))) {
        event.preventDefault()
        last?.focus()
      } else if (!event.shiftKey && (document.activeElement === last || !header.contains(document.activeElement))) {
        event.preventDefault()
        first?.focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      if (content) content.inert = previousInert
      window.removeEventListener('keydown', handleKeyDown)
      menuButton?.focus({ preventScroll: true })
    }
  }, [open])

  useEffect(() => {
    const closeMenu = () => setOpen(false)
    router.events.on('routeChangeStart', closeMenu)
    router.events.on('hashChangeStart', closeMenu)
    return () => {
      router.events.off('routeChangeStart', closeMenu)
      router.events.off('hashChangeStart', closeMenu)
    }
  }, [router.events])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = nextTheme
    setTheme(nextTheme)
    try {
      window.localStorage.setItem('portfolio-theme', nextTheme)
    } catch {
      // Theme switching still works when the browser blocks storage.
    }
  }

  const switchLanguage = (locale) => {
    if (locale === router.locale) return
    setOpen(false)
    setActiveLink(null)
    router.push(router.asPath, router.asPath, { locale, scroll: false })
  }

  const movePoster = (event) => {
    if (event.pointerType === 'touch' || !posterRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const rect = posterRef.current.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width - .5) * 28
    const y = ((event.clientY - rect.top) / rect.height - .5) * 18
    posterRef.current.style.setProperty('--poster-x', `${x.toFixed(1)}px`)
    posterRef.current.style.setProperty('--poster-y', `${y.toFixed(1)}px`)
  }

  const resetPoster = () => {
    setActiveLink(null)
    if (!posterRef.current) return
    posterRef.current.style.setProperty('--poster-x', '0px')
    posterRef.current.style.setProperty('--poster-y', '0px')
  }

  return (
    <header ref={headerRef} className={open ? 'site-header menu-active' : 'site-header'}>
      <div className='container nav-inner'>
        <Link href='/' className='brand' onClick={() => setOpen(false)} aria-label={`Samuel Z. Tadesse, ${t.home}`}><span className='brand-mark'>ST.</span><span className='brand-copy'><strong>Samuel Z. Tadesse</strong><small>{t.subtitle}</small></span></Link>
        <div className='nav-signature' aria-hidden='true'><span className='nav-signal' />{t.signature}</div>
        <div className='nav-actions'>
          <div className='language-switch' role='group' aria-label={t.language}>
            <button type='button' lang='en' aria-label='English' aria-pressed={router.locale === 'en'} onClick={() => switchLanguage('en')}>EN</button>
            <button type='button' lang='it' aria-label='Italiano' aria-pressed={router.locale === 'it'} onClick={() => switchLanguage('it')}>IT</button>
          </div>
          <button className='theme-toggle' type='button' onClick={toggleTheme} aria-label={theme === 'dark' ? t.light : t.dark} aria-pressed={theme === 'dark'} title={theme === 'dark' ? t.light : t.dark}>
            <svg className='theme-sun' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.7' aria-hidden='true'><circle cx='12' cy='12' r='4' /><path d='M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42' /></svg>
            <svg className='theme-moon' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.7' aria-hidden='true'><path d='M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5 8.5 8.5 0 1 0 20.5 15.5Z' /></svg>
          </button>
          <button ref={menuButtonRef} className={open ? 'menu-toggle is-open' : 'menu-toggle'} type='button' aria-label={open ? `${t.close} ${t.menu}` : `${t.menu}`} aria-expanded={open} aria-controls='primary-navigation' onClick={() => { setActiveLink(null); setOpen(!open) }}><span className='menu-label'>{open ? t.close : t.menu}</span><span className='hamburger-lines' aria-hidden='true'><i /><i /><i /></span></button>
        </div>
      </div>
      <nav id='primary-navigation' className={open ? 'site-nav is-open' : 'site-nav'} aria-label={t.mainNav} aria-hidden={!open}>
        <div className='container menu-layout'>
          <div className='menu-heading'><span className='eyebrow'>{t.navigation}</span><span className='menu-heading-rule' aria-hidden='true' /><span>{t.posterLine}</span></div>
          <div className='menu-poster' ref={posterRef} onPointerMove={movePoster} onPointerLeave={resetPoster}>
            <div className={displayWord.length > 8 ? 'menu-poster-type is-long' : 'menu-poster-type'} aria-hidden='true'>
              <span className='menu-poster-outline' key={`outline-${displayWord}`}>{displayWord}</span>
              <strong className='menu-poster-word' key={displayWord}>{displayWord}<i>.</i></strong>
              <span className='menu-poster-byline'>Samuel Z. Tadesse<br />{t.byline}</span>
            </div>
            <div className='menu-poster-bottom'>
              <div className='menu-poster-note'><span>{t.inside}</span><p>{t.note}</p></div>
              <div className='menu-poster-links' onMouseLeave={() => setActiveLink(null)}>{links.map((link, index) => <Link href={link.href} key={link.href} onMouseEnter={() => setActiveLink(index)} onFocus={() => setActiveLink(index)} onBlur={() => setActiveLink(null)} onClick={() => { setActiveLink(null); setOpen(false) }}>{link.label}</Link>)}</div>
            </div>
          </div>
          <div className='menu-contact'><span>{t.availability}</span><div><a href='mailto:samuel.zewge@icloud.com'>{t.email}</a><a href='https://www.linkedin.com/in/samuel369' target='_blank' rel='noopener noreferrer'>LinkedIn</a></div></div>
        </div>
      </nav>
    </header>
  )
}
