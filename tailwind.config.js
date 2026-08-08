/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f0fbf3',
          100: '#dcf6e3',
          200: '#bbecca',
          300: '#8bdaa6',
          400: '#54c07d',
          500: '#2ea25f',
          600: '#1f834a',
          700: '#1a683d',
          800: '#175334',
          900: '#13442c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
