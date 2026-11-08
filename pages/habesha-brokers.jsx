import ProjectDetail from '../components/ProjectDetail'
import { projects } from '../lib/projects'

export default function HabeshaBrokers() { return <ProjectDetail project={projects.find(project => project.slug === 'habesha-brokers')} /> }
