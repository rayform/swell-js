var path = require('path');
var webpack = require('webpack');
var InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var env = require('./env');

console.log('Environment', env.stringified);

module.exports = {
  entry: './test/page/index.js',
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            sourceType: 'unambiguous',
          },
        },
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'test/page/index.html',
    }),
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),
    new webpack.DefinePlugin(env.stringified),
  ],
};
