var webpack = require('webpack'),
    path = require('path');

module.exports = {
    debug: true,
    // Source map included in bundle for dev
    devtool: 'eval',
    entry: ['./src/main.ts'],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'build'),
        publicPath: '/static/'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts', exclude: 'node_modules' }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    devServer: {
        hot: true,
        inline: true,
        noInfo: true
    }
}