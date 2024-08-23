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
    fontFamily: {      
      'mono': ['Poppins', 'Arial', 'sans-serif'],
      'DM1' : ['DM Serif Display'],
      'DM2' : ['Taviraj'],
      'DM3' : ['Playfair Display']    
    },
    colors:{
      'purpleone':'#250026',
      'purpletwo':'#E2BFD9',
      'purplethree':'#C8A1E0',
      'purplefour':'#674188',
      'purplefive':'#A76A92',
      'purplelight':'#F7EFE5'      
    }
  },
  variants: {},
  plugins: [
    require('daisyui'),
  ],
  daisyui:{
    themes : ['valentine']
  }
  
}

