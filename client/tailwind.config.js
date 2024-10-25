/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      custom: ['Arial', '"Helvetica Neue"', 'Helvetica', 'sans-serif'],
    },},
  },
  plugins: [require("daisyui")],
};
