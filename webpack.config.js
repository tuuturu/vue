const path = require('path')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

	context: path.resolve(__dirname, 'src/stories'),

	entry: {
		buttons: './buttons/index.js',
		forms: './forms/index.js',
		icons: './icons/index.js'
	},

	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: 'commonjs2',
		library: 'components'
	},

	resolve: {
		extensions: ['.vue', '.scss', '.js'],
		enforceExtension: false,
		alias: {
			'~': path.resolve(__dirname, 'src')
		}
	},

	module: {
		rules: [
			{
				test: /\.vue$/,
				exclude: /node_modules/,
        loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: file => (
					/node_modules/.test(file) &&
					!/\.vue\.js/.test(file)
				)
			},
			{
				test: /\.scss$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'sass-loader',
				]
			}
		]
	},

	plugins: [
		new VueLoaderPlugin()
	]
}
