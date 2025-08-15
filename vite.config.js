import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: 'localhost',
    base: '/fe-diplom_2/',
  },
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1000,
  }
});