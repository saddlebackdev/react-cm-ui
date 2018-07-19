var webpack = require('webpack');
var path = require('path');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (env) {
    return {
        entry: {
            bundle: './docs/src/js/components/CoreApp.react.js',
            commons: [ 'react-syntax-highlighter' ]
        },
        devServer: {
            historyApiFallback: true,
            inline: true,
            port: 8082
        },
        output: {
            path: path.join(__dirname, './docs/build'),
            filename: 'js/[name].[hash].js',
            chunkFilename: 'js/[name].[chunkhash].js',
            publicPath: '/'
        },
        devtool: 'eval',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: [/node_modules/],
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react'],
                        plugins: [ 'add-module-exports' ]
                    }
                }, {
                    test: /\.jsx$/,
                    include: [
                        path.resolve(__dirname, 'node_modules', 'react-tree-menu')
                    ],
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react'],
                        plugins: [ 'add-module-exports' ]
                    }
                }, {
                    test: /\.scss$/,
                    loader: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            'css-loader',
                            'postcss-loader',
                            'resolve-url-loader',
                            'sass-loader?outputStyle=expanded&includePaths[]=' + path.resolve(__dirname, 'docs/src/scss') + '&includePaths[]=' + path.resolve(__dirname, 'src/scss'),
                        ]
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
                '.jsx',
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
                'docs/src',
                'docs/src/js',
                'docs/src/scss',
                'src',
            ],
            alias: {
                'react-cm-ui': path.resolve(__dirname, 'src'),
                'css-cm-ui': path.resolve(__dirname, 'src/scss/Style.scss')
            }
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
            new CommonsChunkPlugin({
                name: 'commons',
                minChunks: Infinity
            }),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                title: 'Church Management UI Docs',
                template: 'docs/template.ejs'
            }),
            new ExtractTextPlugin({
                filename: 'css/bundle.css',
                allChunks: true
            }),
            new webpack.optimize.UglifyJsPlugin({
                minimize: true,
                compress: {
                    warnings: false
                }
            }),
            new webpack.DefinePlugin({
                __UI_DOCS_VERSION__: (typeof process.env.CM_UI_DOCS_VERSION === 'undefined') ?
                    '"?"' : '"' + process.env.CM_UI_DOCS_VERSION + '"'
            })
        ]
    }
};
