/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        danger: "#fc5185",
        light: "#E6F1FF",
        // primary: "#7756fb",
        primary: "#64ffda",
        "wire-primary": "#B7FFEE",
        secondary: "#040918",
        "light-secondary": "#0b1841",
        "lightness-secondary": "#142145",
        slate: "#8892B0",
        "light-slate": "#A8B2D1",
        "lightness-slate": "#CCD6F6",
      },
      fontFamily: {
        mono: ["'Inconsolata'", "monospace"],
        heading: ['"Druk Wide Bold"', "sans-serif"],
        "heading-2": ["'Work Sans'", "sans-serif"],
        body: ["'Space Grotesk'", "sans-serif"],
      },
    },
  },
};
