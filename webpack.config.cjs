// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const fs = require("fs");

const isProduction = process.env.NODE_ENV == "production";

const fileNames = fs
  .readdirSync("./lib/out/vs")
  .reduce((acc, v) => ({ ...acc, [v]: `./src/${v}` }), {});

const config = {
  entry: "./test/file1.js",
  output: {
    path: path.resolve(__dirname, "test"),
    filename: "bundle.js",
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.(?:js|mjs|cjs)$/,
  //       exclude: /node_modules/,
  //       use: {
  //         loader: "babel-loader",
  //         options: {
  //           presets: [["@babel/preset-env", { targets: "chrome 58" }]],
  //         },
  //       },
  //     },
  //   ],
  // },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
