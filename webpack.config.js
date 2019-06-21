const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, options) => {
    const isDevMode = options.mode === 'development';

    return {
        entry: {
            bundle: './docs/src/app/app.js',
            commons: [ 'react-syntax-highlighter' ],
        },
        devServer: {
            historyApiFallback: true,
            inline: true,
            port: 8082,
        },
        output: {
            path: path.join(__dirname, './docs/build'),
            filename: 'js/[name].[hash].js',
            chunkFilename: 'js/[name].[chunkhash].js',
            publicPath: '/',
        },
        devtool: 'eval',
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: 'babel-loader',
                }, {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    require('autoprefixer')(),
                                ],
                                sourceMap: isDevMode,
                            },
                        },
                        'resolve-url-loader',
                        'sass-loader?outputStyle=expanded&includePaths[]=' + path.resolve(__dirname, 'docs/src/scss') + '&includePaths[]=' + path.resolve(__dirname, 'src/scss'),
                    ],
                }, {
                    test: /\.(ico|png|jpg|gif|svg|eot|ttf|woff|woff(2)?)(\?[a-z0-9=\.]+)?$/,
                    loader: 'file-loader?name=[path][name].[ext]?[hash]&context=./src',
                }, {
                    test: /\.(sketch|pdf?)(\?[a-z0-9=\.]+)?$/,
                    loader: 'file-loader?name=files/[name].[ext]?[hash]&context=./src',
                },
            ],
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
                '.pdf',
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
                'css-cm-ui': path.resolve(__dirname, 'src/style.scss'),
            },
        },
        optimization: {
            splitChunks: {
                minChunks: Infinity,
                name: 'commons',
            },
        },
        plugins: [
            new webpack.LoaderOptionsPlugin({
                proxy: {
                    '*': 'http://0.0.0.0:5000',
                },
            }),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                title: 'Church Management UI Docs',
                template: 'docs/template.ejs',
            }),
            new MiniCssExtractPlugin({
                filename: 'css/bundle.css',
                allChunks: true,
            }),
            new webpack.DefinePlugin({
                __UI_DOCS_VERSION__: (typeof process.env.CM_UI_DOCS_VERSION === 'undefined') ?
                    '"?"' : '"' + process.env.CM_UI_DOCS_VERSION + '"',
            }),
        ],
    };
};
