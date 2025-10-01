import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: ['local.todo.com'],
    origin: 'http://local.todo.com',
    hmr: {
      host: 'local.todo.com',
      clientPort: 80,   // use 443 and 'wss' if you later add TLS
      protocol: 'ws',
    },
  },
});
