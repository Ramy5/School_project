/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#09A5C1",
        secondColor: "#D69929",
      },
      keyframes: {
        colorChange: {
          '0%': { 'background-position': '0', color: 'white' },
          // '50%': { color: 'white' },
          '100%': { 'background-position': '100%', color: 'blue' },
        },
      },
      animation: {
        colorChange: 'colorChange 2s linear forwards',
      },
    },
  },
  plugins: [],
};
