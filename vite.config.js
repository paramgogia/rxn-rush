import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// `base` controls the public path the app is served from.
//  - local dev / preview / root hosts (Netlify, Cloudflare Pages) → '/'
//  - GitHub Pages project site (https://user.github.io/REPO/) → the CI workflow
//    sets BASE_PATH=/REPO/ so the JS/CSS bundle resolves correctly under the subpath.
const base = process.env.BASE_PATH || '/'

export default defineConfig({
  base,
  plugins: [react()],
  server: { host: true, port: 5173 },
  preview: { host: true, port: 4173 },
})
