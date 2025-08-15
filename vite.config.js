import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '#services': path.resolve(__dirname, './src/services'),
  base: "/fe-diplom_2/",
    },
  },
  server: {
    open: true,
  },
  build: {
    chunkSizeWarningLimit: 1000, 
  },
});