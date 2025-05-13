/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      mob: '480px',
      w580: '580px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      wide: '1440px',
      // @media (max-width: theme('screens.max-sm')) { ... }
      'max-smob': { max: '359px' },
      'max-mob': { max: '424px' },
      'max-sm': { max: '639px' },
      'max-md': { max: '767px' },
      'max-lg': { max: '1023px' },
      'max-xl': { max: '1279px' },
      'max-wide': { max: '1439px' },
      'max-2xl': { max: '1535px' },
    },
    extend: {
      colors: {
        primary: {
          50: '#fdf2ee',
          100: '#fae5dd',
          200: '#f5cabb',
          300: '#f0ad99',
          400: '#eb9077',
          500: '#e67355',
          600: '#d76944',
          700: '#c25f3d',
          800: '#ae5536',
          900: '#9a4b2f',
        },
        blue: {
          50: '#fdf2ee',
          100: '#fae5dd',
          150: '#0827d4',
          200: '#f5cabb',
          300: '#f0ad99',
          400: '#eb9077',
          500: '#e67355',
          600: '#d76944',
          700: '#c25f3d',
          800: '#ae5536',
          900: '#9a4b2f',
        },
      },
    },
  },
  plugins: [],
};
