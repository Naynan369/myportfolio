import Image from 'next/image'
import Link from 'next/link'
import AboutScene from './AboutScene'
import portrait from '../public/assets/my.jpeg'
import { useMessages } from '../lib/i18n'

export default function About() {
  const t = useMessages().about
  return (
    <section className='section about-section' id='about'>
      <div className='container about-layout'>
        <p className='eyebrow about-label'>{t.label}</p>
        <div className='about-heading'><h2>{t.heading}<br /><em>{t.emphasis}</em></h2><span className='about-heading-rule' /></div>
        <div className='about-photo-wrap'>
          <AboutScene />
          <div className='about-photo'>
            <Image src={portrait} alt={t.photo} fill style={{ objectFit: 'cover', objectPosition: '50% 33%' }} quality={95} sizes='(max-width: 700px) 62vw, 360px' />
          </div>
        </div>
        <div className='about-copy'><p>{t.lead}</p><p>{t.body}</p><div className='about-tags' aria-label={t.interests}>{t.tags.map(tag => <span key={tag}>{tag}</span>)}</div><Link href='/resume' className='text-link'>{t.resume}</Link></div>
      </div>
    </section>
  )
}
