import ProjectItem from './ProjectItem'
import { projects } from '../lib/projects'

export default function Projects() {
  return (
    <section className='section projects-section' id='projects'>
      <div className='container'>
        <div className='work-heading'><div><p className='eyebrow'>02 / Selected work</p><h2>Ideas made <em>real.</em></h2></div><div className='work-heading-aside'><span>{String(projects.length).padStart(2, '0')} / Case studies</span><p>A collection of work across web applications, interaction, and data storytelling.</p></div></div>
        <div className='projects-grid'>{projects.map((project, index) => <ProjectItem project={project} index={index} total={projects.length} key={project.slug} />)}</div>
      </div>
    </section>
  )
}
