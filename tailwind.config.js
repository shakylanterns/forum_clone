const colors = require("tailwindcss/colors");

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
    },
  },
  plugins: [],
};
