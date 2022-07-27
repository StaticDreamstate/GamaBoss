/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "primary-blue-1":"#027be3",
        "primary-blue-2":"#389CF2",
        "primary-blue-3":"#8FC7F6",
        "primary-orange-1":"#ff593f",
        "primary-orange-2":"#FF7661",
        "primary-orange-3":"#FF9584",
        "secondary": "#F5ECCD",
        "alert": "#A80511",
        "gray-1": "#081420",
        "gray-2": "#1A2430",
        "gray-3": "#212D3B",
        "gray-4": "#71798C",
        "gray-5": "#ABAFC8",
        "gray-6": "#F3F4F6",
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
