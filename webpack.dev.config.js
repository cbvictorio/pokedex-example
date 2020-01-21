const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    resolve: {
        alias: {
            Components: path.resolve(__dirname, 'src', 'components')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ],
                exclude: path.resolve(__dirname, "node_modules")
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react'
        }),
        new HtmlWebpackPlugin({
            title: 'Webpack ex',
            template: path.resolve(__dirname, 'public/index.html')
        })
    ],
    devServer: {
        open: true,
        port: 9000
    },
    performance: {
        hints: false
    },
}