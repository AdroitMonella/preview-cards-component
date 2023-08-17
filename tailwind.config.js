/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'lexend': ['Lexend Deca'],
      'bigShoulders': ['Big Shoulders Display']
    },
    colors: {
      'blue': '#3e52a3',
      'orange': '#e38826',
      'cyan': '#006970',
      'darkCyan': '#004241',
      'white': '#ffffffbf',
      'grey': '#f2f2f2'
    }
  },
  plugins: [],
}