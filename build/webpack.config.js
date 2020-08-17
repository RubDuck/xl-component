const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    module: {
        rules: [
            {
                test: '/\.js$/',
                loader: 'babel-loader',
            },
            {
                test: '/\.css$/',
                loader: ['style-loader', 'css-loader', 'scss-loader']
            },
            {
                test: '/\.vue$/',
                loader: 'vue-loader',
            }
        ],
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        }
    },
    devServer: {
        port: 8000,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), //热更新插件
        new HtmlWebpackPlugin()
    ]
}