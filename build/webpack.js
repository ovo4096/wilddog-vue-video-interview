const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, '..', 'src/index.js'),
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: '[hash].bundle.js'
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '..')
        }),
        // new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
};
