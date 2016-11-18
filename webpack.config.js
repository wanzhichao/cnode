var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {

    devtool: false,
    debug: true,
    entry: {
        app: path.resolve(APP_PATH , 'index.js'),
        vendor: [
            'react',
            'react-dom',
            'react-router',
            'classnames'
        ]
    },
    output: {
        path: BUILD_PATH,
        filename: "js/[name].js"
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        port: 3007,
        host: "localhost"
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel',
                exclude: /node_modules/,
                include: APP_PATH,
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            },
            {
                test: /\.(png|jpg)$/i,
                loader: "file-loader?name=css/img/[name].[ext]" },
            /*
             {
             test: /\.css$/,
             loader: 'file-loader?name=css/[name].[ext]'
             },
            {
             test: /\.css?$/,
             loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
             }*/

            {
                test: /\.(woff|woff2|eot|ttf|svg)(\?.*||)/,
                loader: 'url-loader?importLoaders=1&limit=1000&name=css/fonts/[name].[ext]'
            },
            {
                test: /\.scss?$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css!sass')
            }
        ]
    },


    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new HtmlWebpackPlugin({
            title: "cnnode",
            template: "html/index.ejs",
            filename: "html/index.html"
        }),
        new ExtractTextPlugin("[name].css", {
            allChunks: true,
            warning: false
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "js/vendor.js"
        })
    ]
}