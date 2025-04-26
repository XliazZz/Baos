import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        safelist: ['bg-indigo-50', 'bg-white', 'bg-gray-50', 'bg-gray-950', 'dark:bg-gray-950', 'dark:bg-indigo-950/70', 'dark:bg-slate-900'],
      },
      darkMode: 'class',
    }),
  ],
  base: '/wow-bao/',
})