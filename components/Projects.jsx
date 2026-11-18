import ProjectItem from './ProjectItem'
import { getProjects } from '../lib/projects'
import { useMessages } from '../lib/i18n'
import { useRouter } from 'next/router'

export default function Projects() {
  const { locale } = useRouter()
  const projects = getProjects(locale)
  const t = useMessages().work
  return (
    <section className='section projects-section' id='projects'>
      <div className='container'>
        <div className='work-heading'><div><p className='eyebrow'>{t.label}</p><h2>{t.heading} <em>{t.emphasis}</em></h2></div><div className='work-heading-aside'><span>{String(projects.length).padStart(2, '0')} / {t.studies}</span><p>{t.intro}</p></div></div>
        <div className='projects-grid'>{projects.map((project, index) => <ProjectItem project={project} index={index} total={projects.length} key={project.slug} />)}</div>
      </div>
    </section>
  )
}
