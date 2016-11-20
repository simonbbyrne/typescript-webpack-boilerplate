var webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: './src/main.ts',
    output: {
        filename: 'bundle.min.js',
        path: path.join(__dirname, 'build'),
        publicPath: '/static/'
    },
    //end up with separate files that will be loaded by the browser only when required.  
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    // Add minification & optimize
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            compress: {
                warnings: false,
            },

        })
    ],
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts', exclude: 'node_modules' }
        ]
    }
}