/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue-1": "#027be3",
        "primary-blue-2": "#389CF2",
        "primary-blue-3": "#8FC7F6",
        "primary-orange-1": "#ff593f",
        "primary-orange-2": "#FF7661",
        "primary-orange-3": "#FF9584",
        secondary: "#F5ECCD",
        alert: "#A80511",
        "gray-1": "#081420",
        "gray-2": "#1A2430",
        "gray-3": "#212D3B",
        "gray-4": "#71798C",
        "gray-5": "#ABAFC8",
        "gray-6": "#F3F4F6",
        card: "#EDF7FF"
      },
      fontWeight: {
        700: 700,
        600: 600,
        500: 500,
        400: 400,
      },
      fontSize: {
        "mobile-size-32px": "32px",
        "mobile-size-24px": "24px",
        "mobile-size-16px": "16px",
      },
      lineHeight: {
        "mobile-line-35.2px": "35.2px",
        "mobile-line-26.4px": "26.4px",
        "mobile-line-17.6px": "17.6px",
      },
    },
  },
  plugins: [],
};
