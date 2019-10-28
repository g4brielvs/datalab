require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

// window does not exist when we do builds.
// to account for this, we will check and use null loaders.
exports.onCreateWebpackConfig = ({ stage, actions, loaders }) => {
  actions.setWebpackConfig({
    plugins: [
      new LoadablePlugin()
    ]
  });
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /mapbox-gl/,
            use: loaders.null()
          },
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
      },
      devtool: 'eval-source-map'
    })
  }
};
