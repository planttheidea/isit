const path = require('path');
const defaultConfig = require('./webpack.config');

const PORT = 4444;

module.exports = Object.assign({}, defaultConfig, {
  devServer: {
    contentBase: './dist',
    host: 'localhost',
    inline: true,
    lazy: false,
    noInfo: false,
    port: PORT,
    quiet: false,
    stats: {
      colors: true,
      progress: true,
    },
  },

  entry: path.resolve(__dirname, 'views', 'index.js'),

  output: Object.assign({}, defaultConfig.output, {
    publicPath: `//localhost:${PORT}/dist/`,
  }),
});
