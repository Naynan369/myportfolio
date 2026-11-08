import Link from 'next/link'
import HeroScene from './HeroScene'
import { projects } from '../lib/projects'

export default function Main() {
  return <>
    <section className='hero' id='home'>
      <div className='hero-scrim' />
      <div className='container hero-inner'>
        <div className='hero-topline'><span>Samuel Z. Tadesse / Digital portfolio</span><span>Software · Data · Interaction</span></div>
        <div className='hero-main'><p className='eyebrow'>Data analysis student &amp; software developer</p><h1><span>Code with <em>character.</em></span><span>Data with <em>direction.</em></span></h1></div>
        <HeroScene />
        <div className='hero-lower'><p>I turn data into clear stories and build software people enjoy using.</p><div className='hero-actions'><Link href='/#projects'><a className='hero-work-link'>Explore selected work</a></Link><span>01 — {String(projects.length).padStart(2, '0')} / Projects</span></div></div>
        <div className='hero-baseline'><span>Scroll to discover</span><span className='scroll-rule' aria-hidden='true' /></div>
      </div>
    </section>
    <div className='ticker' aria-hidden='true'><div className='container ticker-grid'><span>DATA, DECODED.</span><span>SOFTWARE, BUILT.</span><span>CURIOSITY, ALWAYS.</span></div></div>
  </>
}
