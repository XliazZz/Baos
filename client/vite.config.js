import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss({
      config: {
        safelist: ['bg-indigo-200', 'bg-white', 'bg-gray-50'],
      },
    }),
  ],
})