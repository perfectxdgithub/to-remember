const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/test.js',
  mode: 'production',
  devServer: {
    hot: true
  },
  devtool: 'source-map',
  plugins: [
    new webpack.ProvidePlugin({
      // _: 'lodash',
      join: ['lodash', 'join']
    }),
    new HtmlWebpackPlugin({
      title: 'title'
    })
  ],
  module: {},
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  }
}
