/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      dropShadow: {
        custom: "1px 1px 1px rgba(0, 0, 0, 0.1)",
      },
      dropShadow: {
        custom1: "-10px 10px 12px rgba(0, 0, 0, 0.1)",
      },

      colors: {
        primary: "#ffc001",
        secondary: "#ff9c01",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
