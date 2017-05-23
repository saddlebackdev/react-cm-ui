var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (env) {
    return {
        entry: {
            app: './docs/src/js/components/CoreApp.react.js'
        },
        devServer: {
            historyApiFallback: true,
            inline: true,
            port: 8081
        },
        output: {
            path: path.join(__dirname, './docs/build'),
            filename: 'js/bundle.js',
            publicPath: '/'
        },
        devtool: 'eval',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: [/node_modules/, /vendors/],
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react'],
                        plugins: [ 'add-module-exports' ]
                    }
                }, {
                    test: /\.scss$/,
                    loader: ExtractTextPlugin.extract({
                        fallbackLoader: 'style-loader',
                        loader: [
                            'css-loader',
                            'postcss-loader',
                            'sass-loader?outputStyle=expanded&includePaths[]=' +
                            path.resolve(__dirname, 'docs/src/scss') +
                            '&includePaths[]=' +
                            path.resolve(__dirname, 'src/scss')
                        ].join('!')
                    })
                }, {
                    test: /\.(ico|png|jpg|gif|svg|eot|ttf|woff|woff(2)?)(\?[a-z0-9=\.]+)?$/,
                    loader: 'file-loader?name=[path][name].[ext]?[hash]&context=./src'
                }, {
                    test: /\.(sketch|pdf?)(\?[a-z0-9=\.]+)?$/,
                    loader: 'file-loader?name=files/[name].[ext]?[hash]&context=./src'
                }, {
                    test: /\.json$/,
                    loader: 'json-loader'
                }
            ]
        },
        resolve: {
            extensions: [
                '.js',
                '.scss',
                '.ico',
                '.png',
                '.jpg',
                '.gif',
                '.eot',
                '.ttf',
                '.woff',
                '.woff2',
                '.svg',
                '.json',
                '.sketch',
                '.pdf'
            ],
            modules: [
                'node_modules',
                'src',
                'docs/src',
                'docs/src/js',
                'src/js',
                'docs/src/scss',
                'src/scss',
            ]
        },
        plugins: [
            new webpack.LoaderOptionsPlugin({
                options: {
                    postcss: function () {
                        return [require('autoprefixer')];
                    }
                },
                proxy: {
                    '*': 'http://0.0.0.0:5000'
                },
            }),
            new webpack.DefinePlugin({
                __API_HOST__: (typeof process.env.API_HOST === 'undefined') ? null : '"' + process.env.API_HOST + '"', /* THIS NEEDS TO BE DECIDED AT RUNTIME */
                __CM_CORE_FE_VERSION__: (typeof process.env.CM_CORE_FE_VERSION === 'undefined') ?
                    '"?"' : '"' + process.env.CM_CORE_FE_VERSION + '"',
                __S3_LANGUAGE_BUCKET__: (typeof process.env.S3_LANGUAGE_BUCKET === 'undefined') ?
                    '"https://s3-us-west-1.amazonaws.com/cm-languages/"' : '"' + process.env.S3_LANGUAGE_BUCKET + '"'
            }),
            new ExtractTextPlugin({
                filename: 'css/bundle.css',
                allChunks: true
            }),
            /* BEGIN UGLIFY: VERY IMPORTANT DO NOT REMOVE */
            new webpack.optimize.UglifyJsPlugin({
                minimize: true,
                compress: {
                    warnings: false
                }
            })
            /* END UGLIFY: VERY IMPORTANT DO NOT REMOVE */
        ]
    }
};
