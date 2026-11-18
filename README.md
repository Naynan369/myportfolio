# Samuel Z. Tadesse portfolio

A personal portfolio built with Next.js and React. It includes a homepage, a résumé, and four project case studies.

## Run locally

Use Node.js 20 for this version of Next.js. A `.nvmrc` file is included for `nvm` users.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). For a production check, run `npm run build` and then `npm start`.

## Structure

- `pages/` contains the homepage, résumé, and project routes.
- `components/` contains the shared navigation, sections, project cards, and case study layout.
- `lib/projects.js` contains project text, links, and image references.
- `lib/i18n.js` and `lib/projectTranslations.js` contain English and Italian site text.
- `styles/globals.css` contains the visual design and responsive layout.
- `public/assets/` contains the portrait and screenshots used by the site.

Project details can be updated in `lib/projects.js`. The site links to Samuel’s LinkedIn and GitHub profiles for contact; there is no contact form or database configuration.

The site offers English and Italian routes. Use the EN/IT switch in the header to change language while staying on the current page. English is the default route, and Italian pages use the `/it` prefix. The downloadable CV is currently in English. The site also offers light and dark modes and remembers a manual theme selection in local storage. The hero includes an interactive Three.js signal terrain made from animated data columns, light trails, and connected points. It pauses when out of view and honors reduced-motion preferences.

The background photographs are real images from Unsplash, stored locally in `public/assets/backgrounds/`:

- Hero code photograph: [Fili Santillán](https://unsplash.com/photos/a-computer-screen-with-a-bunch-of-code-on-it-1HCb2gPk3ik).
- Analytics dashboard photograph: [Stephen Dawson](https://unsplash.com/photos/turned-on-monitoring-screen-qwtCeJ5cLYs).
