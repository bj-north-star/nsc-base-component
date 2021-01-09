const path = require("path");
// 导入每次删除文件夹的插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// 导入抽取CSS的插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/components/index.js"),
  output: {
    path: path.join(__dirname, "./lib"),
    filename: "index.js",
    libraryTarget: "umd", //发布组件专用
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: path.resolve(__dirname, "./src"),
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              esModule: true,
              modules: true,
            },
          },
        ],
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
                localIdentName: "[local]",
              },
            },
          },
          "less-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", "ts", ".tsx"],
  },
  optimization: { minimize: true },
  plugins: [
    // 插件
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
  externals: {
    react: "react",
    "react-dom": "ReactDOM",
    "react-router-dom": "ReactRouterDOM",
    echarts: "echarts",
  },
};
