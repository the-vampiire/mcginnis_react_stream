const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index_bundle.js',
  },

  // required to recognize js and jsx files
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      // one rule for each file type
      {
        // filetype to be transpiled
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          // the transpiling tool used for this filetype
          loader: 'babel-loader',
        },
      },
      {
        // filetype to be transpiled
        test: /\.css$/,
        // **** STYLE LOADER MUST COME FIRST ****
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  devServer: {
    // this allows router redirects to url based routes
    // url route -> / (activate Router) -> /route (Router redirects)
    historyApiFallback: true,
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
