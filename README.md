# Samuel Z. Tadesse portfolio

A bilingual portfolio built with Next.js 16 and React 19. It includes seven project case studies and a résumé with a PDF download.

## Run locally

Use Node.js 24.22.0. If you use `nvm`, run `nvm use` before installing dependencies.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Run `npm run lint` to check the code. For a production check, run `npm run build` and then `npm start`.

## Structure

- `pages/` contains the homepage, résumé, and project routes.
- `components/` contains the shared navigation, sections, project cards, and case study layout.
- `lib/projects.js` contains project text, links, and image references.
- `lib/i18n.js` and `lib/projectTranslations.js` contain the English source and the Italian fallback text.
- `styles/globals.css` contains the visual design and responsive layout.
- `public/assets/` contains the portrait and screenshots used by the site.

Project details can be updated in `lib/projects.js`. The site links to Samuel’s LinkedIn and GitHub profiles for contact; there is no contact form or database configuration.

The downloadable CV is served from `public/Samuel_Tadesse_CV.pdf`. After deployment, check that the public download matches that file.

The E-commerce Analytics case study includes static charts from the cleaned exports produced by [the analysis notebook](https://github.com/Naynan369/Ecommerce/blob/main/E-commerce.ipynb). The monthly net revenue is the sum of quantity multiplied by unit price, including cancellations. The product ranking uses the same calculation and excludes postage. December 2011 is a partial month. The source dataset is [Online Retail II](https://archive.ics.uci.edu/dataset/502/online+retail+ii) by Daqing Chen (UCI Machine Learning Repository, CC BY 4.0).

The site offers English and Italian routes. Use the EN/IT switch in the header to change language while staying on the current page. English is the default route, and Italian pages use the `/it` prefix. The downloadable CV is currently in English. The site also offers light and dark modes and remembers a manual theme selection in local storage. The hero includes animated tool labels positioned along Three.js curves. It pauses when out of view and honors reduced-motion preferences.

## Google Translate setup

Italian pages use the official [Cloud Translation - Basic API](https://docs.cloud.google.com/translate/docs/overview) when `GOOGLE_TRANSLATE_API_KEY` is set in the server environment. The key is never exposed to the browser. Create a Google Cloud project, [enable billing and the Cloud Translation API](https://docs.cloud.google.com/translate/docs/setup), then create an API key restricted to the Cloud Translation API. Add the key as `GOOGLE_TRANSLATE_API_KEY` in your hosting environment and redeploy. For local development, place it in an ignored `.env.local` file.

The server translates the English page and project text, caches the result, and serves it on the Italian routes. Google requires the visible attribution and machine-translation markup included on those pages. If the key is missing or Google cannot respond, the existing Italian text remains available. An English CV and the static Italian analytics chart are served as existing assets and are not sent to the Translation API. Google Cloud requires billing even when usage falls within its [monthly free allowance](https://cloud.google.com/products/translate/pricing). Set a usage quota if you want to cap costs.

The background photographs are real images from Unsplash, stored locally in `public/assets/backgrounds/`:

- Hero code photograph: [Fili Santillán](https://unsplash.com/photos/a-computer-screen-with-a-bunch-of-code-on-it-1HCb2gPk3ik).
- Analytics dashboard photograph: [Stephen Dawson](https://unsplash.com/photos/turned-on-monitoring-screen-qwtCeJ5cLYs).

Search metadata uses the public origin in `lib/site.js`. Update it when moving the site to another domain. The site exposes a sitemap at `/sitemap.xml` with all English and Italian pages and a crawler policy at `/robots.txt`.
