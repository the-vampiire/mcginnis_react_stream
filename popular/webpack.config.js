const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },

    module: {
        rules: [
            // one rule for each file type
            {
                // filetype to be transpiled
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    // the transpiling tool used for this filetype
                    loader: 'babel-loader'
                }
            },
            {
                // filetype to be transpiled
                test: /\.css$/,
        // **** STYLE LOADER MUST COME FIRST ****
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ]
};
