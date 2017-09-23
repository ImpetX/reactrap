/* eslint no-var: "off" */

var path = require('path');
var webpack = require('webpack');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

var config = {

    /*
        best option for development::
        devtool: 'cheap-module-eval-source-map'
        but due to the requirement of css modules for generating sourcemap
        'source-map' is used.
    */
    devtool: 'source-map',

    devServer: {
        hot: true,  // enable HMR on the server
        contentBase: path.resolve(__dirname, 'public'), // match the output path
        publicPath: '/' // match the output `publicPath`
    },

    resolve: {
        extensions: [
            '.js', ".jsx", '.css'
        ],

        modules: [
            'node_modules',
            path.resolve(__dirname, 'src')
        ]
    },

    entry: {
        main: [
            'react-hot-loader/patch',  // activate HMR for React
            'webpack-dev-server/client?http://localhost:8080',  // bundle the client for webpack-dev-server and connect to the provided endpoint
            'webpack/hot/only-dev-server',  // bundle the client for hot reloading for successful updates
            './src/index.jsx'
        ]
    },

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js',
        // chunkFilename is required for CommonsChunkPlugin
        chunkFilename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/,
                loader: 'babel-loader'

            },

            {
                test: /\.(css|scss)?$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: "style-loader",
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: false,
                                    modules: true,
                                    localIdentName: '[name]-[local][hash:base64:5]',
                                    importLoaders: 1
                                }
                            },

                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true
                                }
                            },

                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: true
                                }
                            }
                        ]
                    }
                )
            },

            {
                test: /\.(jpg|png|svg|ttf|woff|woff2|otf)?$/,
                loader: 'url-loader?limit=10000'
            }
        ]
    },

    plugins: [
        // enable HMR globally
        new webpack.HotModuleReplacementPlugin(),

        // prints more readable module names in the browser console on HMR updates
        new webpack.NamedModulesPlugin(), 
        
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: 'webpack-bundle-report.html',
            openAnalyzer: false
        }),

        // building all the 3rd party modules into vendor js
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks(module) {
                return module.context && module.context.indexOf('node_modules') !== -1;
            },
        }),

       /*
        Generating a seperate file for webpack runtime code.
        this file must be loaded first via script tag
        */
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
        }),

        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        }),

        new HtmlWebpackPlugin({
            template: 'index.html',
            alwaysWriteToDisk: true
        }),

        new HtmlWebpackHarddiskPlugin()
    ]
};

module.exports = config;