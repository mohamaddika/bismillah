/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
     "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    import('flowbite/plugin')
  ],
}

