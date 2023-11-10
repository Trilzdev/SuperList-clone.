/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "alpha-color": '#ffffff0c',
        "purple-color":'#6b66da',
        'yellow-color':'#ffe605',
        'green-color':'#98e000',
        'blue-color':'#4ae5ef',
        'orange-color':'#f84f39',
        'darkgreen-color':'#2a966f',
      },
    },

  },
  plugins: [],
}