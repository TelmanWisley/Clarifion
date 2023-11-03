/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend:{
        screens:{
          'sm': {max: '600px'},
          'md' : {max: '800px', min: '601px'},
          'lg' : {max: '1024px', min: '801px'},
        },
        colors:{
          'layout': '#252F3D',
          'subtitle': '#4D5254',
          'gray': '#CFCFCF',
          'light-gray': '#FAFAFA',
          'medium-gray': '#969696',
          'heavy-gray': '#37465A',
          'light-blue-50': '#E3EEFF',
          'light-blue-100': '#EDF3FD',
          'light-blue': '#2C7EF8',
          'light-green': '#85BF55',
          'green': '#59AE43',
          'warn': '#F82C2C',
        }
      }
    },
    plugins: [
    ],
  }
  
  