/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'saffron-gold': '#d4a017',
        'deep-maroon': '#800000',
        'ivory-cream': '#fff8e7',
        'emerald-green': '#0a7b54',
        'dark-bg': '#1a0f0a',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};