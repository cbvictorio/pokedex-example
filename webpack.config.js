const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TercerJSPlugin = require('terser-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src', 'index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[hash].js'
    },
    resolve: {
        alias: {
            Components: path.resolve(__dirname, 'src', 'components'),
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
            template: path.resolve(__dirname, 'public/index.html')
        }),
        new webpack.DllReferencePlugin({
            manifest: require('./modules-manifest.json')
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/app.*'
            ]
        }),
        new AddAssetHtmlPlugin({
            filepath: path.resolve(__dirname, 'dist/js/*.dll.js'),
            outputPath: 'js',
            publicPath: 'js'
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [new TercerJSPlugin()],
        splitChunks: {
            name: 'commons',
            minSize: 0,
            chunks: 'all',
        },
    },
    performance: {
        hints: false
    },
}