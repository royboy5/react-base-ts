const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: false,
  plugins: [
    new webpack.SourceMapDevToolPlugin({}),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '..', '..', 'dist'),
    port: 5000,
    stats: 'errors-only',
    open: true,
    compress: true,
  },
});
