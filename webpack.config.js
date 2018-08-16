const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: "./src/index.html"
    })
  ],
  resolve: {
    extensions: [".ts", ".js"]
  }
};
