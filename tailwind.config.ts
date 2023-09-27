import type { Config } from 'tailwindcss'
import { colour } from './assets/colour'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
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
export default config
