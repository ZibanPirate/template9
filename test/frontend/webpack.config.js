// required modules
const path = require("path");
const webpack = require("webpack");
const StringReplacePlugin = require("string-replace-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// setting up project configs
const t9config = require("./t9config.json");

const isDevelopment = true;
const isProduction = false;
const port = 3002;
const entriesPathLength = (__dirname + "/src/entries/").length;

const webpackConfigArray = [];
// match replacement function
const replacement = (language) => function (match) {
  // we have: language, file path, placeholder, entry
  const entry = this.resourcePath.substring(entriesPathLength, this.resourcePath.indexOf("/", entriesPathLength));
  const placeholder = match.slice(2, -2);

  console.log("\n MATCH: ", this.resourcePath);

  // try to get from overwrites
  const overwrites = require(`./src/entries/${entry}/entry/dictionary-overwrites.json`);
  let value;
  if (overwrites["*"] && (value = overwrites["*"][placeholder])) {
    return value;
  } else if (overwrites[language] && (value = overwrites[language][placeholder])) {
    return value;
  } else {
    // then, try from this.resourcePath.json
    const fileDictionary = require(path.join(path.dirname(this.resourcePath), "/dictionary.json"));
    if (fileDictionary[language] && (value = fileDictionary[language][placeholder])) {
      return value;
    } else {
      // and then try the fallbacks
      const fallbacks = require(`./src/entries/${entry}/entry/dictionary-fallbacks.json`);
      if (fallbacks["*"] && (value = fallbacks["*"][placeholder])) {
        return value;
      } else if (fallbacks[language] && (value = fallbacks[language][placeholder])) {
        return value;
      } else {
        // finally if it's not found, set a placeholder value instead
        return "PLACEHOLDER";
      }
    }
  }
};

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
      [entry]: path.join(__dirname, "./src/entries/", entry, "/entry/index.tsx"),
    }), {}),
    // https://webpack.js.org/configuration/mode/
    mode: isProduction ? "production" : (isDevelopment ? "development" : "none"),
    module: {
      rules: [
        // https://github.com/jamesandersen/string-replace-webpack-plugin
        {
          test: /\.[tj]sx?$/,
          loader: StringReplacePlugin.replace({
            replacements: [{ pattern: /({\|)[A-Za-z0-9\s]+(\|})/ig, replacement: replacement(language) }],
          }),
        },
        // https://github.com/microsoft/TypeScript-Babel-Starter#create-a-webpackconfigjs
        { exclude: /node_modules/, loader: "babel-loader", test: /\.tsx?$/ },
        // https://webpack.js.org/loaders/source-map-loader/
        { enforce: "pre", loader: "source-map-loader", test: /\.js$/ },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: { hmr: isDevelopment },
            },
            {
              loader: StringReplacePlugin.replace({
                replacements: [{ pattern: /({\|)[A-Za-z0-9\s]+(\|})/ig, replacement: replacement(language) }],
              }),
            },
            "css-loader",
            {
              loader: "postcss-loader",
              options: { plugins: () => [require("precss"), require("autoprefixer")] },
            },
            "sass-loader",
          ],
        },
      ],
    },
    // https://webpack.js.org/concepts/output/#multiple-entry-points
    output: {
      chunkFilename: "[name].chunk.js",
      filename: "[name].js",
      path: path.join(__dirname, t9config.distFolder, "/w/comp/" + language + "/"),
      publicPath: path.join("/w/comp/", language + "/"),
    },
    plugins: [
      // https://webpack.js.org/plugins/hot-module-replacement-plugin/
      isDevelopment ? new webpack.HotModuleReplacementPlugin() : null,
      // https://github.com/webpack-contrib/mini-css-extract-plugin#advanced-configuration-example
      new MiniCssExtractPlugin({
        filename: isDevelopment ? "[name].css" : "[name].[hash].css",
        chunkFilename: isDevelopment ? "[id].css" : "[id].[hash].css",
      }),
    ],
    // https://webpack.js.org/configuration/resolve/#resolveextensions
    resolve: { extensions: [".ts", ".tsx", ".js", ".json", ".scss"] },
    // https://webpack.js.org/configuration/target/
    target: "web",
  });
};

// pushing configs for each language
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
