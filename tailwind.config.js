/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'red',
        },
        arena: 'red',
        'mar-pucusana': '#1e3a8a',
        jose: {
          500: 'oklch(0.72 0.11 178)',
          600: '#123456', // ejemplo de otro tono
        },
        coral: '#ff7f50',
        oceano: '#0077b6',
        sol: '#ffe066',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
