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
              "bower_components/purescript-*/src/**/*.purs",
              "src/**/*.purs"
            ],
            pscIde: true
          }
        }
      ]
    }
  });
}

exports.resolvableExtensions = resolvableExtensions;
exports.onCreateWebpackConfig = onCreateWebpackConfig;
