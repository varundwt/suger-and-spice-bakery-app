/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
    },
    colors:{
      'purpleone':'#F7EFE5',
      'purpletwo':'#E2BFD9',
      'purplethree':'#C8A1E0',
      'purplefour':'#674188'
    }
  },
  variants: {},
  plugins: [
    require('daisyui'),
  ],
  
}

