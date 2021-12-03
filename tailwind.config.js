const primaryColorRootCode = '194';

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          dark: `hsl(${primaryColorRootCode}, 70%, 40%)`,
          DEFAULT: `hsl(${primaryColorRootCode}, 70%, 50%)`,
          light: `hsl(${primaryColorRootCode}, 70%, 60%)`,
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
