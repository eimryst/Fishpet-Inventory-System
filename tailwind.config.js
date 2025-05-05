/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // Add Montserrat here
      },
  },
  plugins: [require("@tailwindcss/forms")],
  variants: {
    extend: {
      display: ["focus-group"]
    }
  }
}
}
