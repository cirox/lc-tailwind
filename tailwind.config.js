module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: '#236EFF',
        secondary: '#652EC0',
        grai:'#D9E0E4',
        text:'#212429',
        // ...
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(280px, 1fr))',
      }
    },
  },
  variants: {},
  plugins: [],
}