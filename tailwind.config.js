/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkPurple:'#150E28',
        lightPurple: '#D434FE',
        purple: '#903AFF',
      }
    },
    fontFamily: {
      CdRegular: ["Cd-Regular", "sans-serif"],
      CdMedium: ["Cd-Medium", "sans-serif"],
      CdSemiBold: ['Cd-SemiBold', "sans-serif"],
      CdBold: ['Cd-Bold', "sans-serif"]
    },
    
  },
  plugins: [],
}