const path = require('path');
const app_path = './app';
const dist_path = './dist';
const webpack = require('webpack');

const plugins = [
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
];

module.exports = {
    entry: path.resolve(app_path, 'app'),
    output: {
        path: path.resolve(__dirname, dist_path),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.js$|\.jsx/,
            loader: 'babel',
            query: {
                presets: ["es2015", 'react']
            }
        }]
    },
    plugins: plugins,
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        },
        extensions: ['', '.js', '.jsx', '.less', '.sass']
    }
}