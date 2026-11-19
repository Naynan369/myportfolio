import { createContext, useContext } from 'react'
import { useRouter } from 'next/router'
import { getProjects } from './projects'

export const TranslationContext = createContext(null)

export function useTranslationBundle() {
  return useContext(TranslationContext)
}

export function useProjects() {
  const { locale } = useRouter()
  const bundle = useTranslationBundle()
  return locale === 'it' && bundle?.source === 'google' ? bundle.projects : getProjects(locale)
}

