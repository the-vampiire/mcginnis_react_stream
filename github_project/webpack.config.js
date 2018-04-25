const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

/**
   * entry
   *    '' -> source file to transpile and bundle
   * output
   *    { path, filename } -> target directory for bundled output file
   * resolve
   *    ['', ] -> what extensions to target?
   * module
   *    { rules } -> one rule object per filetype
   *    rules
   *        [ { test, exclude, use: { '' } || ['', ] }, ]
   *            filetype regex, exclude regex, loader(s) to use
   * devServer
   *    { historyApiFallback: true } -> allows url based routes
   * plugins
   *    [ plugin objects ]
   */

module.exports = {
  entry: './src/index.jsx',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  devServer: { historyApiFallback: true },
  
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html'
    }),
  ]
};