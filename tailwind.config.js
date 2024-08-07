/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'Blue': '#011C40',
      'White': '#FAFAFA',
      'Green': '#038C7F',
      'DarkGreen': '#025951',
      'DarkGreenLayer': 'rgba(2, 89, 81, 0.9)',
      'Black': '#000',
      'Cyan': '#7ED9D0'
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    fontWeight:{
      thin: '300',
      regular: '400',
      medium: '500',
      semiBold: '600',
      bold: '700',
      black: '900',
    },
    extend: {
      screens: {
        'mobile': '360px',
        'tablet': '768px',
        'laptop1': '1024px',
        'laptop2': '1366px',
        'desktop': '1440px',
      },
      boxShadow: {
        'lightShadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        'darkShadow': '8px 8px 12px rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        // 'hero-pattern': "url('/img/hero-pattern.svg')"
      }
    },
  },
  plugins: [],
}

