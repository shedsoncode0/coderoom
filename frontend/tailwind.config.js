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
        "inputPlaceholderText": "#BFBFBF",
        "DarkTextColor1": "#DEE4EE",
        "DarkTextColor2": "#8A99AF",
        "Dark": "#1C2434",
        "Storke": "#E2E8F0",
        "TextColor": "#64748B",
        "Primary": "#3C50E0",
        "Secondary": "#80CAEE",
        "Green": "#10B981",
        "Gray": "#EFF4FB",
        "Red": "#FB5454",
        "Yellow": "#F0950C",
      }
    },
  },
  plugins: [],
}