const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');
const webpackConfig = require('./webpack.config');


module.exports = merge(webpackConfig, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
});
