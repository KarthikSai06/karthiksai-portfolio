# Kammala Karthik Sai · Software Engineer

React portfolio with an animated introduction, a Three.js project gallery, case studies, technical skills, education and contact information.

## Local development

Install the locked dependencies with `npm ci`, then run `npm run dev`. Project descriptions and GitHub links live in `src/portfolio.js`.

## Production

Run `npm run build`. Vite compiles the React application, and `assemble.mjs` copies its required assets into `dist`. Serve that directory with an index fallback for project URLs. The included Vercel configuration provides that fallback.
