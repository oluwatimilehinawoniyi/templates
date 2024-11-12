/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        amaniGrey: "#EEEDEB",
      },
      fontFamily: {
        "lora": ["Lora", "serif"],
        "work-sans": ["Work Sans", "serif"],
      },
    },
  },
  plugins: [],
};
