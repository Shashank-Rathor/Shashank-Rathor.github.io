import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages project repo -> '/<repo-name>/'
// User site (<username>.github.io) -> '/'
export default defineConfig({
  base: '/',
  plugins: [react()],
});
