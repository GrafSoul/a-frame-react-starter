import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    port: 3000,
  },
  build: {
    outDir: 'docs',
  },
});
