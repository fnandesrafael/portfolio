/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: '#FEC684',
        charcoal: '#131313',
        smoke: '#B3B0AA',
      },
    },
  },
  plugins: [],
};
