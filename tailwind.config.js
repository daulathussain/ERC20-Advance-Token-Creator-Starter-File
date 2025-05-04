// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#110E1A",
        secondary: {
          500: "rgb(217, 70, 239)", // fuchsia-500
          600: "rgb(192, 38, 211)", // fuchsia-600
          700: "rgb(126, 34, 206)", // purple-700
        },
      },
      gradientColorStops: {
        "fuchsia-500": "rgb(217, 70, 239)",
        "purple-600": "rgb(147, 51, 234)",
        "fuchsia-600": "rgb(192, 38, 211)",
        "purple-700": "rgb(126, 34, 206)",
      },
      screens: {
        xs: "480px", // Add extra-small breakpoint
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
