/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      pizazz: {
        1: "#fff",
        10: "#000",
        50: "#fffbea",
        100: "#fff1c5",
        200: "#ffe485",
        300: "#ffcf46",
        400: "#ffb91b",
        500: "#ff9500",
        600: "#e26e00",
        700: "#bb4a02",
        800: "#983908",
        900: "#7c2f0b",
        950: "#481600",
      },
      validate: {
        100: "#00D1B1",
      },
      unvalidate: {
        100: "#D10021",
      },
    },
    extend: {},
  },
  plugins: [],
};
