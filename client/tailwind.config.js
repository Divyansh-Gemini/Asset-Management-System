/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#21313C",
        fg: "#16CC62",
        pink: "#E73361",
        orange: "#F3564A"
      },
      backgroundImage: {
        'card-bg-red': "url('/assets/svg/card-bg-red.svg')",
      }
    },
  },
  plugins: [],
}
