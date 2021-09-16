const path = require('path');
const { merge } = require('webpack-merge');
const webpackConfig = require('./webpack.config');

require('dotenv').config({
  path: path.resolve(__dirname, './.env.dev')
});


module.exports = merge(webpackConfig, {
  mode: 'development',
  devtool: 'source-map',
  output: {
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 8000,
  },
});
