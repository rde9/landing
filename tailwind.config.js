/** @type {import('tailwindcss').Config} */
import { addDynamicIconSelectors } from '@iconify/tailwind';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'Inter', 'system-ui', 'sans-serif'],
        mapleMono: ['Maple Mono', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '5xl': '5rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [
    addDynamicIconSelectors()
  ],
};