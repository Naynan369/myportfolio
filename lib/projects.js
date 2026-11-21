import { italianProjects } from './projectTranslations'

export const featuredProjectSlugs = ['evently', 'habesha-brokers', 'ecommerce']

export const projects = [
  {
    slug: 'ecommerce', route: '/Ecommerce', title: 'E-commerce Analytics', category: 'Data analytics',
    image: '/assets/projects/retail-analysis-en.png', imageFit: 'contain',
    imageAlt: 'Net revenue by calendar month and the five products with the highest net revenue, excluding postage.',
    summary: 'Analyzed 5,939 retail customers and found that 32.31% fell into the Lost Customers segment.',
    description: [
      'I used Online Retail II to explore which customer groups merited a closer look for retention. I removed duplicate lines and invalid prices. I kept cancellations in net revenue and excluded postage from the product ranking.',
      'I grouped transactions by customer and segmented customers by how recently they bought, how often they bought, and how much they spent. I used the cleaned data to build a Power BI dashboard and recalculated the charts on this page from the cleaned exports.',
    ],
    imageCaption: 'Charts from the cleaned Online Retail II exports. December 2011 includes data through the 9th. Dataset by Daqing Chen, UCI Machine Learning Repository, CC BY 4.0.',
    proof: {
      eyebrow: 'Analysis finding',
      title: 'Lost Customers was the largest segment.',
      body: 'The cleaned data contained 5,939 distinct customer IDs. The model classified 1,919 as Lost Customers (32.31%) and 1,301 as Champions (21.91%). The largest group is a starting point for investigating retention.',
    },
    walkthrough: 'Open E-commerce.ipynb, place the source workbook alongside it, and run the pandas import and analysis cells. The optional PostgreSQL examples require a local database.',
    tools: ['Python', 'Pandas', 'Power BI', 'Excel', 'RFM analysis'],
    links: [
      { label: 'View notebook', href: 'https://github.com/Naynan369/Ecommerce/blob/main/E-commerce.ipynb' },
      { label: 'Open charts', href: '/assets/projects/retail-analysis-en.png' },
      { label: 'Source dataset', href: 'https://archive.ics.uci.edu/dataset/502/online+retail+ii' },
    ],
  },
  {
    slug: 'habesha-brokers', route: '/habesha-brokers', title: 'Habesha Brokers', category: 'Marketplace platform',
    image: '/assets/projects/habesha-brokers.jpg', imageAlt: 'Habesha Brokers marketplace homepage with listing search and a three-dimensional building',
    summary: 'A marketplace for local listings across Ethiopia, with seller accounts and review before publication.',
    description: [
      'Habesha Brokers brings several kinds of local listings into one searchable marketplace. Visitors can compare listing details, save interesting options, and contact sellers directly.',
      'I developed account and listing flows around a review process, so submitted listings can be checked before they appear publicly. The interface includes a three-dimensional showroom and responsive discovery pages.',
      'This is a working project in development. Checkout is configured for Stripe test mode.',
    ],
    imageCaption: 'Marketplace homepage from the working local build.',
    gallery: [{ image: '/assets/projects/habesha-explore.png', alt: 'Habesha Brokers Explore page showing property, vehicle, business space and service categories', caption: 'Explore page: four listing categories and a search and filter flow.' }],
    proof: {
      eyebrow: 'Implemented workflow',
      title: 'Listings pass through review before publication.',
      body: 'Verified sellers can submit listings; new and edited listings enter a pending queue, where an administrator can approve or decline them. Payment remains in test mode.',
    },
    walkthrough: 'Open the demo and browse Explore to try search and filters. The case study below explains how submitted listings reach the review queue.',
    accessNote: 'The screenshots are from the local build. Checkout uses Stripe test mode.',
    highlights: ['Search and filter local listings', 'Saved listings and account tools', 'Listing submission and review workflow', 'Three-dimensional showcase'],
    tools: ['Next.js', 'React', 'PostgreSQL', 'Prisma', 'Three.js', 'Stripe test mode'],
    links: [{ label: 'Live demo', href: 'https://habesha-broker.vercel.app/' }, { label: 'View code', href: 'https://github.com/Naynan369/habesha_broker' }],
  },
  {
    slug: 'evently', route: '/evently', title: 'Evently', category: 'Event platform',
    image: '/assets/projects/evently-home-live.jpg', imageAlt: 'Current Evently homepage with event photography and an interactive music visualizer',
    summary: 'Event discovery, sample ticketing, and organizer tools in one working application.',
    description: [
      'Evently helps people discover music, culture, food, and community events while giving organizers a place to publish events and manage guests.',
      'I built discovery and recommendation flows, saved events, free reservations, QR tickets, and organizer tools. The homepage pairs event photography with a procedural Three.js music visualizer that supports reduced motion.',
      'The project includes Stripe Connect checkout and refund flows. Its supplied listings are examples; live payment use still requires merchant account configuration and testing.',
    ],
    imageCaption: 'Current Evently homepage from the live demo.',
    gallery: [
      { image: '/assets/projects/evently-discovery.jpg', alt: 'Current Evently discovery page with area and category filters above sample event cards', caption: 'Discovery: filters lead into clearly marked sample events.' },
      { image: '/assets/projects/evently-event-detail.jpg', alt: 'Current Evently sample event page with event details and practice ticket choices', caption: 'Event detail: sample ticket choices are separated from real payment.' },
    ],
    proof: {
      eyebrow: 'Implemented workflow',
      title: 'Discovery leads into a transparent sample booking.',
      body: 'Visitors can filter example events by city, category, date and price, then inspect ticket choices on an event page. Sample bookings are clearly marked and do not charge money.',
    },
    walkthrough: 'Open the demo, browse events by city or category, and open a sample listing to see the ticket choices.',
    accessNote: 'The homepage image is from the live demo. The gallery shows the local build.',
    highlights: ['Event search and recommendations', 'Organizer publishing and guest lists', 'Reservations and QR tickets', 'Three.js music visualizer'],
    tools: ['Next.js', 'React', 'PostgreSQL', 'Stripe Connect', 'Three.js'],
    links: [{ label: 'Live demo', href: 'https://evently-beige-omega.vercel.app/' }, { label: 'View code', href: 'https://github.com/Naynan369/evently' }],
  },
  {
    slug: 'food-delivery', route: '/food-delivery', title: 'Pantry', category: 'Food delivery prototype',
    image: '/assets/projects/pantry-replacements.png', imageFit: 'contain',
    imageAlt: 'Pantry replacement finder showing shopper preferences and ranked oat drink alternatives',
    summary: 'A grocery replacement app that checks shopper requirements, explains alternatives, and leaves the final choice to the shopper.',
    description: [
      'I built a React and TypeScript interface for finding grocery substitutes, backed by a Python FastAPI recommendation service. The service filters products by type and shopper requirements before ranking eligible alternatives from a historical product catalog.',
      'Shoppers can compare product details and match explanations, choose a replacement, adjust quantities, and save their list. SQLite stores the choices, and open tabs stay in sync.',
      'A separate local shopping demo uses sample prices and stock, test checkout, and simulated order progress. It is a prototype and does not connect to a live store or delivery service.',
    ],
    imageCaption: 'Replacement finder from the running local Pantry application.',
    gallery: [
      { image: '/assets/projects/pantry-review.png', alt: 'Pantry review page showing a selected replacement, quantity controls, and the saved list', caption: 'Review: the shopper chooses a replacement and checks it before saving.' },
      { image: '/assets/projects/pantry-method.png', alt: 'Pantry explanation page describing requirement checks and recommendation scoring', caption: 'How it works: compatibility checks come before similarity scoring.' },
    ],
    proof: {
      eyebrow: 'Recommendation design',
      title: 'Requirements are checked before ranking.',
      body: 'The engine excludes incompatible products and checks requested labels and size constraints before scoring candidates. It explains each match, can return no suggestion, and never selects the top result automatically.',
    },
    accessNote: 'Local prototype using a historical product catalog. Current store stock and prices are not connected. The source repository is private.',
    highlights: ['Requirement checks before ranking', 'Explained alternatives and shopper choice', 'Persistent replacement list', 'Separate test checkout and order demo'],
    tools: ['React', 'TypeScript', 'FastAPI', 'Python', 'SQLite', 'TF-IDF'],
    links: [{ label: 'Request a walkthrough', href: 'mailto:samuel.zewge@icloud.com?subject=Pantry%20project%20walkthrough' }],
  },
  {
    slug: 'system-security', route: '/system-security', title: 'Telegram MFA', category: 'Authentication system',
    image: '/assets/projects/system-security-login.jpg', imageAlt: 'Security project sign-in screen with a password form and navy introduction panel',
    summary: 'A PHP sign-in prototype combining passwords, Telegram one-time codes, and guarded sessions.',
    description: [
      'I built a two-step sign-in flow: users enter their password, then verify a one-time code delivered through a linked Telegram bot. A signed token is stored in the server session after verification.',
      'The implementation includes CSRF checks, session-level attempt limits, five-minute single-use codes, and session rotation after successful verification. The interface shown here is from the running local build.',
    ],
    imageCaption: 'Original sign-in screen captured from the local PHP application.',
    proof: {
      eyebrow: 'Implementation detail',
      title: 'A verification code can be used only once.',
      body: 'The OTP check marks an unexpired code as used in the same database operation that verifies it. A successful check rotates the session and issues the signed session token.',
    },
    accessNote: 'Prototype · source repository is not publicly accessible. End-to-end testing with a live PostgreSQL database and Telegram bot is still needed.',
    highlights: ['Password and Telegram code flow', 'Five-minute single-use OTPs', 'CSRF and session safeguards', 'Session-level attempt limits'],
    tools: ['PHP', 'PostgreSQL', 'Telegram Bot API', 'JWT', 'Docker'],
    links: [{ label: 'Request a walkthrough', href: 'mailto:samuel.zewge@icloud.com?subject=Telegram%20MFA%20walkthrough' }],
  },
  {
    slug: 'netflix', route: '/Netflix', title: 'MovieSphere', category: 'Web application',
    image: '/assets/projects/moviesphere-home.jpg', imageAlt: 'MovieSphere homepage with a featured film and browsing rows',
    summary: 'A movie discovery app with search, film details, trailers, and saved favorites.',
    description: ['A React project for discovering movies through featured releases, search, categories, and detailed film pages.', 'The interface uses Tailwind CSS, while Firebase supports account features and saved favorites.'],
    imageCaption: 'MovieSphere homepage from the current local build.',
    gallery: [
      { image: '/assets/projects/moviesphere-search.jpg', alt: 'MovieSphere search results for Dune with sorting and genre filters', caption: 'Search results: find films and refine them by year, genre, or sort order.' },
      { image: '/assets/projects/moviesphere-detail.jpg', alt: 'MovieSphere film detail page with description, trailer button, and cast', caption: 'Film detail: synopsis, trailer, release details, and cast in one view.' },
    ],
    tools: ['React', 'Tailwind CSS', 'Firebase', 'JavaScript'],
    links: [{ label: 'Live demo', href: 'https://myproject-beta-cyan.vercel.app/' }, { label: 'View code', href: 'https://github.com/Naynan369/myproject' }],
  },
  {
    slug: 'paypal', route: '/Paypal', title: 'Payment App', category: 'Web application',
    image: '/assets/projects/Paypal.png', imageAlt: 'Payment application interface',
    summary: 'A responsive payment interface built around a simple checkout flow.',
    description: ['A payment app prototype for entering an amount, completing PayPal checkout, and receiving a payment status.', 'The project explores responsive layout and PayPal integration in a React application.'],
    tools: ['React', 'PayPal API', 'CSS', 'Responsive design'],
    links: [{ label: 'Live demo', href: 'https://test-app-t417.vercel.app/' }],
  },
  {
    slug: 'game', route: '/Game', title: 'Tic-Tac-Toe', category: 'Interactive',
    image: '/assets/projects/Game.png', imageAlt: 'Tic-Tac-Toe browser game',
    summary: 'An interactive browser game with player and computer modes.',
    description: ['A small React game built to explore turn-based state and player feedback.', 'Players can play against another person or the computer in a responsive browser interface.'],
    tools: ['React', 'JavaScript', 'CSS'],
    links: [{ label: 'Live demo', href: 'https://javascript-game-sigma.vercel.app' }, { label: 'View code', href: 'https://github.com/Naynan369/javascript-game-' }],
  },
]

export function getProjects(locale = 'en') {
  if (locale !== 'it') return projects

  return projects.map(project => {
    const translation = italianProjects[project.slug]
    return {
      ...project,
      ...translation,
      proof: translation.proof || project.proof,
      gallery: project.gallery?.map((item, index) => ({ ...item, ...translation.gallery?.[index] })),
      links: project.links.map((link, index) => ({ ...link, ...translation.links?.[index] })),
    }
  })
}
