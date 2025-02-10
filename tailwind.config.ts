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
        blue: {
          100: '#E6EEFA',
          200: '#CEDEF6',
          300: '#102C57',
        },
        brown: {
          100: '#F5EDE5',
          200: '#E8D7C4',
          300: '#4E381F',
        },
      },
      fontFamily: {
        dana: ['var(--font-dana)'],
        pelak: ['var(--font-pelak)'],
      },
      fontSize: {
        smp: '15px',
        xsp: '13px',
      },
    },
  },
  plugins: [scrollbarHide],
} satisfies Config;
