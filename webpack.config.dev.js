const webpackConfig = require('./webpack.config');

module.exports = {
  ...webpackConfig,
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    hot: true,
    port: 8000,
  },
};
