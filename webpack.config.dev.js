const { merge } = require('webpack-merge');
const webpackConfig = require('./webpack.config');

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
