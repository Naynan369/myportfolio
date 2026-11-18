export const italianProjects = {
  ecommerce: {
    title: 'Analisi e-commerce', category: 'Analisi dei dati', imageAlt: 'Dashboard Power BI con grafici sulle vendite e sui clienti',
    summary: 'L’analisi RFM di due anni di dati di vendita ha individuato nei clienti persi il segmento più grande, pari al 32,31%.',
    description: [
      'Ho pulito due anni di transazioni, gestendo valori mancanti, resi e duplicati prima di calcolare gli indicatori di vendita.',
      'Ho creato un modello RFM per distinguere clienti fedeli, a rischio e di alto valore. Una dashboard interattiva in Power BI riunisce ricavi, ordini, prodotti, Paesi e segmenti di clientela.',
    ],
    imageCaption: 'Dashboard Power BI del progetto di analisi delle vendite.',
    proof: {
      eyebrow: 'Risultato della dashboard', title: 'I clienti persi erano il segmento RFM più grande.',
      body: 'Dei 5.939 clienti mostrati nella dashboard, il 32,31% è stato classificato come cliente perso, rispetto al 21,91% di clienti migliori. La segmentazione individua un gruppo concreto su cui approfondire le strategie di fidelizzazione.',
    },
    tools: ['Python', 'Pandas', 'Power BI', 'Excel', 'Analisi RFM'],
    links: [{ label: 'Vedi la dashboard completa' }, { label: 'Vedi il codice' }],
  },
  'habesha-brokers': {
    category: 'Piattaforma di annunci', imageAlt: 'Home page di Habesha Brokers con ricerca annunci e un edificio tridimensionale',
    summary: 'Un marketplace di annunci locali in Etiopia, con account per i venditori e revisione prima della pubblicazione.',
    description: [
      'Habesha Brokers riunisce diverse categorie di annunci locali in un marketplace consultabile. I visitatori possono confrontare i dettagli, salvare le opzioni interessanti e contattare direttamente i venditori.',
      'Ho sviluppato i flussi di registrazione e pubblicazione intorno a un processo di revisione: gli annunci inviati vengono controllati prima di apparire pubblicamente. L’interfaccia include uno showroom tridimensionale e pagine responsive per la ricerca.',
      'Il progetto è in sviluppo. Il checkout è configurato nella modalità di test di Stripe.',
    ],
    imageCaption: 'Home page del marketplace dalla versione locale funzionante.',
    gallery: [{ alt: 'Pagina Esplora di Habesha Brokers con categorie per immobili, veicoli, attività e servizi', caption: 'Esplora: quattro categorie di annunci con ricerca e filtri.' }],
    proof: {
      eyebrow: 'Flusso implementato', title: 'Gli annunci vengono esaminati prima della pubblicazione.',
      body: 'I venditori verificati possono inviare annunci; quelli nuovi o modificati entrano in una coda, dove un amministratore può approvarli o rifiutarli. I pagamenti restano in modalità di test.',
    },
    accessNote: 'In sviluppo · il repository del codice non è accessibile pubblicamente. Le schermate provengono dalla versione locale funzionante.',
    highlights: ['Ricerca e filtri per gli annunci locali', 'Annunci salvati e strumenti per l’account', 'Invio e revisione degli annunci', 'Showroom tridimensionale'],
    links: [{ label: 'Demo online' }, { label: 'Vedi il codice' }],
  },
  evently: {
    category: 'Piattaforma per eventi', imageAlt: 'Home page di Evently con eventi e visualizzatore musicale animato',
    summary: 'Scoperta di eventi, biglietti dimostrativi e strumenti per gli organizzatori in un’unica applicazione funzionante.',
    description: [
      'Evently aiuta a scoprire eventi musicali, culturali, gastronomici e della comunità, e offre agli organizzatori uno spazio per pubblicare eventi e gestire gli ospiti.',
      'Ho sviluppato i flussi di scoperta e suggerimento, gli eventi salvati, le prenotazioni gratuite, i biglietti QR e gli strumenti per gli organizzatori. La home page abbina fotografie di eventi a un visualizzatore musicale procedurale in Three.js che rispetta le preferenze di movimento ridotto.',
      'Il progetto include flussi di checkout e rimborso con Stripe Connect. Gli eventi inseriti sono esempi; per usare pagamenti reali occorrono ancora la configurazione dell’account esercente e ulteriori test.',
    ],
    imageCaption: 'Home page aggiornata di Evently dalla demo online.',
    gallery: [
      { alt: 'Pagina aggiornata di Evently con filtri per zona e categoria sopra gli eventi dimostrativi', caption: 'Scoperta: i filtri portano a eventi di esempio chiaramente indicati.' },
      { alt: 'Pagina aggiornata di un evento di esempio con dettagli e scelta dei biglietti di prova', caption: 'Dettagli evento: i biglietti di esempio sono distinti dai pagamenti reali.' },
    ],
    proof: {
      eyebrow: 'Flusso implementato', title: 'Dalla ricerca a una prenotazione dimostrativa trasparente.',
      body: 'I visitatori possono filtrare gli eventi di esempio per città, categoria, data e prezzo, poi consultare i biglietti disponibili. Le prenotazioni dimostrative sono indicate chiaramente e non comportano addebiti.',
    },
    accessNote: 'In sviluppo · il repository del codice non è accessibile pubblicamente. L’immagine della home page proviene dalla demo online; le altre schermate dalla versione locale funzionante.',
    highlights: ['Ricerca eventi e suggerimenti', 'Pubblicazione e liste ospiti per gli organizzatori', 'Prenotazioni e biglietti QR', 'Visualizzatore musicale Three.js'],
    links: [{ label: 'Demo online' }, { label: 'Vedi il codice' }],
  },
  'system-security': {
    category: 'Sistema di autenticazione', imageAlt: 'Schermata di accesso del progetto di sicurezza con modulo password e pannello introduttivo blu scuro',
    summary: 'Un prototipo di accesso in PHP che combina password, codici monouso via Telegram e sessioni protette.',
    description: [
      'Ho creato un accesso in due passaggi: l’utente inserisce la password e poi verifica un codice monouso inviato tramite un bot Telegram collegato. Dopo la verifica, un token firmato viene salvato nella sessione del server.',
      'L’implementazione comprende controlli CSRF, limiti ai tentativi per sessione, codici monouso validi cinque minuti e rotazione della sessione dopo una verifica riuscita. L’interfaccia mostrata proviene dalla versione locale in esecuzione.',
    ],
    imageCaption: 'Schermata di accesso originale dell’applicazione PHP locale.',
    proof: {
      eyebrow: 'Dettaglio implementativo', title: 'Un codice di verifica può essere usato una sola volta.',
      body: 'Il controllo OTP segna come usato un codice non scaduto nella stessa operazione di database che lo verifica. Una verifica riuscita ruota la sessione e genera il token di sessione firmato.',
    },
    accessNote: 'Prototipo · il repository del codice non è accessibile pubblicamente. Servono ancora test completi con un database PostgreSQL e un bot Telegram attivi.',
    highlights: ['Accesso con password e codice Telegram', 'Codici OTP monouso validi cinque minuti', 'Protezioni CSRF e della sessione', 'Limiti ai tentativi per sessione'],
    links: [{ label: 'Richiedi una dimostrazione' }],
  },
  netflix: {
    title: 'MovieSphere', category: 'Applicazione web', imageAlt: 'Home page di MovieSphere con film in evidenza e raccolte da esplorare',
    summary: 'Un’app per scoprire film con ricerca, dettagli, trailer e preferiti salvati.',
    description: ['Un progetto React per scoprire film tramite titoli in evidenza, ricerca, categorie e pagine di dettaglio.', 'L’interfaccia usa Tailwind CSS, mentre Firebase supporta gli account e i preferiti salvati.'],
    imageCaption: 'Home page di MovieSphere dalla versione locale aggiornata.',
    gallery: [
      { alt: 'Risultati di ricerca di MovieSphere per Dune con filtri per genere e ordinamento', caption: 'Ricerca: trova film e filtra per anno, genere o ordinamento.' },
      { alt: 'Pagina di dettaglio di MovieSphere con trama, trailer e cast', caption: 'Dettagli: trama, trailer, informazioni sul film e cast in un’unica pagina.' },
    ],
    links: [{ label: 'Demo online' }, { label: 'Vedi il codice' }],
  },
  paypal: {
    title: 'App di pagamento', category: 'Applicazione web', imageAlt: 'Interfaccia dell’app di pagamento',
    summary: 'Un’interfaccia di pagamento responsive costruita intorno a un semplice flusso di checkout.',
    description: ['Un prototipo di app di pagamento pensato per un percorso chiaro dall’accesso al checkout.', 'Il progetto esplora il layout responsive e l’integrazione PayPal in un’applicazione React.'],
    tools: ['React', 'PayPal API', 'CSS', 'Design responsive'], links: [{ label: 'Demo online' }],
  },
  game: {
    title: 'Tris', category: 'Interattivo', imageAlt: 'Gioco del tris nel browser',
    summary: 'Un gioco interattivo per browser con modalità contro un’altra persona o il computer.',
    description: ['Un piccolo gioco React creato per esplorare lo stato interattivo, il feedback per i giocatori e i controlli accessibili.', 'Si può giocare contro un’altra persona o il computer in un’interfaccia responsive.'],
    links: [{ label: 'Demo online' }, { label: 'Vedi il codice' }],
  },
}
