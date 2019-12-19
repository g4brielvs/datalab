require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
const LoadablePlugin = require('@loadable/webpack-plugin');

// window does not exist when we do builds.
// to account for this, we will check and use null loaders.
exports.onCreateWebpackConfig = ({ stage, actions, loaders }) => {
  actions.setWebpackConfig({
    devtool: "eval-source-map"
  });

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

    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /vega-embed/,
            use: loaders.null(),
          },
        ],
      },
    });

  };
  
  actions.setWebpackConfig({
    plugins: [
      new LoadablePlugin()
    ],
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
}
