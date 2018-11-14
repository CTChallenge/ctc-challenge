const webpack = require('webpack');
const path = require('path');

// const Dotenv = require('dotenv-webpack');




module.exports = {
  entry: './client/index.js',
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/env', '@babel/react'],
        },
      },
    ],
  },
  plugins: [
    // new Dotenv(),
  ],
};

