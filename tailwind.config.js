/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: '#ee4d2d',
        'slate-1': '#111111',
        backgroundPage: '#0b0b0b',
        'gray-5': '#313131'
      },
    }
  },
  plugins: []
}
