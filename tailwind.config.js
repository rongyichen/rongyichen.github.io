/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f2f7',
          100: '#dce2ed',
          200: '#b6c2d9',
          300: '#98a7c8',
          400: '#7487b0',
          500: '#596da0',
          600: '#4C5776',
          700: '#3e4660',
          800: '#343a50',
          900: '#2d3142',
        },
        accent: {
          400: '#8ec0fa',
          500: '#435b9e',
        }
      }
    },
  },
  plugins: [],
}
