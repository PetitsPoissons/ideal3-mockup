const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin =
	require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// create and export the main configuration object
module.exports = {
	// define the entry property. The entry point is the root of the bundle and the beginning of the dependency graph
	entry: {
		home: './js/home.js',
		services: './js/services.js',
		team: './js/team.js',
		basic: './js/basic.js',
	},
	// webpack takes the entry point provided, bundles that code, adn output that bundled code to the dist folder
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
	},
	// add the file-loader to our webpack configuration
	module: {
		rules: [
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i, // process image files
				use: [
					{
						loader: 'file-loader',
						options: {
							esModule: false,
							name(file) {
								return '[path][name].[ext]';
							},
							// publicPath: function (url) {
							// 	return url.replace('../', '/assets/');
							// },
						},
					},
				],
			},
		],
	},
	// tell webpack to use different packages
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
		}),
		new BundleAnalyzerPlugin({
			analyzerMode: 'static', // the report outputs to an HTML file in the dist folder
		}),
	],
	// provide the mode in which we want webpack to run. By default webpack wants to run in production mode where webpack will minify our code for us automatically.
	mode: 'development',
};
