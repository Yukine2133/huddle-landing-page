/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      backgroundImage: {
        'desktop': "url('/images/bg-desktop.svg')"
      }
    },
  },
  plugins: [],
}
