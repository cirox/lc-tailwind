module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(280px, 1fr))',
      }
    },
  },
  variants: {},
  plugins: [],
}