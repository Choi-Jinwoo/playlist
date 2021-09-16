const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.tsx'),
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|gif|mp4|webm)$/,
        type: 'asset',
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          }
        },
      },
      {
        test: /\.css$/,
        use: ['css-loader', 'style-loader'],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
  },
  plugins: [
    new webpack.EnvironmentPlugin(['PUBLIC_URL']),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      favicon: './public/favicon.png',
    })
  ],
};
