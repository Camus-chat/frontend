/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f0f6ff',
          100: '#dceafe',
          200: '#bad5fd',
          300: '#97bffc',
          400: '#74aafb',
          500: '#5094fa',
          600: '#317ef2',
          700: '#1d6ce0',
          800: '#1959b8',
          900: '#1a4b93',
        },
        red: {
          50: '#fef1f1',
          100: '#fdd8db',
          200: '#fbb7bb',
          300: '#f9959c',
          400: '#f7737c',
          500: '#f5535e',
          600: '#ec323e',
          700: '#d91c29',
          800: '#ae1e27',
          900: '#8f1e26',
        },
      },
    },
  },
  plugins: [],
};
