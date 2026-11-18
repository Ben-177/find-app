/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy : { DEFAULT: '#0D1B3D', btn: '#061D49' },
        brand : '#FF6A13',
        canvas : '#F6F7FB',
        link : '#308DF5'
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

