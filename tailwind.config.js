/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 20s linear infinite",
      },
    },
    fontFamily: {
      mono: ["Poppins", "Arial", "sans-serif"],
      DM1: ["DM Serif Display"],
      DM2: ["Taviraj"],
      DM3: ["Playfair Display"],
    },
    colors: {      
      one: "#333333",
      two:"#FFB2C7",
      three:"#F3BA9E",
      four:"#FFFDF4",
      five:"#481E14"
    },
  },
  variants: {},
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["autumn"],
  },
};
