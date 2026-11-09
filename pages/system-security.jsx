import ProjectDetail from '../components/ProjectDetail'
import { projects } from '../lib/projects'

export default function SystemSecurity() { return <ProjectDetail project={projects.find(project => project.slug === 'system-security')} /> }
