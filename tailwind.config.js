/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#F4B400',
          yellowHover: '#D99F00',
          dark: '#111111',
          card: '#1A1A1A',
          cardLight: '#242424',
          grayText: '#A1A1AA',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-yellow': '0 0 25px -5px rgba(244, 180, 0, 0.4)',
      }
    },
  },
  plugins: [],
}
