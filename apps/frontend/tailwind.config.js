/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/features/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2E0075",
        },
        secondary: {
          DEFAULT: "#FFFFFF",
        },
        tertiary: {
          DEFAULT: "#EEEEEE",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
