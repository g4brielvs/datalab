/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

// window does not exist when we do builds.
// to account for this, we will check and use null loaders.
exports.onCreateWebpackConfig = ({ stage, actions, loaders }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /mapbox-gl/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
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
    module: {
      rules: [
        {
          test: /\.csv$/,
          loader: 'csv-loader',
          options: {
            dynamicTyping: true,
            header: true,
            skipEmptyLines: true
          }
        }
      ]
    }
  });

  // plugins: [
  //   new ExtractTextPlugin('styles.css')
  // ]

};
