/*
 * @Description:
 * @Author: wuhan
 * @Date: 2020-02-14 12:39:39
 */
const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CleanPlugin = new CleanWebpackPlugin({
  cleanOnceBeforeBuildPatterns: ["dist/*"],
});
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDev = process.env.NODE_ENV === "development";
const HTMLPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./example/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    chunkFilename: "[name].js",
  },
  mode: "development",
  devServer: {
    contentBase: "./dist",
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: path.resolve(__dirname, "./src"),
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /.jsx?$/,
        include: path.resolve(__dirname, "./example"),
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              esModule: true,
              modules: {
                localIdentName: isDev
                  ? "[name]__[local]__[hash:base64:5]"
                  : "[hash:base64]",
              },
            },
          },
          "less-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    CleanPlugin,
    // new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: isDev ? '"development"' : '"production"',
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[hash].css",
    }),
    new HTMLPlugin({
      title: "webpack-demos",
      filename: "index.html",
      template: path.resolve(__dirname, "./example/index.html"),
      // template: "src/index.html"
    }),
  ],
  devtool: "inline-source-map",
};
