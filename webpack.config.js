var webpack = require('webpack');
var path = require('path');

var plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV':
      JSON.stringify(process.env.NODE_ENV || 'development')
  })
]

if (process.env.NODE_ENV === 'production') {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  )
}

module.exports = {
  context: __dirname,
  entry: { filename: path.join(__dirname, 'frontend', 'entry.js') },
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'latest']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js'],
    root: path.resolve('./node_modules')
  }
};
