/** @type {import('tailwindcss').Config} */
import { colour } from './src/assets/colour'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        ...colour,
      },

    },
  },
  plugins: [],
}