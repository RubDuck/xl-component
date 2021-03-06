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
				{
					test: /\.vue$|\.js$/,
					exclude: /node_modules/,
					loader: 'eslint-loader',
					enforce: "pre",
					options: {
						formatter: require('eslint-friendly-formatter')
					},
				},
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
    devServer: {
			port: 8800,
			host: '0.0.0.0',
			hot: true
    },
    plugins: [
			new webpack.HotModuleReplacementPlugin(), //热更新插件
			new HtmlWebpackPlugin({
				title: 'vueComputent',
				template: path.resolve(__dirname, '../index.html')
			}),
			new VueLoaderPlugin(),
    ]
}