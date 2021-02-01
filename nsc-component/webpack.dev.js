/*
 * @Descripttion:
 * @version:
 * @Author: rxzhu
 * @Date: 2021-01-12 14:52:01
 * @LastEditors: rxzhu
 * @LastEditTime: 2021-01-13 13:46:54
 */
const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CleanPlugin = new CleanWebpackPlugin();
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const HTMLPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    chunkFilename: "[name].js",
  },
  mode: "development",
  devServer: {
    contentBase: "./dist",
    hot: true,
    proxy: {
      "/api": {
        target: "http://47.107.187.159",
      },
    },
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
                localIdentName: "[name]__[local]__[hash:base64:5]",
              },
            },
          },
          "less-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    CleanPlugin,
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"development"',
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[hash].css",
    }),
    new HTMLPlugin({
      title: "demo",
      filename: "index.html",
      template: path.resolve(__dirname, "./src/index.html"),
    }),
  ],
  devtool: "inline-source-map",
};
