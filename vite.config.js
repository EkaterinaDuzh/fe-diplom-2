import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '#services': path.resolve(__dirname, './src/services'),
      '#context': path.resolve(__dirname, './src/context')
    }
  },
  server: {
    port: 3000,
    host: 'localhost'
  },
  build: {
    outDir: 'dist'
  }
});