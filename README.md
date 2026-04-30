# Kids Quiz

A small quiz app for children with player profiles, tag-based filtering, difficulty levels, timed questions, survival mode, and revision mode.

The current content is mostly in French and covers maths, orthographe, history, geography, languages, physics, astronomy, SVT, chemistry, technology, and EMC.

## Project Structure

```text
.
├── App.jsx
├── data/
│   ├── locales/
│   │   ├── en.js
│   │   ├── fr.js
│   │   └── index.js
│   ├── questions/
│   │   ├── index.js
│   │   ├── en/
│   │   │   └── README.md
│   │   └── fr/
│   │       ├── astronomy.js
│   │       ├── chemistry.js
│   │       ├── emc.js
│   │       ├── french.js
│   │       ├── geography.js
│   │       ├── history.js
│   │       ├── languages.js
│   │       ├── maths.js
│   │       ├── physics.js
│   │       ├── progression.js
│   │       ├── svt.js
│   │       ├── technology.js
│   │       └── topicExtensions.js
│   └── tags.js
└── README.md
```

## Data Files

- `data/questions/index.js` aggregates the active question pack and exposes `ALL_QUESTIONS` plus `filterQuestions`.
- `data/questions/fr/` contains the current French question modules, split by subject.
- `data/questions/en/` is reserved for a future English question pack with the same module shape.
- `data/tags.js` contains the available levels, subjects, themes, languages, and tag metadata.
- `data/locales/` contains starter UI translations for French and English.

## Internationalization

The UI translation structure is ready in `data/locales`, but the React UI still needs to be wired to `getUiText()` before users can switch the app interface language.

The question content is currently French. Future translated packs can mirror the `data/questions/fr/` structure.

## Notes

Player profiles and scores are stored locally in the browser with `localStorage`, so they are not committed to the repository.

## Run Locally

Install dependencies once:

```powershell
npm install
```

Start the development server:

```powershell
npm run dev
```

Vite will print a local URL, usually `http://localhost:5173`.

## Deploy for Other Devices

The cheapest path is a static web deployment. The app now includes a PWA manifest and a service worker, so after deployment it can be opened from any browser and added to the home screen on many phones/tablets.

Build the static files:

```powershell
npm run build
```

Deploy the generated `dist/` folder to one of these:

- Cloudflare Pages: good free option for static sites.
- Netlify: simple drag-and-drop or Git deployment.
- GitHub Pages: free if the project is hosted on GitHub.

For Vite, the build uses `base: "./"` so the app also works when hosted under a subpath, for example on GitHub Pages project URLs.

After deployment, open the public URL on another device. On mobile, use the browser menu and choose "Add to Home Screen" when available.
