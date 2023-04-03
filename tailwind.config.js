/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mainbg': "url('/public/img/bg.jpeg')",
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ]
}


