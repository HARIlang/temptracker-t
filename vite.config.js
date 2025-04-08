import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '1a83-103-109-46-101.ngrok-free.app'  // 👈 your ngrok URL
    ]
  }
})
