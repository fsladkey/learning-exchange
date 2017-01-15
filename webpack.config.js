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
  entry: [
    path.join(__dirname, 'frontend', 'entry.js')
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'app', 'assets', 'javascripts')
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'babel?presets[]=react,presets[]=latest,plugins[]=transform-class-properties'
        ],
        include: path.join(__dirname, 'frontend'),
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js'],
    root: path.resolve('./node_modules')
  }
};
