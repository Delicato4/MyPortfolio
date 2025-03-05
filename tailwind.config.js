/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js,css}",
    "./**/*.html"
  ],

  theme: {
    size: {
      '96': '24rem',
      '72': '18rem',
    },
    
    extend: {
        screens: {
            'sm': '480px',
           
        },
    },
    fontFamily: {
        sans: ['Roboto Condensed', 'sans-serif'],
    },
    
  },
  plugins: [],
} 