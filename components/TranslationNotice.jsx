import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslationBundle } from '../lib/TranslationContext'

export default function TranslationNotice() {
  const { locale } = useRouter()
  const bundle = useTranslationBundle()
  if (locale !== 'it' || bundle?.source !== 'google') return null

  return <aside className='translation-notice' lang='it' aria-label='Informazioni sulla traduzione'>
    <div className='container translation-notice-inner'>
      <span>Traduzione automatica</span>
      <a href='https://translate.google.com/' target='_blank' rel='noopener noreferrer' aria-label='Google Translate'>
        <Image src='/assets/google-translate-attribution.png' width={176} height={16} alt='powered by Google Translate' />
      </a>
      <details>
        <summary>Informazioni</summary>
        <p>Questa pagina è tradotta automaticamente dall’inglese con Google Translate. Le traduzioni potrebbero contenere errori.</p>
        <p>THIS SERVICE MAY CONTAIN TRANSLATIONS POWERED BY GOOGLE. GOOGLE DISCLAIMS ALL WARRANTIES RELATED TO THE TRANSLATIONS, EXPRESS OR IMPLIED, INCLUDING ANY WARRANTIES OF ACCURACY, RELIABILITY, AND ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.</p>
      </details>
    </div>
  </aside>
}

