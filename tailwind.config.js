/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./checkout/**/*.{html,js}",
    "./product/**/*.{html,js}",
    "./src/**/*.{html,js}",
    "./dist/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Times New Roman"', "Times", "serif"],
      },
    },
  },
  plugins: [],
};
