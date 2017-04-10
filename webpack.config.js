var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: __dirname + '/dist',
    filename: "index.js"
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        include: __dirname + '/src/css',
        loaders: ['style', 'css', 'postcss', 'sass']
      },
      {
        test: /\.jsx?$/,
        include: __dirname + '/src/js',
        loader: 'babel'
      }
    ]
  },
  postcss: [
    autoprefixer
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Starter',
      inject: true,
      hash: true,
      showErrors: true,
      template: 'src/index.html'
    })
  ],
  devServer: {
    inline: true,
    historyApiFallback: true,
    port: 4170,
    stats: {
      colors: true
    }
  },
  resolve: {
    root: __dirname + '/src/js',
    extensions: ['', '.json', '.js', '.jsx']
  }
};
