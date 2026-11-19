import { getTranslationPageProps } from '../lib/googleTranslate'
import ProjectDetail from '../components/ProjectDetail'
import { projects } from '../lib/projects'

export default function Netflix() { return <ProjectDetail project={projects.find(project => project.slug === 'netflix')} /> }

export async function getServerSideProps(context) {
  return getTranslationPageProps(context)
}
