import scrollbarHide from 'tailwind-scrollbar-hide';
import type { Config } from 'tailwindcss';

export default {
  content: [
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      transitionDuration: {
        DEFAULT: '300ms',
      },
      colors: {
        primary: {
          100: '#E6EEFA',
          200: '#DAC0A3',
        },
        secondary: {
          100: '#E6EEFA',
          200: '#CEDEF6',
          300: '#102C57',
        },
      },
      fontFamily: {
        dana: ['var(--font-dana)'],
        pelak: ['var(--font-pelak)'],
      },
    },
  },
  plugins: [scrollbarHide],
} satisfies Config;
