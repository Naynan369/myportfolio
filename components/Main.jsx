import Link from 'next/link'
import HeroScene from './HeroScene'
import { projects } from '../lib/projects'
import { useMessages } from '../lib/i18n'

export default function Main() {
  const t = useMessages().home
  return <>
    <section className='hero' id='home'>
      <div className='hero-scrim' />
      <div className='container hero-inner'>
        <div className='hero-topline'><span>{t.portfolio}</span><span>{t.line}</span></div>
        <div className='hero-main'><p className='eyebrow'>{t.role}</p><h1><span>{t.code} <em>{t.character}</em></span><span>{t.data} <em>{t.direction}</em></span></h1></div>
        <HeroScene />
        <div className='hero-lower'><p>{t.intro}</p><div className='hero-actions'><Link href='/#projects'><a className='hero-work-link'>{t.explore}</a></Link><span>01 — {String(projects.length).padStart(2, '0')} / {t.projects}</span></div></div>
        <div className='hero-baseline'><span>{t.scroll}</span><span className='scroll-rule' aria-hidden='true' /></div>
      </div>
    </section>
    <div className='ticker' aria-hidden='true'><div className='container ticker-grid'>{t.ticker.map(item => <span key={item}>{item}</span>)}</div></div>
  </>
}
