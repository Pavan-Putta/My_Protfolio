/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        text: "#fff",
        primary: "#576cbc",
        secondary: "#19376d",
        dark: "#0b2447",
        bgColor: "#04152d",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      }
    },
  },
  plugins: [],
}

