/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
    },
    backgroundImage: {
      "hero-pattern": "url('/img/Hero.png')",
    },
  },
  plugins: [],
};
