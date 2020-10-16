module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: {
          200: '#DFEAFF',
          300: '#B0CBFF',
          400: '#6B9EFF',
          500: '#236EFF',
          600: '#0D51D4',
          700: '#083EA8',
        },
        secondary: {
          200: '#E0D1F8',
          300: '#C2A9EB',
          400: '#9168D2',
          500: '#652EC0',
          600: '#4C16A6',
          700: '#350B7B',
        },
        accent: {
          200: '#FADFE8',
          300: '#F6C2D4',
          400: '#F1A1BD',
          500: '#F06595',
          600: '#DC3C74',
          700: '#C2285D',
        },
        secondaccent: {
          200: '#FFFEF1',
          300: '#F9F5D2',
          400: '#F2EBAB',
          500: '#F0E265',
          600: '#DCCC3F',
          700: '#B6A61D',
        },
      },
      spacing: {
        '14': '3.5rem',
    },
    maxWidth: {
      '7xl': '80rem',
      '8xl': '90rem',
    },
    //Extends Typo
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    lineHeight: {
      '11': '3rem',
      '12': '3.5rem',
    },

      fontFamily: {
        sans: ['Ballinger', '-apple-system', 'BlinkMacSystemFont',  'Roboto', 'Arial', 'Helvetica', 'sans-serif'],
        body: ['Ballinger', '-apple-system', 'BlinkMacSystemFont',  'Roboto', 'Arial', 'Helvetica', 'sans-serif'],
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(280px, 1fr))',
      }
    },
  },
  variants: {},
  plugins: [],
}