/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [animations,
    function ({ addUtilities }) {
      addUtilities({
        '.border-gradient': {
          'border-width': '7px',
          'border-image': 'linear-gradient(to right, #6366f1, #a855f7, #ec4899) 1',
          'border-radius': '20px',
        },
        '.hover\\:border-gradient:hover': {
          'border-image': 'linear-gradient(to right, #6366f1, #a855f7, #ec4899) 1',
          'border-radius': '20px',
        },
      })
    },],
}

