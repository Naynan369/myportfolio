import ProjectItem from './ProjectItem'
import { featuredProjectSlugs } from '../lib/projects'
import { useProjects } from '../lib/TranslationContext'
import { useMessages } from '../lib/i18n'

export default function Projects() {
  const projects = useProjects()
  const featured = featuredProjectSlugs.map(slug => projects.find(project => project.slug === slug))
  const additional = projects.filter(project => !featuredProjectSlugs.includes(project.slug))
  const t = useMessages().work
  return (
    <section className='section projects-section' id='projects'>
      <div className='container'>
        <div className='work-heading'>
          <h2>{t.heading}</h2>
          <p>{t.intro}</p>
        </div>
        <div className='projects-grid'>
          {featured.map(project => <ProjectItem project={project} key={project.slug} />)}
        </div>
        <section className='more-projects'>
          <h3>{t.more}</h3>
          <div className='projects-grid projects-grid--compact'>
            {additional.map(project => <ProjectItem project={project} compact key={project.slug} />)}
          </div>
        </section>
      </div>
    </section>
  )
}
