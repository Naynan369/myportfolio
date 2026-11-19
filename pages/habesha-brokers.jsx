import { getTranslationPageProps } from '../lib/googleTranslate'
import ProjectDetail from '../components/ProjectDetail'
import { projects } from '../lib/projects'

export default function HabeshaBrokers() { return <ProjectDetail project={projects.find(project => project.slug === 'habesha-brokers')} /> }

export async function getServerSideProps(context) {
  return getTranslationPageProps(context)
}
