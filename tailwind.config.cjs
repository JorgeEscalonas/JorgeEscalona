/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'
  ],
  theme: {
    extend: {
      colors: {
        azul: "#0000FF",
        amarillo: "#F8E71C",
        negro: "#000000",
      },
    },
  },
  plugins: [],
};
