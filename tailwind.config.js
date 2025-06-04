/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7ff',
          100: '#b3e3ff',
          200: '#80cfff',
          300: '#4dbaff',
          400: '#1aa6ff',
          500: '#0091ff',
          600: '#0077cc',
          700: '#005c99',
          800: '#004266',
          900: '#002733',
        },
        secondary: {
          50: '#e6fcff',
          100: '#b3f5ff',
          200: '#80eeff',
          300: '#4de7ff',
          400: '#1adfff',
          500: '#00d5ff',
          600: '#00aacc',
          700: '#008099',
          800: '#005766',
          900: '#002e33',
        },
        dark: {
          50: '#e6e8ea',
          100: '#b3b8be',
          200: '#808992',
          300: '#4d5a66',
          400: '#1a2b3a',
          500: '#0f172a',
          600: '#0c1322',
          700: '#090f1a',
          800: '#060a11',
          900: '#030509',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};