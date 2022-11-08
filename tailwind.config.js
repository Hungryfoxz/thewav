/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'checked' : "url('./pages/Contact/images/forms/checkblue.svg')"
      }
    },
  },
  variants: {
    margin: ['responsive','hover','active'],
    border: ['responsive','hover','active'],
  },
  plugins: [],
}
