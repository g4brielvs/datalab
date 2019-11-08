const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const build = process.env.BUILD ? process.env.BUILD : false;
const devtool = build ? '' : 'inline-source-map';
const mode = build ? 'production' : 'development';

const cssRules = [
    {
        test: /\.scss$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name].css',
                    publicPath: '/assets/ffg/css/'
                }
            },
            {
                loader: 'extract-loader'
            },
            {
                loader: 'css-loader?-url'
            },
            {
                loader: 'sass-loader'
            }
        ]
    }
]

const moduleRules = [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }
    },
    {
        test: /\.(css|scss)$/,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader'
        ]
    },
    {
        test: /\.csv$/,
        use: {
            loader: 'csv-loader',
            options: {
                dynamicTyping: true,
                header: true
            }
        }
    },
    {
        test: /\.yml$/,
        use: 'js-yaml-loader'
    },
],
    devServer = {
        contentBase: [path.resolve('static-snapshots'), path.resolve('')],
        watchContentBase: true
    };

module.exports = [ {
    entry: {
        // categories: './citizens-guide/src/spending/categories/index.js',
        // countryComparison: './citizens-guide/src/spending/countries/index.js',
        intro: './src/libs/ffg/src/spending/intro/index.js',
        // trends: './citizens-guide/src/spending/trends/index.js'
    },
    devtool: devtool,
    devServer: devServer,
    mode: mode,
    // optimization: {
    //     minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    // },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        })
    ],
    output: {
        filename: '[name].js',
        path: __dirname + '/public/assets/ffg/spending/',
        publicPath: '/public/assets/ffg/spending/'
    },
    module: {
        rules: moduleRules
    }
 }, {
    entry: [
        // './src/libs/ffg/src/globalSass/cg.scss',
        './src/libs/ffg/src/globalSass/chapterIntroCommon.scss',
        './src/libs/ffg/src/globalSass/countryCommon.scss',
        './src/libs/ffg/src/globalSass/trendsCommon.scss',
        // './src/libs/ffg/src/globalSass/normalize.scss',
        './src/libs/ffg/src/bigPicture/scss/bp.scss',
        './src/libs/ffg/src/deficit/trends/deficit-trends.scss',
        './src/libs/ffg/src/revenue/categories/revenue-categories.scss',
        './src/libs/ffg/src/spending/categories/spending-categories.scss',
        './src/libs/ffg/src/debt/trends/debt-trends.scss',
        './src/libs/ffg/src/debt/analysis/debt-analysis.scss'
    ],
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    output: {
        path: __dirname + '/public/assets/ffg/css/',
        publicPath: '/public/assets/ffg/css/'
    },
    mode: mode,
    module: {
        rules: cssRules
    }
}];
