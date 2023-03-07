/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm': '400px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        "mainBlue": "#68B7FF",
        "inputBG": "#F0F0F0",
        "inputPlaceholderText": "#BFBFBF"
      }
    },
  },
  plugins: [],
}