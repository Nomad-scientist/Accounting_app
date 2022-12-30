/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      primary: '#60EAF3',
      white: '#FFFFFF',
      transparent: 'transparent'
    },
    extend: {}
  },
  plugins: []
};
