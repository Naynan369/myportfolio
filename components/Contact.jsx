export default function Contact() {
  return (
    <footer className='contact-section' id='contact'>
      <div className='container'>
        <p className='eyebrow'>04 / Get in touch</p>
        <div className='contact-main'><h2>Have something<br /><em>in mind?</em></h2><div><p>I’m open to curricular internships in data and BI analytics, as well as software projects. Reach me by email or connect on LinkedIn.</p><div className='contact-actions'><a className='button button-light' href='mailto:samuel.zewge@icloud.com'>Email me</a><a className='contact-social' href='https://www.linkedin.com/in/samuel369' target='_blank' rel='noopener noreferrer'>LinkedIn</a></div></div></div>
        <div className='footer-bottom'><span>© {new Date().getFullYear()} Samuel Z. Tadesse</span><div><a href='https://github.com/Naynan369' target='_blank' rel='noopener noreferrer'>GitHub</a><a href='https://www.linkedin.com/in/samuel369' target='_blank' rel='noopener noreferrer'>LinkedIn</a><a href='#home'>Back to top</a></div></div>
      </div>
    </footer>
  )
}
