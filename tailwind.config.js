/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'desktop': "url('/images/bg-desktop.svg')"
      }
    },
  },
  plugins: [],
}
