import ProjectDetail from '../components/ProjectDetail'
import { projects } from '../lib/projects'

export default function Paypal() { return <ProjectDetail project={projects.find(project => project.slug === 'paypal')} /> }
