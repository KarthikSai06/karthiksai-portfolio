import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  define: { 'process.env.NODE_ENV': JSON.stringify('production') },
  plugins: [react(), {
    name: 'portfolio-dev-entry',
    apply: 'serve',
    transformIndexHtml(html) {
      return html.replace('<script defer="defer" src="/static/portfolio/portfolio.js"></script>', '<script type="module" src="/src/main.jsx"></script>');
    }
  }],
  publicDir: false,
  build: {
    outDir: 'static/portfolio',
    lib: { entry: 'src/main.jsx', name: 'KarthikPortfolio', formats: ['iife'], fileName: () => 'portfolio.js' },
    rollupOptions: { output: { inlineDynamicImports: true } }
  }
});
