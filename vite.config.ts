import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: ['chrome64', 'firefox69'],
  },
  plugins: [react()],
})
