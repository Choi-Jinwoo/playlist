const webpackConfig = require('./webpack.config');

module.exports = {
  ...webpackConfig,
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 8000,
  },
};
