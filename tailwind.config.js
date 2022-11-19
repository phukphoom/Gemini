/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    transitionDuration: {
      DEFAULT: "200ms",
    },
    trasitionTimingFunction: {
      DEFAULT: "ease-in-out",
    },
    extend: {
      fontFamily: {
        futura: ["Futura Std", "sans-serif"],
        garamond: ["Garamond", "sans-serif"],
      },
      fontWeight: {
        bold: "650",
      },
      colors: {
        gemini: {
          200: "#D6EDF0",
          300: "#B3DBE0",
          400: "#4581B7",
          500: "#0A62B0",
          600: "#255682",
        },
        grey: {
          200: "#E4E4E4",
          300: "#CCCCCC",
          400: "#C8C8C8",
          500: "#828282",
          600: "#00303C",
          700: "#011324",
        },
        error: {
          200: "#FCC9C8",
          300: "#F39190",
          400: "#E8605E",
          500: "#EF4C49",
        },
      },
    },
  },
  plugins: [],
};
