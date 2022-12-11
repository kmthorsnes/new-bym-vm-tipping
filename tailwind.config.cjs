/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  tailwindConfig: "tailwind.config.cjs",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "mobile-only": { max: `34.6875rem` },
      phablet: `34.6875rem` /* ~555px */,
      tablet: `48rem` /* ~768px */,
      "tablet-big": `64rem` /* ~1024px */,
      laptop: `77.25rem` /* ~1236px */,
      desktop: `100rem`  /* ~1600px */,
    },
    extend: {colors: {
      black: {
        default: "#2c2c2c",
        backdrop: "#2c2c2c99",
      },
      beige: {
        default: "#f8f0dd",
        dark: "#d0bfae",
      },
      blue: {
        default: "#6fe9ff",
        dark: "#2a2859",
        light: "#b3f5ff",
        hover: "#1f42aa",
      },
      white:{
        default: "#ffffff",
      },
      green: {
        default: "#43f8b6",
        light: "#c7f6c9",
        dark: "#034b45",
      },
      "goldenrod": {
        "default": "#daa520",
      },
      "wcbeige": {
        "50": "#88365e",
        "100": "#7e2c54",
        "200": "#74224a",
        "300": "#6a1840",
        "400": "#600e36",
        "default": "#56042c",
        "600": "#4c0022",
        "700": "#420018",
        "800": "#38000e",
        "900": "#2e0004"
      },
      "wcyellow": {
        "50": "#fff542",
        "100": "#ffeb38",
        "200": "#ffe12e",
        "300": "#ffd724",
        "400": "#ffcd1a",
        "default": "#fec310",
        "600": "#f4b906",
        "700": "#eaaf00",
        "800": "#e0a500",
        "900": "#d69b00"
      },
      "wcblue": {
        "50": "#7beeff",
        "100": "#71e4ff",
        "200": "#67daff",
        "300": "#5dd0f7",
        "400": "#53c6ed",
        "default": "#49bce3",
        "600": "#3fb2d9",
        "700": "#35a8cf",
        "800": "#2b9ec5",
        "900": "#2194bb"
      },
      "darkblue": {
        "50": "#42a9f5",
        "100": "#389feb",
        "200": "#2e95e1",
        "300": "#248bd7",
        "400": "#1a81cd",
        "default": "#1077c3",
        "600": "#066db9",
        "700": "#0063af",
        "800": "#0059a5",
        "900": "#004f9b",
      },
      bumanguéSBlue: {
        50: "#f1d0ca",
        100: "#efafc1",
        200: "#e47beb",
        300: "#754de3",
        400: "#2854d6",
        500: "#1077c3",
        600: "#0573a8",
        700: "#034f86",
        800: "#042360",
        900: "#060536",
      }
    },},
  },
  plugins: [],
}
