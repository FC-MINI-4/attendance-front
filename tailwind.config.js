/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // 짓모드
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4050E0', // main blue
        primaryHover: '#9fa6e0',
        secondaryHover: '#0000CC',
        secondary: '#E32636', // main red
        accent: '#51D285', // main green
        input: '#F4F4F4',
        mainGray: '#D0D0D0', // placeholder gray
        secondaryGray: '#757575',
        subTextAndBorder: '#9CA3Af',
        mainOrange: '#FF8339', // main orange
        mainBlack: '#525252',
        modalBorder: '#A1A1A1'
      }
    }
  },
  plugins: []
};
