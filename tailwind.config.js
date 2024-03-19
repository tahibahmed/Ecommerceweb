/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm': '280px',
        'sm': '640px',
        'md': '768px',
        'lg': '1025px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1800px'
      },
      fontSize: {
        'xsm': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '20px',
        'xl': '24px'
      },
      fontWeight: {
        'thin': 100,
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800
      },
      colors: {
        'success': 'rgb(77 124 15)',
        'error': 'rgb(220 38 38)'
      },
      backgroundColor: {
        'success': 'rgb(190 242 100)'
      }
    }
  },
  plugins: [],
}