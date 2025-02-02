/** @type {import('tailwindcss').Config} */
import { mtConfig } from "@material-tailwind/react";
const thypographyPlugin = require('@tailwindcss/typography');

const withMT = require("@material-tailwind/html/utils/withMT");

export default withMT({
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [mtConfig, thypographyPlugin()],
});
