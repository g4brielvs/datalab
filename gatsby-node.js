/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

// const ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.onCreateWebpackConfig = ({ actions, loaders }) => {
  actions.setWebpackConfig({
    devtool: 'eval-source-map',
    // // this works to process css files, but not scss
    // module: {
    //   rules: [
    //     {
    //       test: /\.s?[ac]ss$/,
    //       loader: 'style-loader'
    //     }, {
    //       test: /\.s?[ac]ss$/,
    //       loader: 'css-loader',
    //       query: {
    //         modules: true,
    //         localIdentName: '[name]__[local]___[hash:base64:5]'
    //       }
    //     }
    //   ]
    // }
  });

  // plugins: [
  //   new ExtractTextPlugin('styles.css')
  // ]

};
