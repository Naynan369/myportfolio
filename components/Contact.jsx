import { useMessages } from '../lib/i18n'

export default function Contact() {
  const t = useMessages().contact
  return (
    <footer className='contact-section' id='contact'>
      <div className='container'>
        <p className='eyebrow'>{t.label}</p>
        <div className='contact-main'><h2>{t.heading}<br /><em>{t.emphasis}</em></h2><div><p>{t.intro}</p><div className='contact-actions'><a className='button button-light' href='mailto:samuel.zewge@icloud.com'>{t.email}</a><a className='contact-social' href='https://www.linkedin.com/in/samuel369' target='_blank' rel='noopener noreferrer'>LinkedIn</a></div></div></div>
        <div className='footer-bottom'><span>© {new Date().getFullYear()} Samuel Z. Tadesse</span><div><a href='https://github.com/Naynan369' target='_blank' rel='noopener noreferrer'>GitHub</a><a href='https://www.linkedin.com/in/samuel369' target='_blank' rel='noopener noreferrer'>LinkedIn</a><a href='#main-content'>{t.top}</a></div></div>
      </div>
    </footer>
  )
}
