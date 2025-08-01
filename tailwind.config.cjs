/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-bg": "#1E1E1E",
        "card-bg": "#282828",
        "primary-text": "#FFFFFF",
        "accent-yellow": "#FFC800",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #FFC800" },
          "100%": { boxShadow: "0 0 20px #FFC800, 0 0 30px #FFC800" },
        },
      },
    },
  },
  plugins: [],
};
