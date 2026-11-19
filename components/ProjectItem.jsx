import Image from 'next/image'
import Link from 'next/link'
import { useMessages } from '../lib/i18n'

export default function ProjectItem({ project, compact = false }) {
  const t = useMessages().work
  const Title = compact ? 'h4' : 'h3'
  return (
    <article className={'project-card project-card--' + project.slug}>
      <div className='project-card-content'>
        <div className='project-meta'>
          <span className='project-category'>{project.category}</span>
        </div>
        <div className='project-card-main'>
          <Title>{project.title}</Title>
          <p className='project-summary'>{project.summary}</p>
          <ul className='project-tools' aria-label={t.tools}>
            {project.tools.slice(0, 3).map((tool) => <li key={tool}>{tool}</li>)}
          </ul>
        </div>
        <Link href={project.route} className='project-read' aria-label={`${t.explore}: ${project.title}`}>{t.explore}</Link>
      </div>
      <div className='project-visual'>
        <div className='project-device'>
          <div className='project-device-bar' aria-hidden='true'><i /><i /><i /><span>{project.title}</span></div>
          <div className='project-screen'>
            <Image src={project.image} alt={project.imageAlt} fill style={{ objectFit: project.imageFit || 'cover' }} sizes='(max-width: 700px) 90vw, 48vw' quality={85} />
          </div>
        </div>
      </div>
    </article>
  )
}
