import Image from 'next/image'
import Link from 'next/link'
import { useMessages } from '../lib/i18n'

export default function ProjectItem({ project, index, total }) {
  const t = useMessages().work
  return (
    <article className={'project-card project-card--' + project.slug}>
      <div className='project-card-content'>
        <div className='project-meta'>
          <span className='project-category'>{project.category}</span>
          <span className='project-count'>{String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
        </div>
        <div className='project-card-main'>
          <h3>{project.title}</h3>
          <p className='project-summary'>{project.summary}</p>
          <ul className='project-tools' aria-label={t.tools}>
            {project.tools.slice(0, 3).map((tool) => <li key={tool}>{tool}</li>)}
          </ul>
        </div>
        <Link href={project.route}>
          <a className='project-read' aria-label={`${t.read} ${project.title}`}>{t.explore}</a>
        </Link>
      </div>
      <Link href={project.route}>
        <a className='project-visual' aria-label={`${t.view} ${t.project} ${project.title}`}>
          <span className='project-device'>
            <span className='project-device-bar' aria-hidden='true'><i /><i /><i /><span>{project.title}</span></span>
            <span className='project-screen'><Image src={project.image} alt={project.imageAlt} layout='fill' objectFit='cover' quality={90} /></span>
          </span>
        </a>
      </Link>
    </article>
  )
}
