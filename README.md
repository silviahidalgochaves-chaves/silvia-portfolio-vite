[README.md](https://github.com/user-attachments/files/22414868/README.md)
# Silvia Chaves — Marketing Portfolio (Vite + React + Tailwind)

A production-ready personal portfolio built with **Vite + React + TailwindCSS**.
Includes campaigns/case studies, experience timeline, skills, and contact.

## Quick Start
```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for Production
```bash
npm run build
npm run preview
```

## Customize
- Edit the `DATA` object in `src/App.jsx` (name, links, experience, case studies, etc.).
- Replace `resumeUrl`, `headshot`, and case-study `link`s with your own.
- All styling uses Tailwind utility classes; tweak as desired.

## Deploy
- **Vercel**: Import the repo, set Framework = Vite, build command `npm run build`, output `dist`.
- **Netlify**: Build `npm run build`, publish directory `dist`.
- **GitHub Pages**: `npm run build` then push the `dist/` to `gh-pages` branch using a script or action.

## Tech
- React 18
- Vite
- TailwindCSS
- lucide-react icons
