const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

// add a custom font to the sans fail-safe font stack in the default config
const sansCopy = [...defaultTheme.fontFamily.sans];
sansCopy.unshift("IBM Plex Sans");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ...colors.orange,
          DEFAULT: colors.orange[500],
          lighter: colors.orange[300],
          darker: colors.orange[700],
        },
      },
      spacing: {
        "80p": "80%",
      },
      fontFamily: {
        sans: sansCopy,
      },
    },
  },
  plugins: [],
};
