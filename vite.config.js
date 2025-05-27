import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    watch: {
      usePolling: true,
    },
    port: 5173, // optional: explicitly set a port
    strictPort: true, // ensures Vite fails if port is in use
  },
  plugins: [react()],
})
