/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kanit', 'sans-serif'],
      },
      colors: {
        darkBg: '#041A1C',
        glassBg: 'rgba(10, 46, 54, 0.65)',
        glassBorder: 'rgba(22, 122, 138, 0.3)',
        primary: '#167A8A',
        secondary: '#6BA3A3',
      },
    },
  },
  plugins: [],
}
