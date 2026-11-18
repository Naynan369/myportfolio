import { useRouter } from 'next/router'

const messages = {
  en: {
    nav: {
      home: 'Home', about: 'About', work: 'Selected work', skills: 'Capabilities', resume: 'Résumé', contact: 'Contact',
      explore: 'EXPLORE', displays: ['HOME', 'ABOUT', 'WORK', 'SKILLS', 'RÉSUMÉ', 'CONTACT'],
      subtitle: 'Developer & data analyst', signature: 'Web / Data / Interaction', navigation: 'Navigation',
      posterLine: 'Software · Data · Interaction', byline: 'Software / Data', inside: 'Inside this portfolio',
      note: 'Software, data, and the thinking behind the work.', availability: 'Open to internships and junior roles',
      email: 'Email', light: 'Switch to light mode', dark: 'Switch to dark mode', close: 'Close', menu: 'Menu', mainNav: 'Main navigation', language: 'Site language',
    },
    home: {
      title: 'Samuel Z. Tadesse — Software Developer & Data Analysis Student',
      description: 'Portfolio of Samuel Z. Tadesse, a software developer and data analysis student. Explore web applications, analytics projects, and ways to connect.',
      portfolio: 'Samuel Z. Tadesse / Digital portfolio', line: 'Software · Data · Interaction',
      role: 'Data analysis student & software developer', code: 'Code with', character: 'character.', data: 'Data with', direction: 'direction.',
      intro: 'I turn data into clear stories and build software people enjoy using.', explore: 'Explore selected work', projects: 'Projects', scroll: 'Scroll to discover',
      ticker: ['DATA, DECODED.', 'SOFTWARE, BUILT.', 'CURIOSITY, ALWAYS.'],
      animatedTools: 'Animated data tools',
    },
    about: {
      label: '01 / Behind the screen', heading: 'Curious by default.', emphasis: 'Building by choice.', photo: 'The developer outdoors',
      lead: 'I find the story in data and build software that brings it to life.',
      body: 'That curiosity takes me from Power BI dashboards to React apps and the occasional browser game. I’m happiest when the result is useful and a little fun to explore.',
      interests: 'Interests', tags: ['Find the pattern', 'Build the experience', 'Keep learning'], resume: 'Read my résumé',
    },
    work: {
      label: '02 / Selected work', heading: 'Ideas made', emphasis: 'real.', studies: 'Case studies',
      intro: 'A collection of work across web applications, interaction, and data storytelling.', tools: 'Tools used',
      explore: 'Explore case study', read: 'Read about', view: 'View', project: 'project',
    },
    skills: {
      label: '03 / Capabilities', heading: 'Built to keep', emphasis: 'learning.', intro: 'A practical toolkit for making interfaces feel clear and data feel useful.',
      groups: ['Frontend', 'Backend & tools', 'Data & analysis', 'Databases'], rfm: 'RFM analysis', modelling: 'Statistical modelling',
    },
    contact: {
      label: '04 / Get in touch', heading: 'Have something', emphasis: 'in mind?',
      intro: 'I’m open to curricular internships and junior roles in data, BI analytics, and software development. Reach me by email or connect on LinkedIn.',
      email: 'Email me', top: 'Back to top',
    },
    detail: {
      back: 'Back to work', caseStudy: 'Case study', screens: 'More project screens', project: 'The project', built: 'What I built',
      features: 'Key features', tools: 'Tools & technologies', more: 'More to explore', all: 'See all projects',
    },
    resume: {
      title: 'Résumé — Samuel Z. Tadesse', description: 'Education, skills, and selected projects of Samuel Z. Tadesse, data analysis student and software developer.',
      back: 'Back to home', label: 'Résumé / Samuel Z. Tadesse', heading: 'Data, software,', emphasis: 'and curiosity.',
      intro: 'Data Analysis student at the University of Messina, seeking a curricular internship or junior role in data, BI analytics, or software development.',
      download: 'Download CV (PDF, English)', profileLabel: '01 / Profile', profile: 'What I bring',
      profile1: 'I turn raw data into dashboards and customer insights with Python, SQL, and Power BI. My software background helps me build useful tools around the analysis, from React interfaces to full-stack applications.',
      profile2: 'Based in Messina, Italy. Open to curricular internships and junior roles on-site in Sicily or remotely in Italy or the EU.',
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
      home: 'Home', about: 'Chi sono', work: 'Progetti selezionati', skills: 'Competenze', resume: 'Curriculum', contact: 'Contatti',
      explore: 'ESPLORA', displays: ['HOME', 'CHI SONO', 'PROGETTI', 'COMPETENZE', 'CV', 'CONTATTI'],
      subtitle: 'Sviluppatore e analista dati', signature: 'Web / Dati / Interazione', navigation: 'Navigazione',
      posterLine: 'Software · Dati · Interazione', byline: 'Software / Dati', inside: 'In questo portfolio',
      note: 'Software, dati e le idee alla base dei progetti.', availability: 'Disponibile per tirocini e ruoli junior',
      email: 'Email', light: 'Passa alla modalità chiara', dark: 'Passa alla modalità scura', close: 'Chiudi', menu: 'Menu', mainNav: 'Navigazione principale', language: 'Lingua del sito',
    },
    home: {
      title: 'Samuel Z. Tadesse — Sviluppatore software e studente di Analisi dei dati',
      description: 'Portfolio di Samuel Z. Tadesse, sviluppatore software e studente di Analisi dei dati. Scopri applicazioni web, progetti di analisi e come contattarmi.',
      portfolio: 'Samuel Z. Tadesse / Portfolio digitale', line: 'Software · Dati · Interazione',
      role: 'Studente di Analisi dei dati e sviluppatore software', code: 'Codice con', character: 'carattere.', data: 'Dati con', direction: 'direzione.',
      intro: 'Trasformo i dati in storie chiare e sviluppo software piacevole da usare.', explore: 'Scopri i progetti', projects: 'Progetti', scroll: 'Scorri per scoprire',
      ticker: ['DATI, DECIFRATI.', 'SOFTWARE, REALIZZATO.', 'CURIOSITÀ, SEMPRE.'],
      animatedTools: 'Strumenti di analisi dei dati animati',
    },
    about: {
      label: '01 / Dietro lo schermo', heading: 'Curioso per natura.', emphasis: 'Creo per scelta.', photo: 'Lo sviluppatore all’aperto',
      lead: 'Trovo la storia nei dati e creo software che la porta alla luce.',
      body: 'Questa curiosità mi porta dai dashboard di Power BI alle app React, fino a qualche gioco per browser. Mi piace soprattutto creare qualcosa di utile e piacevole da esplorare.',
      interests: 'Interessi', tags: ['Trova lo schema', 'Crea l’esperienza', 'Continua a imparare'], resume: 'Leggi il mio curriculum',
    },
    work: {
      label: '02 / Progetti selezionati', heading: 'Idee diventate', emphasis: 'realtà.', studies: 'Casi studio',
      intro: 'Una raccolta di applicazioni web, progetti interattivi e analisi dei dati.', tools: 'Strumenti utilizzati',
      explore: 'Scopri il progetto', read: 'Leggi di', view: 'Visualizza', project: 'progetto',
    },
    skills: {
      label: '03 / Competenze', heading: 'Sempre pronto a', emphasis: 'imparare.', intro: 'Strumenti pratici per creare interfacce chiare e rendere utili i dati.',
      groups: ['Frontend', 'Backend e strumenti', 'Dati e analisi', 'Database'], rfm: 'Analisi RFM', modelling: 'Modellazione statistica',
    },
    contact: {
      label: '04 / Contattami', heading: 'Hai un’idea', emphasis: 'in mente?',
      intro: 'Sono disponibile per tirocini curriculari e ruoli junior nell’analisi dei dati, nella BI e nello sviluppo software. Scrivimi via email o contattami su LinkedIn.',
      email: 'Scrivimi', top: 'Torna su',
    },
    detail: {
      back: 'Torna ai progetti', caseStudy: 'Caso studio', screens: 'Altre schermate del progetto', project: 'Il progetto', built: 'Cosa ho realizzato',
      features: 'Funzionalità principali', tools: 'Strumenti e tecnologie', more: 'Altri progetti', all: 'Vedi tutti i progetti',
    },
    resume: {
      title: 'Curriculum — Samuel Z. Tadesse', description: 'Formazione, competenze e progetti selezionati di Samuel Z. Tadesse, studente di Analisi dei dati e sviluppatore software.',
      back: 'Torna alla home', label: 'Curriculum / Samuel Z. Tadesse', heading: 'Dati, software', emphasis: 'e curiosità.',
      intro: 'Studente di Analisi dei dati all’Università di Messina, cerco un tirocinio curriculare o un ruolo junior nell’analisi dei dati, nella BI o nello sviluppo software.',
      download: 'Scarica il CV (PDF, in inglese)', profileLabel: '01 / Profilo', profile: 'Cosa posso offrire',
      profile1: 'Trasformo dati grezzi in dashboard e informazioni sui clienti con Python, SQL e Power BI. La mia esperienza nello sviluppo software mi aiuta a creare strumenti utili intorno all’analisi, dalle interfacce React alle applicazioni full stack.',
      profile2: 'Vivo a Messina. Sono disponibile per tirocini curriculari e ruoli junior in presenza in Sicilia o da remoto in Italia o nell’UE.',
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

export function useMessages() {
  const { locale } = useRouter()
  return messages[locale] || messages.en
}
