/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/*.html", "./themes/**/*.html"],
  darkMode: 'class',
  theme: {
        extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate')
  ],
}

