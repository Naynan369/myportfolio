import Seo from './Seo'
import Image from 'next/image'
import Link from 'next/link'
import Contact from './Contact'
import { useProjects } from '../lib/TranslationContext'
import { useMessages } from '../lib/i18n'

export default function ProjectDetail({ project: sourceProject }) {
  const project = useProjects().find(item => item.slug === sourceProject.slug) || sourceProject
  const t = useMessages().detail
  return <>
    <Seo title={`${project.title} — Samuel Z. Tadesse`} description={project.summary} path={project.route} image={project.image} imageAlt={project.imageAlt} />
    <main id='main-content' tabIndex={-1} className='detail-page'>
      <section className='detail-intro' style={{ '--detail-image': 'url(' + project.image + ')' }}>
        <div className='container'>
          <Link href='/#projects' className='back-link'>{t.back}</Link>
          <p className='eyebrow'>{project.category}</p>
          <h1>{project.title}</h1>
          <p className='detail-lead'>{project.summary}</p>
          {project.links.length > 0 && (
            <div className='detail-links'>
              {project.links.map((link, index) => (
                <a
                  key={link.href}
                  className={index === 0 ? 'button button-light' : 'button button-outline-light'}
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel='noopener noreferrer'
                >{link.label}</a>
              ))}
            </div>
          )}
        </div>
      </section>
      <section className='container detail-content'>
        <div className='detail-grid'><div>
          <h2>{t.built}</h2>
          {project.description.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          {project.proof && <div className='detail-proof'>
            <span className='eyebrow'>{project.proof.eyebrow}</span>
            <h3>{project.proof.title}</h3>
            <p>{project.proof.body}</p>
          </div>}
          {project.highlights && <div className='detail-highlights'><h3>{t.features}</h3><ul>{project.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul></div>}
        </div><aside>
          {project.walkthrough && <div className='detail-walkthrough'><h3>{t.walkthrough}</h3><p>{project.walkthrough}</p></div>}
          <h3>{t.tools}</h3>
          <ul>{project.tools.map(tool => <li key={tool}>{tool}</li>)}</ul>
          {project.accessNote && <p className='detail-access-note'>{project.accessNote}</p>}
        </aside></div>
        <figure className='detail-preview'>
          <div className='detail-image'><Image src={project.image} alt={project.imageAlt} fill style={{ objectFit: 'contain' }} sizes='(max-width: 700px) 94vw, min(92vw, 1216px)' /></div>
          {project.imageCaption && <figcaption className='detail-image-caption'>{project.imageCaption}</figcaption>}
        </figure>
        {project.gallery?.length > 0 && <div className='detail-gallery' role='group' aria-label={t.screens}>
          {project.gallery.map(item => <figure key={item.image}>
            <div className='detail-gallery-frame'><Image src={item.image} alt={item.alt} fill style={{ objectFit: 'contain' }} sizes='(max-width: 700px) 94vw, min(92vw, 1216px)' /></div>
            <figcaption>{item.caption}</figcaption>
          </figure>)}
        </div>}
        <div className='next-project'><span>{t.more}</span><Link href='/#projects'>{t.all}</Link></div>
      </section>
    </main>
    <Contact />
  </>
}
