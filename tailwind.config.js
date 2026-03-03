/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF7A1A",
          navy: "#0B1B3B"
        }
      },

      fontFamily: {
        arabic: ['var(--font-arabic)', 'sans-serif'],
        latin: ['var(--font-latin)', 'sans-serif'],
      },
    }
  },
  plugins: []
};