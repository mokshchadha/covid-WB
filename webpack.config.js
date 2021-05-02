const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    bundle: "./src/frontend/react/index.jsx",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/env",
            {
              plugins: ["@babel/plugin-proposal-class-properties"],
            },
          ],
          cacheDirectory: true,
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "static/js/react"),
    publicPath: "/static/js/react/",
    filename: "[name].js",
    hotUpdateChunkFilename: "hot/hot-update.js",
    hotUpdateMainFilename: "hot/hot-update.json",
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
