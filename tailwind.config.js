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
      "gray-light": "#F3F4F6",
      "gray-dark": "#6B7280",
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
      "monaSans": ["MonaSans", "sans-serif"],
      "jetBrainsMono": ["JetBrains Mono", "monospace"],
    },
    extend: {
      borderRadius: {
        lg: "10px",
      },
      fontSize: {
        xxs: "0.625rem",
      },
      spacing: {
        "4.5": "1.125rem",
      }
    },
  },
  plugins: [],
}