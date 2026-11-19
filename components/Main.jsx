import Link from 'next/link'
import HeroScene from './HeroScene'
import { useMessages } from '../lib/i18n'

export default function Main() {
  const { home, resume } = useMessages()
  return (
    <section className='hero' id='home'>
      <div className='hero-scrim' aria-hidden='true' />
      <div className='container hero-inner'>
        <div className='hero-main'>
          <p className='hero-role'>{home.role}</p>
          <h1>Samuel Z. Tadesse</h1>
          <p className='hero-intro'>{home.intro}</p>
          <p className='hero-availability'>{home.availability}</p>
          <div className='hero-actions'>
            <Link href='/#projects' className='button button-light'>{home.explore}</Link>
            <a className='button button-outline-light' href='/Samuel_Tadesse_CV.pdf' hrefLang='en' aria-label={resume.download} download>{home.cv}</a>
          </div>
        </div>
        <HeroScene />
      </div>
    </section>
  )
}
