/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'loop-scroll': 'loop-scroll 30s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      fontFamily: {
        default: ['Afacad Flux', 'sans-serif',],
        bla: ['Playwrite GB S', 'cursive'] 
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

