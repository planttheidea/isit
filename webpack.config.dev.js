'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackDashboard = require('webpack-dashboard/plugin');

const defaultConfig = require('./webpack.config');

const PORT = 3000;

module.exports = Object.assign({}, defaultConfig, {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: 'localhost',
    inline: true,
    lazy: false,
    noInfo: false,
    quiet: false,
    port: PORT,
    stats: {
      colors: true,
      progress: true
    }
  },

  entry: [
    path.resolve(__dirname, 'DEV_ONLY', 'App.js')
  ],

  module: Object.assign({}, defaultConfig.module, {
    rules: defaultConfig.module.rules.map((rule) => {
      if (rule.loader === 'babel-loader') {
        return Object.assign({}, rule, {
          include: rule.include.concat([
            path.resolve(__dirname, 'DEV_ONLY')
          ]),
          options: Object.assign({}, rule.options, {
            cacheDirectory: true,
            presets: rule.options.presets.concat([
              'react'
            ])
          })
        });
      }

      if (rule.loader === 'eslint-loader') {
        return Object.assign({}, rule, {
          options: Object.assign({}, rule.options, {
            failOnWarning: false
          })
        });
      }

      return rule;
    })
  }),

  output: Object.assign({}, defaultConfig.output, {
    publicPath: `http://localhost:${PORT}/`
  }),

  plugins: defaultConfig.plugins.concat([
    new HtmlWebpackPlugin(),
    new WebpackDashboard({
      port: 3210
    })
  ])
});
