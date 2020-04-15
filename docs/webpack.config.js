const fs = require('fs-extra');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, options) => {
    const isDevMode = options.mode === 'development';

    return {
        entry: {
            bundle: './src/index.jsx',
            commons: ['react-syntax-highlighter'],
        },
        devServer: {
            historyApiFallback: true,
            inline: true,
            port: 8082,
        },
        output: {
            path: path.join(__dirname, './build'),
            filename: 'js/[name].[hash].js',
            chunkFilename: 'js/[name].[chunkhash].js',
            publicPath: '/',
        },
        devtool: 'source-map',
        mode: isDevMode ? 'development' : 'production',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            root: path.join(__dirname, '..'),
                        },
                    },
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
                                sourceMap: true,
                            },
                        },
                        'resolve-url-loader',
                        `sass-loader?outputStyle=expanded&includePaths[]=${path.resolve(__dirname, 'src/scss')}&includePaths[]=${path.resolve(__dirname, '../src/scss')}`,
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
                'src',
                '../src',
            ],
            alias: {
                classnames: path.resolve(__dirname, '../node_modules/classnames'),
                lodash: path.resolve(__dirname, '../node_modules/lodash'),
                'moment-timezone': path.resolve('../node_modules/moment-timezone'),
                'prop-types': path.resolve(__dirname, '../node_modules/prop-types'),
                react: path.resolve(__dirname, '../node_modules/react'),
                'react-custom-scrollbars': path.resolve(__dirname, '../node_modules/react-custom-scrollbars'),
                'react-dom': path.resolve(__dirname, '../node_modules/react-dom'),
                'react-cm-ui': path.resolve(__dirname, '../src'),
                'react-responsive': path.resolve(__dirname, '../node_modules/react-responsive'),
                'css-cm-ui': path.resolve(__dirname, '../src/style.scss'),
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
                title: 'React-CM-UI Docs',
                template: 'template.ejs',
            }),
            new MiniCssExtractPlugin({
                allChunks: true,
                filename: 'css/bundle.css',
                ignoreOrder: true,
            }),
            new webpack.DefinePlugin({
                __UI_PACKAGE_VERSION__: (typeof process.env.CM_UI_DOCS_VERSION === 'undefined') ?
                    '"X.X.X"' : `"${process.env.CM_UI_DOCS_VERSION}"`,
            }),
        ],
    };
};
