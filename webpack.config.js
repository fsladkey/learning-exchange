const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV':
      JSON.stringify(process.env.NODE_ENV || 'development')
  }),
  new CopyWebpackPlugin([
    { from: 'node_modules/react-big-calendar/lib/css/react-big-calendar.css', to: 'vendor/assets/stylesheets/react-big-calendar.css' },
  ])
]

// Having some issues uglifying es2015 features like 'let'. Just not gonna bother uglifying right now
// if (process.env.NODE_ENV === 'production') {
//   plugins.push(new webpack.optimize.UglifyJsPlugin({
//       compress: { warnings: false }
//     })
//   )
// }

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
            plugins: [
              require('babel-plugin-transform-class-properties'),
              require("babel-plugin-transform-object-rest-spread")
            ]
          },
        }],
      },
    ],
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', "*"]
  }
}
