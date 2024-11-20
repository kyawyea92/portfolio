/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'typewriter': 'typewriter 2s steps(11) forwards',
        'caret': 'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s',
        'loop-scroll': 'loop-scroll 30s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'typewriter': {
          to: {
            left: '100%',
          },
        },
      },
      fontFamily: {
        default: ['Afacad Flux', 'sans-serif',],
        bla: ['Playwrite GB S', 'cursive'],
        oswald: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

