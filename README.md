# Personal Website

Live at https://terence-yin.web.app/

## Develop

```bash
npm install
npm start        # dev server at http://localhost:3000
npm test         # jest
npm run build    # production build in ./build
```

## Editing content

All copy lives in `src/data/`:

- `profile.js` — name, headline, intro, links, `openToWork` toggle
- `experience.js` — jobs and education
- `skills.js` — skill groups
- `projects.js` — projects, screenshots, links
- `lumen5.js` — everything on the `/lumen5` case-study page (stats, features, timeline, quotes)

## Pages

- `/` — home (hero, experience, skills, projects, contact)
- `/lumen5` — "Sixteen months at Lumen5" case study, linked from the nav, the hero badge and the Experience card

Routing is client-side (React Router); `firebase.json` already rewrites every path to `index.html`.

Styles are plain CSS with design tokens in `src/index.css`; each component has a matching file in `src/styles/`.
