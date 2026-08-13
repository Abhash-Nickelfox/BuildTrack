import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5176,
    // Allow access through ngrok tunnels (e.g. for sharing a local preview).
    // Leading dot matches the domain and any subdomain, so this keeps
    // working even if ngrok assigns a different random subdomain later.
    allowedHosts: ['.ngrok-free.dev', '.ngrok-free.app', '.ngrok.io'],
  },
  preview: {
    port: 5176,
  },
})
