const resolvableExtensions = () => [".purs"];

function onCreateWebpackConfig({ actions }) {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.purs$/,
          loader: "purs-loader",
          exclude: /node_modules/,
          query: {
            src: [
              "src/**/*.purs"
            ],
            pscIde: true,
            spago: true
          }
        }
      ]
    }
  });
}

exports.resolvableExtensions = resolvableExtensions;
exports.onCreateWebpackConfig = onCreateWebpackConfig;
