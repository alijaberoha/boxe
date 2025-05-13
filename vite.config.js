import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ IMPORTANT pour GitHub Pages :
export default defineConfig({
  base: '/boxe/', // ← ajoute cette ligne
  plugins: [react()],
})
