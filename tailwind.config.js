/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lightB': '#D0D6F9',
        'darkB': '#0B0D17',
      },
    },
    fontFamily: {
      'bellefair': ["Bellefair"],
      'barlow':["Barlow"],
      'barlowC':["Barlow Condensed"],
    },
    screens: {
      'xs': '300px',
      // => @media (min-width: 300px) { ... }
      'sm': '540px',
      // => @media (min-width: 540px) { ... }
      'md': '800px',
      // => @media (min-width: 800px) { ... }
      'lg': '1100px',
      // => @media (min-width: 1100px) { ... }
      'xl': '1422px',
      // => @media (min-width: 1422px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      },
      backgroundImage: {
        'index1': "url(/Background.png);",
        'index2': "url(/Background2.png);",
        'crew': "url(/bgcrew.png);",
        'desti': "url(/bgdesti.png);",
        'tech': "url(/bgtech.png);",
      }
  },
  
};

