import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/cicdproject/',
  plugins: [react()],
});
c. Update package.json
"homepage": "https://klu2300031372.github.io/cicdproject/",
"scripts": {
  "lint": "eslint .",
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
