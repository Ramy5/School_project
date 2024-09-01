/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#09A5C1",
        secondColor: "#D69929",
      },
    },
  },
  plugins: [],
};
