import { getTranslationPageProps } from '../lib/googleTranslate'
import ProjectDetail from '../components/ProjectDetail'
import { projects } from '../lib/projects'

export default function Game() { return <ProjectDetail project={projects.find(project => project.slug === 'game')} /> }

export async function getServerSideProps(context) {
  return getTranslationPageProps(context)
}
