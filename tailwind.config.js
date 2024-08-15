/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'Blue': '#005996',
      'LightBlue': '#008abc',
      'Green': '#00aab2',
      'LightGreen': '#a9d6c5',
      'Violet': '#584ba0',
      'LightViolet': '#7b4ba0',
      'Black': '#000',
      'DarkGrey': '#EEE',
      'White': '#FFF',
      'Red': '#de0a26',
      'PauGreenDark': '#00797E',
      'PauGreenLight': '#33BBC1',
      'PauBaseComponents': '#EAEAEA',
      'PauBackground' : '#858585'

    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    fontWeight: {
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

