import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
//vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),
  ],
  base: '/portfolio/', // Set the base path for your portfolio
})
