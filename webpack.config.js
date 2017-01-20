const webpack = require('webpack'),
    path = require('path')

const SRC = path.resolve(__dirname, 'src'),
    NODE_MODULES = path.resolve(__dirname, 'node_modules'),
    VERSION = JSON.stringify(require('./package.json').version + new Date().getTime())

const config = {
    entry: [
        './src/main.ts'
    ],
    devtool: '#cheap-module-source-map',
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts', include: SRC, exclude: NODE_MODULES }
        ]
    },
    resolve: {
        root: SRC,
        extensions: [
            '', '.webpack.js', '.ts', '.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/assets',
        filename: 'bundle.js',
        libraryTarget: 'umd'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            },
            __VERSION__: VERSION
        }),
        new webpack.NoErrorsPlugin(), // don't emit assets that include errors
        new webpack.BannerPlugin('version: ' + VERSION, { raw: false, entryOnly: true })
    ]
};

if (process.env.NODE_ENV === 'production') {
    console.log('Building Reporter for Production...');
    config.plugins.push(
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    );
    config.output.filename = 'bundle.min.js';
} else {
    console.log('Building Reporter for Development...');
    config.devtool = '#cheap-module-eval-source-map';
    config.devServer = {
        hot: true,
        inline: true
    };
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin()
    );
}

module.exports = config;
