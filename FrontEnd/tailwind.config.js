/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "300px",

      s: "548px",

      md: "768px",

      mdd: "857px",

      x: "1025",

      xl: "1280px",

      "3xl": "1900px",
    },
    extend: {
      colors: {
        primary: "#e1e6e0", // green
        secondary: "#f2f4f1", // white02
        tertiary: "#fdfdfd", // white
        invert: " #476064", // grey
           },
    },
  },
  plugins: [],
};
