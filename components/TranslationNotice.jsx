import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslationBundle } from '../lib/TranslationContext'

export default function TranslationNotice() {
  const { locale } = useRouter()
  const bundle = useTranslationBundle()
  if (locale !== 'it' || bundle?.source !== 'google') return null

  return <aside className='translation-notice' lang='it' aria-label='Google Translate'>
    <div className='translation-notice-inner'>
      <a href='https://translate.google.com/' target='_blank' rel='noopener noreferrer' aria-label='Google Translate'>
        <Image src='/assets/google-translate-attribution.png' width={176} height={16} alt='powered by Google Translate' />
      </a>
      <details>
        <summary aria-label='Informazioni sulla traduzione' title='Informazioni sulla traduzione'><span aria-hidden='true'>i</span></summary>
        <p lang='en'>THIS SERVICE MAY CONTAIN TRANSLATIONS POWERED BY GOOGLE. GOOGLE DISCLAIMS ALL WARRANTIES RELATED TO THE TRANSLATIONS, EXPRESS OR IMPLIED, INCLUDING ANY WARRANTIES OF ACCURACY, RELIABILITY, AND ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.</p>
      </details>
    </div>
  </aside>
}

