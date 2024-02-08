/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {

    },
    colors :{
      primary : "#D72638",
      secondary :"#EBEBEB",
      teritorycolor :"#E6C229",
      primaryWhite:"#ffffff",
      hoverWhite :"#b2bcb9",
      bgblack : "#1c1b1b"
    }
  },
  plugins: [],
};
