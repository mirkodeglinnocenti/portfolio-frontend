/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "Work-Sans": ['Work Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        // "secondary-color": "var(--primary-color)",
        "color-light": "#dddcdc",
        "color-dark": "#25262C",
        "color-grey": "#838383",
        // gradient:
          // "linear-gradient(90deg, rgba(9,198,248,1) 15%, rgba(46,222,201,1) 100%)",
      }
    },
  },
  plugins: [],
};
