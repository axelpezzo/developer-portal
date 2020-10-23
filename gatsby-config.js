module.exports = {
  plugins: [
    'gatsby-theme-docz-custom',
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: ['gatsby-theme-docz-custom'],
      },
    },
  ],
}
