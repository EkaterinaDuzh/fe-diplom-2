import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/fe-diplom_2/',
  server: {
    port: 3000,
    host: 'localhost'
  },
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['antd', 'air-datepicker', 'swiper'],
          utils: ['validator', 'lodash']
        }
      }
    }
  }
});