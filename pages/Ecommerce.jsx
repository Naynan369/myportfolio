import ProjectDetail from '../components/ProjectDetail'
import { projects } from '../lib/projects'

export default function Ecommerce() { return <ProjectDetail project={projects.find(project => project.slug === 'ecommerce')} /> }
