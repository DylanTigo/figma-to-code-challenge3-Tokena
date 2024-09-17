/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "white": "#FFFFFF",
      "gray": "#D1D5DB",
      "light-gray": "#F3F4F6",
      "dark-gray": "#6B7280",
      "black": "#1D1D1D",
      "yellow": "#F2D604",
      "red": "#CB0101",
      "green": "#01B130",
      "blue": "#006EFF",
      "blue-2": "#0065EA",
      "blue-dark": "#171923",
      "blue-dark-2": "#292C3B",
    },
    fontFamily: {
      "MonaSans": ["MonaSans", "sans-serif"],
      "JetBrainsMono": ["JetBrains Mono", "monospace"],
    },
    extend: {
    },
  },
  plugins: [],
}