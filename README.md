# Portfolio (Vite + React)

A simple, professional portfolio scaffold using Vite + React + React Router.

## Scripts
- `npm run dev` — start dev server
- `npm run build` — build for production
- `npm run preview` — preview the build locally
- `npm run deploy` — deploy `dist/` to `gh-pages` branch

## GitHub Pages Setup
1. Create a GitHub repo named `PORTPOLIO` (or your choice).
2. Update `vite.config.js` `base` to `/<your-repo-name>/`.
3. Push your code to GitHub.
4. Run `npm run deploy` to publish.
5. In GitHub, enable Pages for the `gh-pages` branch.

## Folder Structure
```
src/
  components/
  pages/
  hooks/
  styles/
  utils/
  App.jsx
  main.jsx
index.html
vite.config.js
package.json
```

## Customize
- Edit `src/pages/*` with your content.
- Update links in `src/components/Header.jsx`.
- Add styles to `src/styles/global.css`.
