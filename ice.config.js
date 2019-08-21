const path = require('path');

module.exports = {
  // hash: true,
  vendor: false,
  publicPath: './',
  plugins: [
    ['ice-plugin-fusion', {
      themePackage: '@icedesign/theme',
    }],
    ['ice-plugin-moment-locales', {
      locales: ['zh-cn'],
    }],
    ['ice-plugin-multi-pages', {
      getEntryName: (pageName) => pageName,
    }]
  ],
  alias: {
    '@': path.resolve(__dirname, './src/'),
  },
  devServer: {
    historyApiFallback: true,
  }
};
