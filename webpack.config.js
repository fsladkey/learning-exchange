var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV':
      JSON.stringify(process.env.NODE_ENV || 'development')
  }),
  new CopyWebpackPlugin([
    { from: 'node_modules/react-big-calendar/lib/css/react-big-calendar.css', to: 'vendor/assets/stylesheets/react-big-calendar.css' },
  ])
]

if (process.env.NODE_ENV === 'production') {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  )
}

module.exports = {
  context: __dirname,
  entry: [
    path.join(__dirname, 'frontend', 'entry.js')
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'app', 'assets', 'javascripts')
  },
  plugins: plugins,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { 
            presets: ['latest', 'react'],
            plugins: [require('babel-plugin-transform-class-properties')]
          },
        }],
      },
    ],
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', "*"]
  }
};
