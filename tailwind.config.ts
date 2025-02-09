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
        oxford: '#102C57',
        powder: '#CEDEF6',
        alice: '#E6EEFA',
        camel: '#DAC0A3',
        seashell: '#F5EDE5',
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
