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
          DEFAULT: '#102C57',
        },
        brown: {
          DEFAULT: '#DAC0A3',
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
