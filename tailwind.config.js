/**@type {import('tailwindcss').Config} */
export default{
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
// previamente instalas "npm i -D tailwindcss postcss prefixer"
// usa "npx tailwindcss init -p" para que se cree tambien