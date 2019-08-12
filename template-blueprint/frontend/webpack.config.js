// required modules
const path = require("path");
const webpack = require("webpack");

// setting up project configs
const t9config = require("./t9config.json");

const isDevelopment = true;
const isProduction = false;
const port = 3002;

const webpackConfigArray = [];

// pushWebpackConfig function
const pushWebpackConfig = (language) => {
  webpackConfigArray.push({
    // https://webpack.js.org/configuration/dev-server/
    devServer: {
      contentBase: t9config.distFolder,
      compress: true,
      headers: { "Access-Control-Allow-Origin": "*" },
      hot: true,
      liveReload: false,
      disableHostCheck: true,
      host: "0.0.0.0",
      port
    },
    // https://webpack.js.org/configuration/devtool/#development
    devtool: "eval-source-map",
    // https://webpack.js.org/configuration/entry-context/#dynamic-entry
    entry: () => t9config.entries.reduce((entries, entry) => ({
      ...entries,
      [entry]: path.join(__dirname, "./src/entries/", entry, "/entry/index.tsx")
    }), {}),
    // https://webpack.js.org/configuration/mode/
    mode: isProduction ? "production" : (isDevelopment ? "development" : "none"),
    module: {
      rules: [
        // https://github.com/microsoft/TypeScript-Babel-Starter#create-a-webpackconfigjs
        { exclude: /node_modules/, loader: "babel-loader", test: /\.tsx?$/ },
        // https://webpack.js.org/loaders/source-map-loader/
        { enforce: "pre", loader: "source-map-loader", test: /\.js$/ },
      ],
    },
    // https://webpack.js.org/concepts/output/#multiple-entry-points
    output: {
      chunkFilename: "[name].chunk.js",
      filename: "[name].bundle.js",
      path: path.join(__dirname, t9config.distFolder, "/w/js/comp/" + language + "/"),
      publicPath: path.join("/w/js/comp/", language + "/"),
    },
    plugins: [
      // https://webpack.js.org/plugins/hot-module-replacement-plugin/
      isDevelopment ? new webpack.HotModuleReplacementPlugin() : null,
    ],
    // https://webpack.js.org/configuration/resolve/#resolveextensions
    resolve: { extensions: [".ts", ".tsx", ".js", ".json"] },
    // https://webpack.js.org/configuration/target/
    target: "web",
  });
};

// pushing configs
for (const language of t9config.languages) {
  // push a config version
  pushWebpackConfig(language);
  // on dev, choose only one language
  if (isDevelopment && language === t9config.developmentLanguage) {
    break;
  }
}

// exporting configs
module.exports = webpackConfigArray;
