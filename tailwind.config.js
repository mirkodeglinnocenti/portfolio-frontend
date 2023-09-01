/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "Work-Sans": ['Work Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        "primary-color": "#09C6F8",
        "secondary-color": "#2EDEC9",
        "color-light": "#FFFFFF",
        "color-dark": "#25262C",
        gradient:
          "linear-gradient(90deg, rgba(9,198,248,1) 15%, rgba(46,222,201,1) 100%)",
      }
    },
  },
  plugins: [],
};
