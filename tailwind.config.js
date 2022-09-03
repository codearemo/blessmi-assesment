/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#536F84",
        secondary: "#3E3C3C",
        highlight: "#E0F2FF",
        "main-text": "#161722",
        // "sub-text": "#161722",
        "highlight-text": "#7E7B7B",
        "disabled-text": "#567286",
      },
    },
  },
  plugins: [],
};
