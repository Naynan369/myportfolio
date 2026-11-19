import { useRouter } from 'next/router'
import { useTranslationBundle } from './TranslationContext'

const messages = {
  en: {
    nav: {
      skip: 'Skip to content', home: 'Home', about: 'About', work: 'Selected work', skills: 'Capabilities', resume: 'Résumé', contact: 'Contact',
      explore: 'EXPLORE', displays: ['HOME', 'WORK', 'ABOUT', 'SKILLS', 'RÉSUMÉ', 'CONTACT'],
      subtitle: 'Developer & data analyst', signature: 'Web / Data / Interaction', navigation: 'Navigation',
      posterLine: 'Software · Data · Interaction', byline: 'Software / Data', inside: 'Inside this portfolio',
      note: 'Software, data, and the thinking behind the work.', availability: 'Open to internships and junior roles',
      email: 'Email', light: 'Switch to light mode', dark: 'Switch to dark mode', close: 'Close', menu: 'Menu', mainNav: 'Main navigation', language: 'Site language',
    },
    home: {
      title: 'Samuel Z. Tadesse — Software Developer & Data Analysis Student',
      description: 'Portfolio of Samuel Z. Tadesse, a software developer and data analysis student. Explore web applications, analytics projects, and ways to connect.',
      role: 'Data Analysis Student & Software Developer',
      intro: 'I build web apps with React and Next.js and use Python, SQL, and Power BI to explore data.',
      availability: 'Based in Messina. Open to internships and junior roles in Sicily or remotely across Italy and the EU.',
      explore: 'View projects', cv: 'Download CV (PDF)',
      animatedTools: 'Animated data tools',
    },
    about: {
      label: 'About me', heading: 'Curious by default.', emphasis: 'Building by choice.', photo: 'Samuel Z. Tadesse outdoors',
      lead: 'I find the story in data and build software that brings it to life.',
      body: 'That curiosity takes me from Power BI dashboards to React apps and the occasional browser game. I’m happiest when the result is useful and a little fun to explore.',
      interests: 'Interests', tags: ['Find the pattern', 'Build the experience', 'Keep learning'], resume: 'Read my résumé',
    },
    work: {
      heading: 'Featured projects', more: 'More projects',
      intro: 'Explore two full stack apps and a retail data analysis project.', tools: 'Tools used',
      explore: 'View case study',
    },
    skills: {
      label: 'Capabilities', heading: 'Built to keep', emphasis: 'learning.', intro: 'Tools I use to build web apps and analyze data.',
      groups: ['Frontend', 'Backend & tools', 'Data & analysis', 'Databases'], rfm: 'RFM analysis', modelling: 'Statistical modelling',
    },
    contact: {
      label: 'Get in touch', heading: 'Let’s talk', emphasis: 'about your team.',
      intro: 'I’m open to internships and junior roles in data analysis and software development. Reach me by email or connect on LinkedIn.',
      email: 'Email me', top: 'Back to top',
    },
    notFound: { title: 'Page not found — Samuel Z. Tadesse', heading: 'Page not found', body: 'The page may have moved, or the address may be incorrect. Explore my projects from the homepage.', back: 'Back to home' },
    detail: {
      back: 'Back to projects', screens: 'More project screens', built: 'What I built', walkthrough: 'How to explore',
      features: 'Key features', tools: 'Tools & technologies', more: 'More to explore', all: 'See all projects',
    },
    resume: {
      title: 'Résumé — Samuel Z. Tadesse', description: 'Education, skills, and selected projects of Samuel Z. Tadesse, data analysis student and software developer.',
      back: 'Back to home', label: 'Résumé / Samuel Z. Tadesse', heading: 'Data, software,', emphasis: 'and curiosity.',
      intro: 'Data Analysis student at the University of Messina, seeking an internship or junior role in data analysis or software development.',
      download: 'Download CV (PDF, English)', profileLabel: '01 / Profile', profile: 'What I bring',
      profile1: 'I turn raw data into dashboards and customer insights with Python, SQL, and Power BI. My software background helps me build useful tools around the analysis, from React interfaces to full-stack applications.',
      profile2: 'Based in Messina, Italy. Available in Sicily or remotely across Italy and the EU.',
      educationLabel: '02 / Education', education: 'Studies', present: '2023 – present',
      messina: 'University of Messina', messinaDegree: 'B.Sc. Data Analysis · Messina, Italy · Expected graduation 2027',
      messinaCourses: 'Statistical Methods & Models, Machine Learning, Data Structures & Algorithms, Databases, and Programming Languages.',
      act: 'American College of Technology', actDegree: 'Computer Science · Addis Ababa, Ethiopia',
      actCourses: 'Completed one year before transferring to the University of Messina. Coursework included Web Programming, Databases, and Computer Networks.',
      projectsLabel: '03 / Selected projects', projects: 'Work', all: 'Explore all projects', capabilities: '04 / Capabilities',
      groups: ['Data & analytics', 'Software', 'Databases & tools'], languages: 'Languages', languageList: 'Amharic: native · English: C1 · Italian: B1', connect: 'Connect',
      skillItems: [
        'Python, Pandas, NumPy, Jupyter, SQL, Power BI, Excel, RFM segmentation, statistical modelling',
        'JavaScript, Java, React, Next.js, Node.js, Express.js, REST APIs, Firebase, HTML, CSS, Tailwind CSS',
        'PostgreSQL, MySQL, Microsoft SQL Server, MongoDB, Neo4j, Git, Docker, Linux',
      ],
    },
  },
  it: {
    nav: {
      skip: 'Vai al contenuto', home: 'Home', about: 'Chi sono', work: 'Progetti selezionati', skills: 'Competenze', resume: 'Curriculum', contact: 'Contatti',
      explore: 'ESPLORA', displays: ['HOME', 'PROGETTI', 'CHI SONO', 'COMPETENZE', 'CV', 'CONTATTI'],
      subtitle: 'Sviluppatore e analista dati', signature: 'Web / Dati / Interazione', navigation: 'Navigazione',
      posterLine: 'Software · Dati · Interazione', byline: 'Software / Dati', inside: 'In questo portfolio',
      note: 'Software, dati e le idee alla base dei progetti.', availability: 'Disponibile per tirocini e ruoli junior',
      email: 'Email', light: 'Passa alla modalità chiara', dark: 'Passa alla modalità scura', close: 'Chiudi', menu: 'Menu', mainNav: 'Navigazione principale', language: 'Lingua del sito',
    },
    home: {
      title: 'Samuel Z. Tadesse — Sviluppatore software e studente di Analisi dei dati',
      description: 'Portfolio di Samuel Z. Tadesse, sviluppatore software e studente di Analisi dei dati. Scopri applicazioni web, progetti di analisi e come contattarmi.',
      role: 'Studente di Analisi dei dati e sviluppatore software',
      intro: 'Sviluppo applicazioni web con React e Next.js e analizzo dati con Python, SQL e Power BI.',
      availability: 'Vivo a Messina. Sono disponibile per tirocini e ruoli junior in Sicilia o da remoto in Italia e nell’UE.',
      explore: 'Vedi i progetti', cv: 'Scarica il CV (inglese)',
      animatedTools: 'Strumenti di analisi dei dati animati',
    },
    about: {
      label: 'Chi sono', heading: 'Curioso per natura.', emphasis: 'Creo per scelta.', photo: 'Samuel Z. Tadesse all’aperto',
      lead: 'Trovo la storia nei dati e creo software che la porta alla luce.',
      body: 'Questa curiosità mi porta dalle dashboard di Power BI alle app React, fino a qualche gioco per browser. Mi piace soprattutto creare qualcosa di utile e piacevole da esplorare.',
      interests: 'Interessi', tags: ['Trova lo schema', 'Crea l’esperienza', 'Continua a imparare'], resume: 'Leggi il mio curriculum',
    },
    work: {
      heading: 'Progetti in evidenza', more: 'Altri progetti',
      intro: 'Due applicazioni full stack e un progetto di analisi dei dati di vendita.', tools: 'Strumenti utilizzati',
      explore: 'Vedi il caso studio',
    },
    skills: {
      label: 'Competenze', heading: 'Sempre pronto a', emphasis: 'imparare.', intro: 'Gli strumenti che uso per sviluppare applicazioni web e analizzare dati.',
      groups: ['Frontend', 'Backend e strumenti', 'Dati e analisi', 'Database'], rfm: 'Analisi RFM', modelling: 'Modellazione statistica',
    },
    contact: {
      label: 'Contattami', heading: 'Parliamo', emphasis: 'del tuo team.',
      intro: 'Sono disponibile per tirocini e ruoli junior nell’analisi dei dati e nello sviluppo software. Scrivimi via email o contattami su LinkedIn.',
      email: 'Scrivimi', top: 'Torna su',
    },
    notFound: { title: 'Pagina non trovata — Samuel Z. Tadesse', heading: 'Pagina non trovata', body: 'La pagina potrebbe essere stata spostata oppure l’indirizzo non è corretto. Puoi esplorare i miei progetti dalla home.', back: 'Torna alla home' },
    detail: {
      back: 'Torna ai progetti', screens: 'Altre schermate del progetto', built: 'Cosa ho realizzato', walkthrough: 'Come esplorare il progetto',
      features: 'Funzionalità principali', tools: 'Strumenti e tecnologie', more: 'Altri progetti', all: 'Vedi tutti i progetti',
    },
    resume: {
      title: 'Curriculum — Samuel Z. Tadesse', description: 'Formazione, competenze e progetti selezionati di Samuel Z. Tadesse, studente di Analisi dei dati e sviluppatore software.',
      back: 'Torna alla home', label: 'Curriculum / Samuel Z. Tadesse', heading: 'Dati, software', emphasis: 'e curiosità.',
      intro: 'Studente di Analisi dei dati all’Università di Messina, cerco un tirocinio o un ruolo junior nell’analisi dei dati o nello sviluppo software.',
      download: 'Scarica il CV (PDF, in inglese)', profileLabel: '01 / Profilo', profile: 'Cosa posso offrire',
      profile1: 'Trasformo dati grezzi in dashboard e informazioni sui clienti con Python, SQL e Power BI. La mia esperienza nello sviluppo software mi aiuta a creare strumenti utili intorno all’analisi, dalle interfacce React alle applicazioni full stack.',
      profile2: 'Vivo a Messina. Sono disponibile in Sicilia o da remoto in Italia e nell’UE.',
      educationLabel: '02 / Formazione', education: 'Studi', present: '2023 – oggi',
      messina: 'Università di Messina', messinaDegree: 'Laurea triennale in Analisi dei dati · Messina, Italia · Laurea prevista nel 2027',
      messinaCourses: 'Metodi e modelli statistici, Machine Learning, Strutture dati e algoritmi, Basi di dati e Linguaggi di programmazione.',
      act: 'American College of Technology', actDegree: 'Informatica · Addis Abeba, Etiopia',
      actCourses: 'Ho completato un anno prima di trasferirmi all’Università di Messina. I corsi includevano Programmazione web, Basi di dati e Reti informatiche.',
      projectsLabel: '03 / Progetti selezionati', projects: 'Progetti', all: 'Scopri tutti i progetti', capabilities: '04 / Competenze',
      groups: ['Dati e analisi', 'Software', 'Database e strumenti'], languages: 'Lingue', languageList: 'Amarico: madrelingua · Inglese: C1 · Italiano: B1', connect: 'Contatti',
      skillItems: [
        'Python, Pandas, NumPy, Jupyter, SQL, Power BI, Excel, segmentazione RFM, modellazione statistica',
        'JavaScript, Java, React, Next.js, Node.js, Express.js, API REST, Firebase, HTML, CSS, Tailwind CSS',
        'PostgreSQL, MySQL, Microsoft SQL Server, MongoDB, Neo4j, Git, Docker, Linux',
      ],
    },
  },
}

export const englishMessages = messages.en

export function useMessages() {
  const { locale } = useRouter()
  const bundle = useTranslationBundle()
  return locale === 'it' && bundle?.source === 'google' ? bundle.messages : messages[locale] || messages.en
}
