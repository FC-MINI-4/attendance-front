/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4050E0', // main blue
        secondary: '#E32636', // main red
        accent: '#51D285', // main green
        subTextAndBorder: '#9ca3af',
      },
    },
  },
  plugins: [],
};
