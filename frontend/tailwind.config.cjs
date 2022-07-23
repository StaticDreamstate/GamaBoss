/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "primary-blue":"#027be3",
        "primary-orange":"#ff593f",
        "secondary": "#F5ECCD",
      },
      fontFamily: {
        "libre": ['Libre Franklin', 'sans-serif']
      },
      fontWeight: {
        700: 700,
        600: 600,
        500: 500,
        400: 400,
      },
      fontSize:{
        "mobile-head-1": {
          "font-size": "32px", 
          "line-height": "35.2px"
        },
        "mobile-head-2": {
          "font-size": "24px", 
          "line-height": "26.4px"
        },
        "mobile-head-3": {
          "font-size": "16px", 
          "line-height": "17.6px"
        },
        "mobile-body-md": {
          "font-size": "16px", 
          "line-height": "22.4px"
        },
        "mobile-body-sm": {
          "font-size": "12px", 
          "line-height": "16.8px"
        },
      }

    },
  },
  plugins: [],
}
