/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'gray-primary': '#A3ABC3',//Sidebar text color
        'gray-secondary': '#8B8F9C',//Sidebar text color


        'blue-primary': '#1E254E',//background sidebar and product component
        'blue-secondary': '#11142E',//background body
      }
    },
  },
  plugins: [],
}
