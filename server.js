const devServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.config');

var server = new devServer(webpack(config), {
    publicPath: config.output.publicPath,
    color: true,
    progress: true
});

server.listen(3000);