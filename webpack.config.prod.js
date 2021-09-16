const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');
const webpackConfig = require('./webpack.config');
const webpack = require('webpack');

require('dotenv').config({
  path: path.resolve(__dirname, '.env.prod')
});

module.exports = merge(webpackConfig, {
  mode: 'production',
  output: {
    publicPath: './',
  },
  plugins: [
    new webpack.EnvironmentPlugin(['PUBLIC_URL']),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'public/music', to: 'music' }
      ]
    })
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
