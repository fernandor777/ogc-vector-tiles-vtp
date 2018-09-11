const path = require('path');
const ParallelUglifyPlugin = require("webpack-parallel-uglify-plugin");
const DefinePlugin = require("webpack/lib/DefinePlugin");
const env = require('./env');
let webpackConfig = require('./webpack.config.js');

webpackConfig.entry = [
    './client.js'
];

webpackConfig.output = {
    path: path.join(__dirname, 'dist'),
    filename: 'vectortiles.js',
    publicPath: ''
};

webpackConfig.plugins = [
    new ParallelUglifyPlugin({
        uglifyES: {
            sourceMap: false,
            compress: { warnings: false },
            mangle: true
        }
    }),
    new DefinePlugin({
        'process.env': env.prod
    })
];

webpackConfig.devtool = undefined;

module.exports = webpackConfig;
