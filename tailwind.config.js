/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        default: ['Afacad Flux', 'sans-serif',],
        bla: ['Playwrite GB S', 'cursive'] 
      },
    },
  },
  plugins: [],
}

