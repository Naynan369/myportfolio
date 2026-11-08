import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Contact from './Contact'

export default function ProjectDetail({ project }) {
  return <>
    <Head><title>{project.title} — Samuel Z. Tadesse</title><meta name='description' content={project.summary} /><link rel='icon' href='/favicon.svg' /></Head>
    <main id='home' className='detail-page'>
      <section className='detail-intro' style={{ '--detail-image': 'url(' + project.image + ')' }}><div className='container'>
        <Link href='/#projects'><a className='back-link'>Back to work</a></Link>
        <p className='eyebrow'>{project.category} / Case study</p>
        <h1>{project.title}<span className='heading-period'>.</span></h1>
        <p className='detail-lead'>{project.summary}</p>
      </div></section>
      <section className='container detail-content'>
        <div className='detail-image'><Image src={project.image} alt={project.imageAlt} layout='fill' objectFit='contain' priority /></div>
        <div className='detail-grid'><div><p className='eyebrow'>The project</p><h2>What I built</h2>{project.description.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{project.highlights && <div className='detail-highlights'><h3>Key features</h3><ul>{project.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul></div>}{project.links.length > 0 && <div className='detail-links'>{project.links.map(link => <a key={link.href} className='button button-dark' href={link.href} target='_blank' rel='noopener noreferrer'>{link.label}</a>)}</div>}</div><aside><p className='eyebrow'>Tools & technologies</p><ul>{project.tools.map(tool => <li key={tool}>{tool}</li>)}</ul></aside></div>
        <div className='next-project'><span>More to explore</span><Link href='/#projects'><a>See all projects</a></Link></div>
      </section>
    </main>
    <Contact />
  </>
}
