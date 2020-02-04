const path = require('path')
const webpack = require('webpack')
const TercerJSPlugin = require('terser-webpack-plugin')

module.exports = {
    entry: {
        modules: [
            'react',
            'react-dom',
            '@reach/router',
            'redux',
            'react-redux',
            'redux-saga'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[hash].dll.js',
        library: '[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]',
            path: path.join(__dirname, '[name]-manifest.json')
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [new TercerJSPlugin()],
    }
}