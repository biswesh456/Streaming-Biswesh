var path = require('path');

module.exports = {
	entry: path.join(__dirname, '/test.js'),
	output: {
		path: path.join(__dirname),
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: __dirname,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}
		]
	}
};