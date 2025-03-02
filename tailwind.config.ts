/** @type {import('tailwindcss').Config} */
import { mtConfig } from "@material-tailwind/react";
const thypographyPlugin = require('@tailwindcss/typography');

const withMT = require("@material-tailwind/html/utils/withMT");
const flowbitePlugin = require('flowbite/plugin');
const prelinePlugin = require('preline/plugin');
const flyonui=  require('flyonui');
const flyonuiPlugin=require('flyonui/plugin')

export default withMT({
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    "./node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}",
    './node_modules/flowbite/**/*.js',
    './node_modules/preline/preline.js',
    './node_modules/flyonui/dist/js/*.js',
  ],
  flyonui: {
    themes: ["light"]
  },
  darkMode: 'media',
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"),mtConfig, thypographyPlugin(), flowbitePlugin, prelinePlugin, flyonui, flyonuiPlugin ],
});
