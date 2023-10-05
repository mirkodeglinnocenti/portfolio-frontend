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
        "color-light": "var(--color-light)",
        "color-dark": "var(--color-dark)",
        "color-grey": "var(--color-grey)",
        
      }
    },
  },
  plugins: [],
};
