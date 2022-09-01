/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          100: "#F2F2F2",
          200: "#F9F9F9",
          400: "#8F8F8F",
          500: "#595959",
          700: "#2D2D2D",
        },
      },

      fontFamily: {
        pro: ["Source Serif Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
