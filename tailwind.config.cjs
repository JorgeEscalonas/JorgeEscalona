/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'
  ],
  theme: {
    extend: {
      colors: {
        azul: "#0000FF",
        azulClaro: "#6F6FF1",
        amarillo: "#F8E71C",
        rojo: "#FF0000",
        negro: "#000000",
      },
    },
  },
  plugins: [],
};
