/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "work-sans": ["Work Sans", "sans-serif"],
      },
      colors: {
        blue: "#001F3F",
        dark: "#0C0819",
      },
    },
  },
  plugins: [],
};
