import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use repo base only in production (GitHub Pages); dev uses '/' to avoid 404s.
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/DhruveshAkre/' : '/',
}))