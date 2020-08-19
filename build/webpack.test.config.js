const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
  	mode: 'development',
		entry: './src/index.js',
		output: {
			filename: '[name].js',
			path: path.resolve(__dirname, '../dist'),
		},
    module: {
			rules: [
				{
					test: /\.vue$/,
					loader: 'vue-loader',
				},
				// {
				// 	test: /\.js$/,
				// 	exclude: /node_modules/,
				// 	loader: 'babel-loader',
				// },
				{
					test: /\.less$/,
					loader: ['style-loader', 'css-loader', 'less-loader']
				},
			],
    },
    resolve: {
			extensions: ['.js', '.vue'],
			alias: {
				'vue$': 'vue/dist/vue.esm.js',
				'@': path.resolve(__dirname, '../packages')
			}
    },
    plugins: [
			new HtmlWebpackPlugin({
				title: 'vueComputent',
				template: path.resolve(__dirname, '../index.html')
			}),
			new VueLoaderPlugin(),
    ]
}