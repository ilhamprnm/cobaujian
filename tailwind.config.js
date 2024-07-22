/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "roundBlack" : "0px 3px 8px rgba(0, 0, 0, 0.24)"
      }
    },
  },
  plugins: [],
}

