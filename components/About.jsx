import Image from 'next/image'
import Link from 'next/link'
import AboutScene from './AboutScene'
import portrait from '../public/assets/my.jpeg'

export default function About() {
  return (
    <section className='section about-section' id='about'>
      <div className='container about-layout'>
        <p className='eyebrow about-label'>01 / Behind the screen</p>
        <div className='about-heading'><h2>Curious by default.<br /><em>Building by choice.</em></h2><span className='about-heading-rule' /></div>
        <div className='about-photo-wrap'>
          <AboutScene />
          <div className='about-photo'>
            <Image src={portrait} alt='The developer outdoors' layout='fill' objectFit='cover' objectPosition='50% 33%' quality={95} sizes='(max-width: 700px) 62vw, 360px' />
          </div>
        </div>
        <div className='about-copy'><p>I find the story in data and build software that brings it to life.</p><p>That curiosity takes me from Power BI dashboards to React apps and the occasional browser game. I’m happiest when the result is useful and a little fun to explore.</p><div className='about-tags' aria-label='Interests'><span>Find the pattern</span><span>Build the experience</span><span>Keep learning</span></div><Link href='/resume'><a className='text-link'>Read my résumé</a></Link></div>
      </div>
    </section>
  )
}
