
import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4f8',
          100: '#d9e6f2',
          500: '#0F2746',
          600: '#0c1f3a',
          700: '#091829',
        },
        gold: {
          400: '#D4AF37',
          500: '#C8A86B',
          600: '#B8985A',
        },
        background: '#F8F9FB',
        text: '#0E1217',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'lora': ['Lora', 'serif'],
        'pacifico': ['Pacifico', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
