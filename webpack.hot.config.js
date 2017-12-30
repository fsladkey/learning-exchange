var path = require('path');
var webpack = require('webpack');

var config = require('./webpack.config');

module.exports = Object.assign({}, config, {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'frontend', 'entry.js')
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    publicPath: 'http://localhost:8080/javascripts/'
  },
  devServer: {
    publicPath: '/javascripts/',
    headers: { "Access-Control-Allow-Origin": "*" },
    host: "localhost",
    port: 8080,
    historyApiFallback: true,
    hot: true,
    inline: true
  },
  plugins: [
    ...config.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ]
});
1