/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#1f1f38',
        'variant': '#2c2c6c',
        'primary': '#4db5ff',
        'primary-variant': 'rgba(77,181,255,0.4)',
      }
    },
  },
  plugins: [],
}