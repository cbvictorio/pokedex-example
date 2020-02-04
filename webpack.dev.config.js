const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
        publicPath: '/'
    },
    resolve: {
        alias: {
            Components: path.resolve(__dirname, 'src/components'),
            ReduxFiles: path.resolve(__dirname, 'src/redux'),
            Utils: path.resolve(__dirname, 'src/utils'),
            Assets: path.resolve(__dirname, 'src/assets'),
            Screens: path.resolve(__dirname, 'src/screens')
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
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
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