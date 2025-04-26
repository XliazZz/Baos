import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss({
      config: {
        safelist: ['bg-indigo-50', 'bg-white', 'bg-gray-50', 'bg-gray-950', 'dark:bg-gray-950', 'dark:bg-indigo-950/70', 'dark:bg-slate-900'],
      },
      darkMode: 'class',
    }),
  ],
})