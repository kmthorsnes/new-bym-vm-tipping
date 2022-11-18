/** @type {import('tailwindcss').Config} */
module.exports = {
  tailwindConfig: "tailwind.config.js",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "mobile-only": { max: `34.6875rem` },
      phablet: `34.6875rem` /* ~555px */,
      tablet: `48rem` /* ~768px */,
      "tablet-big": `64rem` /* ~1024px */,
      laptop: `77.25rem` /* ~1236px */,
      desktop: `100rem` cd /* ~1600px */,
    },
    extend: {},
  },
  plugins: [],
};
