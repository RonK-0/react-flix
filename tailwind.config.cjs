/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: 'selector',
  theme: {
    extend: {
      screens: {
        // 'sm': '640px',
        // 'md': '768px',
        // 'lg': '1024px',
        // 'xl': '1280px',
        // '2xl': '1536px',
      },
      backgroundImage:{
        // transparent_bg: "url('../dist/img/transparent.png')",
      },
      colors:{
        // dark: "#0D0D0D",
        accent: "rgb(229, 9, 20)",
        accent_hover: "rgb(193,17,25)",
        btdark: "rgb(22, 22, 22)",

      },
      gridTemplateColumns: {
        // 'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
      },
      fontFamily: {
        // 'text-inter': ["Inter", "sans-serif"],
        'text-netflix': ["Netflix Sans", "sans-serif"],
      },
      fontSize: {
        // 'button' : 'clamp(16px, 1vw, 24px) !important',
      },
      listStyleType: {
      //   none: 'none',
      //   circle: 'circle',
      //   disc: 'disc',
      //   decimal: 'decimal',
      //   square: 'square',
      //   roman: 'upper-roman',
      },
      backgroundSize: {
        // '400%': '400% 400%'
      },
      animation: {
        // 'bannerSlide': 'bannerSlide 15s ease forwards',
        // 'onCheck': 'onCheck 0.2s ease',
      },
      keyframes: {
        // better to use direct CSS keyframes on input file base
        // 'bannerSlide': {
        //   '0%' : {'background-position': '25% 0%'},
        //   '100%' : {'background-position': '40% 80%'}
        // },

        // 'onCheck': {
        //   '0%' : {'scale': '0'},
        //   '100%' : {'scale': '1'}
        // },
      },
      boxShadow:{
        // 'top_button_shadow'     : '4px 4px 10px rgba(0, 0, 0, 0.2)',
      },
      padding:{
        // 'container_p' : 'calc(1.5rem * 0.5)',
        // 'propertySolution_p' : 'clamp(40px, 3.3vw, 90px) clamp(24px, 1.66vw, 48px)',
      },
      margin:{
        // 'heading_margin_bottom' : 'clamp(32px, 2.5vw, 64px)',
      },
      width:{
        // 'bannerSlider_card_bg' : 'calc(100% + calc(1.5 * calc(1.5rem * 0.5)))',
        // 'tel_icon' : 'clamp(24px, 10vw, 38px)',
      },
      height:{
        // 'insidePageBanner' : 'clamp(350px, 26.042vw, 600px)',
      },
      maxWidth:{
        // 'bannerSlider_card_bg' : 'calc(85% + calc(1.5rem * 0.5))',
      },
    },
  },
  plugins: [],
}

