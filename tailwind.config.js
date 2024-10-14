/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        mainBg: "#5A1E76",
        boardBg: "#2B0040"
      }
    },
  },
  plugins: [],
}

