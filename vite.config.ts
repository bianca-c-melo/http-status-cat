import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { inject } from '@vercel/analytics';
 
inject();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
